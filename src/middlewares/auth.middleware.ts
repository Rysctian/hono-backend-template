import { auth } from "@/lib/auth.js";
import { createMiddleware } from "hono/factory";


export const authMiddleware = createMiddleware(async(ctx, next) =>{
    const session = await auth.api.getSession({ headers: ctx.req.raw.headers });

  	if (!session) {
        return ctx.json({ error: false, message: "Unauthorized" }, 401);
  	}
  	ctx.set("user", session.user);
  	ctx.set("session", session.session);
  	await next();
})
