import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(request, response) {
  try {
    const { name } = await request.json();
    const { id } = await fetchUser();

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "Please login to create a subreddit!",
      });
    }

    if (!name) {
      return NextResponse.json({
        success: false,
        error: "Please provide a name for the subreddit!",
      });
    }

    const subreddit = await prisma.subreddit.create({
      data: {
        name,
        userId: id,
      },
    });

    return NextResponse.json({ success: true, subreddit });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
