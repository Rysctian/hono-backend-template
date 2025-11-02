import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/database.js"; 
import { openAPI } from "better-auth/plugins";
import { authSchema } from "@/db/schema.js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", 
        schema: authSchema
    }),
    emailAndPassword: { 
        enabled: true, 
    }, 
    plugins: [openAPI()]
});