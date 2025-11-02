import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import { UserData } from "../../data/user.js";

export async function index(ctx: Context) {
    const users = await UserData.findAll();
    return ctx.json({ success: true, data: users }, StatusCodes.OK);
}

export async function show(ctx: Context) {
    const { id } = ctx.req.param();
    const user = await UserData.findById(id);

    return ctx.json({ success: true, data: user }, StatusCodes.OK);
}

export async function create(ctx: Context) {
    const body = await ctx.req.json();
    const user = await UserData.create(body);

    return ctx.json({ success: true, data: user }, StatusCodes.CREATED);
}

export async function update(ctx: Context) {
    const { id } = ctx.req.param();
    const body = await ctx.req.json();
    
    const user = await UserData.update(id, body);
    return ctx.json({ success: true, data: user }, StatusCodes.OK);
}

export async function destroy(ctx: Context) {
    const { id } = ctx.req.param();
    await UserData.delete(id); 
    
    return ctx.json({ success: true }, StatusCodes.OK);
}