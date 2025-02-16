import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(request: NextRequest) {
    try {
        const { name, username, email, password } = await request.json()
        
        if (!name || !username || !email || !password) {
            return NextResponse.json(
              { error: "All fields are required" },
              { status: 400 }
            );
          }
        
        await connectToDatabase();
        
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return NextResponse.json(
                {
                    error: "Email already registered"
                },
                {
                    status: 400
                }
            );
        }

        await User.create({
            name,
            username,
            email,
            password
        });

        console.log("User created sucessfully!");

        return NextResponse.json(
            {
                message: "User registered successfully"
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.error("Registration error:", error);
        
        return NextResponse.json(
          {
            error: "Failed to register user"
        },
          {
            status: 500
        }
        );
    }
}