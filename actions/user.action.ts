"use server"

import UserModel from "@/models/user.model";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/user.model";

export async function createUser(user: User) {
  try {
    await connectToDatabase();
    const newUser = await UserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(clerkId: string, updatedData: Partial<User>) {
  try {
    await connectToDatabase();
    const user = await UserModel.findOneAndUpdate(
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
    const result = await UserModel.findOneAndDelete({ clerkId });
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete user");
  }
}