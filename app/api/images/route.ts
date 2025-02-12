import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Image, { Image } from "@/models/Image"

export async function GET() {
    try {
        await connectToDatabase();
        const images = await Image.find({}).sort({ createdAt: -1 }).lean();

        if(!images || images.length === 0) {
            return NextResponse.json([], { status: 200 });
        }

        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching images: ", error);
        
        return NextResponse.json(
            {
                error: "Failed to fetch images"
            },
            {
                status: 500
            }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
    }
}