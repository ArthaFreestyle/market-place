"use server"
import { redirect } from "next/navigation"
import { ActionResult } from "@/types"
import { schemaSignIn } from "@/lib/schema"
import bcrypt from "bcrypt"
import prisma from "../../../../../../../lib/prisma";
import { lucia } from "@/lib/auth"
import { cookies } from "next/headers"

export async function SignIn(
    _:unknown,
    formData:FormData
):Promise<ActionResult>{
    console.log(formData.get("email"))
    const validate = schemaSignIn.safeParse({
        email:formData.get("email"),
        password:formData.get("password"),
    })

    if(!validate.success){
        const formatted = validate.error.format();
        return {error:String(formatted.email._errors)}
    }

    const existingUser = await prisma.user.findFirst({
        where:{
            email:validate.data.email,
            type:"superadmin"
        }
    })

    if(!existingUser){
        return {error:"User not found"}
    }

    const comparePassword = bcrypt.compareSync(String(validate.data.password),existingUser.password)

    if(!comparePassword){
        return {error:"Email/password is incorrect"}
    }
    
    const session = await lucia.createSession(existingUser.id,{})
    const sessionCookie = lucia.createSessionCookie(session.id)
    const cookieStore = await cookies()
    cookieStore.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes)
    return redirect("/dashboard")
}