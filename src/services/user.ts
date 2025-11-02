// import { desc, eq } from "drizzle-orm";
// import { db } from "../db/database.js";
// import { users, type NewUser, type User } from "../db/schema/users.js";
// import { NotFoundError } from "../utils/error.js";

import type { User } from "@/db/schema.js";

// export async function getAllUsers() {
//     const allUsers =  await db.select().from(users).orderBy(users.id);

//     if(!allUsers) throw new NotFoundError("Users not Found");
    
//     return allUsers;
// }

// export async function getUserById(id: number) {
//     const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    
//     if(user.length == 0) throw new NotFoundError("User not Found");
    
//     return user;
// }
// export async function createUser(user: NewUser) {
//      return db.insert(users).values(user);
// }
// export async function beforeInsertUser(user: User){
//     if(user.){

//     }
// }