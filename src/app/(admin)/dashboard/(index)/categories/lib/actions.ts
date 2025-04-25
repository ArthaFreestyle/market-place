"use server"

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { schemaCategory } from "@/lib/schema";
import prisma from "../../../../../../../lib/prisma";

export async function createCategory(_:unknown,formData: FormData):Promise<ActionResult> {
    console.log(formData.get("category"))

    const validate = schemaCategory.safeParse({
        category: formData.get("category"),
    })

    if (!validate.success) {
        const formatted = validate.error.format()
        return { error: String(formatted.category?._errors) }
    }

    try {
        const category = await prisma.category.create({
            data: {
                name: validate.data.category,
            },
        })
    } catch (error) {
        console.error("Error creating category:", error)
        return { error: "Failed to create category" }
    }
    return redirect("/dashboard/categories")
}
