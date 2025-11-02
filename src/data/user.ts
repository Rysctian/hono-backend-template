import { desc, eq } from "drizzle-orm";
import { db } from "@/db/database.js"; 
import { type NewUser, type User } from "@/utils/types.js";
import { NotFoundError } from "@/utils/error.js";
import { users } from "@/db/schema.js";



export const UserData = {

  async findAll(): Promise<User[]> {
    return await db.select().from(users).orderBy(users.id);
  },
  
  async findById(id: string): Promise<User | null> {
    const [result] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    if (!result) throw new NotFoundError("User not found!");
    return result;
  },

  async findByEmail(email: string): Promise<User | null> {
    const [result] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!result) throw new NotFoundError("Email not found!");
    return result;
  },

  async create(user: NewUser): Promise<User> {
    await db.insert(users).values(user);
    const [createdUser] = await db.select().from(users).where(eq(users.email, user.email)).limit(1);
    if (!createdUser)throw new Error("Failed to create user");
    return createdUser;
  }, 

  async update(id: string, userData: Partial<NewUser>): Promise<User> {
      await db.update(users).set(userData).where(eq(users.id, id));
      const [updatedUser] = await db.select().from(users).where(eq(users.id, id)).limit(1);
      if (!updatedUser) throw new Error("Failed to fetch updated user"); 
      return updatedUser;
  },

  async delete(id: string): Promise<boolean> {
    await db.delete(users).where(eq(users.id, id));
    const alreadyDeleted = this.findById(id);
    if(!alreadyDeleted) return true;
    return false;
  },

};