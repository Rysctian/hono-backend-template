import { zValidator } from "@hono/zod-validator";
import z from "zod";


export const createUserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email("Invalid email address"),
    image: z.string().url().optional().or(z.literal('')),
}).strict();


export const createUserValidator = zValidator('json', createUserSchema,(result, ctx)=>{
    if (!result.success) {
        return ctx.json({ 
            success: false,
            errors: result.error.issues.map((issue)=> issue.message)
        }, 400);
    }
});