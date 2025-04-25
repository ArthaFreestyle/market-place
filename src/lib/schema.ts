import {z} from 'zod';

export const schemaSignIn = z.object({
    email: z.string({required_error:"Email is required"}).email({message:"Invalid email"}),
    password: z.string({required_error:"Password is required"}).min(6,{message:"Password must be at least 6 characters long"}),
});

export const schemaCategory = z.object({
    category: z.string({required_error:"Category is required"}).min(1,{message:"Category is required"}),
});