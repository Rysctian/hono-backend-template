import { Hono } from "hono";
import { create, destroy, index, show, update} from "./index.js";
import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/middlewares/auth.middleware.js";
import { createUserValidator } from "./validator.js";

const router = new Hono()
    .use(authMiddleware)
    .get("/users",index)
    .get("/users/:id",  show)
    .post("/user", createUserValidator,   create)
    .put("/user/:id",    update)
    .delete("/users/:id", destroy)


export default router;