import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "../../lib/prisma";
import { Lucia } from "lucia";
import { RoleUser } from "@prisma/client";
import { cache } from "react";
import { cookies } from "next/headers";
import { Session, User } from "lucia";


const adapter = new PrismaAdapter(prisma.session,prisma.user);

export const lucia = new Lucia(adapter,{
    sessionCookie:{
        expires: false,
        attributes:{
            secure: process.env.NODE_ENV === "production"
        }
    },
    getUserAttributes: (attribute)=>{
        return {
            id: attribute.id,
            name: attribute.name,
            email: attribute.email,
            role: attribute.type
        }
    }
})

export const getUser = cache(async ():Promise<{user : User , session:Session} | {user:null,session:null}> => {
    const cookieStore = await cookies();
	const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;
	if (!sessionId) {
        return { user: null, session: null };
    };
	const result = await lucia.validateSession(sessionId);
	try {
		if (result.session && result.session.fresh) {
			const sessionCookie = lucia.createSessionCookie(result.session.id);
			cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
		if (!result.session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
	} catch {
		// Next.js throws error when attempting to set cookies when rendering page
	}
	return result;
});


declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
        userId: number;
        DatabaseUserAttributes: {
            id: number;
            name: string;
            email: string;
            type: RoleUser;
        }
	}
}