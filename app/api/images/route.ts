import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Image from "@/models/image.model";
import type { Image as ImageType } from "@/models/image.model";

export async function GET() {
  try {
    await connectToDatabase();
    const images = await Image.find({}).sort({ createdAt: -1 }).lean();

    if (!images || images.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images: ", error);

    return NextResponse.json(
      {
        error: "Failed to fetch images",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body: ImageType = await request.json();
    if (!body.title || !body.description || !body.imageURL) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const newImage = await Image.create(body);
    return NextResponse.json(newImage);
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      {
        error: "Failed to upload image",
      },
      {
        status: 500,
      }
    );
  }
}
