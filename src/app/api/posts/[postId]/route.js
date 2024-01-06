import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function PUT(request, response) {
  try {
    const { title, message } = await request.json();
    const { postId } = response.params;
    const { id } = await fetchUser();

    const findPost = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "Please login to edit!",
      });
    } else if (id !== findPost.userId) {
      return NextResponse.json({
        success: false,
        error: "You can only edit your own posts!",
      });
    }

    let post;

    if (title && message) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: title,
          message: message,
        },
      });
    } else if (title) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: title,
        },
      });
    } else if (message) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          message: message,
        },
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "You cannot update unless you input some information!",
      });
    }

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(request, response) {
  try {
    const { postId } = response.params;
    const { id } = await fetchUser();

    const findPost = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "Please login to delete the post!",
      });
    } else if (id !== findPost.userId) {
      return NextResponse.json({
        success: false,
        error: "You can only delete your own posts!",
      });
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ success: true, post: deletedPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
