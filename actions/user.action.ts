"use server";

import User from "@/models/user.model";
import { connectToDatabase } from "@/lib/db";
import { User as UserInterface } from "@/models/user.model";

export async function createUser(user: Omit<UserInterface, "_id" | "createdAt" | "updatedAt">) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
}

export async function updateUser(clerkId: string, updatedData: Partial<UserInterface>) {
  try {
    await connectToDatabase();
    const user = await User.findOneAndUpdate(
      { clerkId },
      { $set: updatedData },
      { new: true }
    );
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const result = await User.findOneAndDelete({ clerkId });
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete user");
  }
}