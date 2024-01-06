import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(request, response) {
  try {
    const { title, message, subredditId, parentId } = await request.json();

    if (!message) {
      return NextResponse.json({
        success: false,
        error: "Please provide a message!",
      });
    }

    if (!subredditId) {
      return NextResponse.json({
        success: false,
        error: "Please select a subreddit!",
      });
    }

    const user = await fetchUser();

    if (!user.id) {
      return NextResponse.json({
        success: false,
        error: "Please login to post!",
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        message,
        parentId,
        userId: user.id,
        subredditId,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
