import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(request) {
    try {
        const user = await currentUser()
        if (!user) {
            return new Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const dbUser = await db.user.findUnique({
            where: {
                clerkId: user.id
            }
        })
        if (!dbUser) {
            return new Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const playlists = await db.playlist.findMany({
            where: {
                userId: dbUser.id
            },
            include: {
                problems: {
                    include: {
                        problem: {
                            select: {
                                id: true,
                                title: true,
                                diffculty: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        })
        return new Response({ success: true, data: playlists }, { status: 200 });
    } catch (error) {
        console.error("Error fetching playlists:", error);
        return new Response({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const user = await currentUser()
        if (!user) {
            return new Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const dbUser = await db.user.findUnique({
            where: {
                clerkId: user.id
            }
        })
        if (!dbUser) {
            return new Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const { name, description } = await request.json()
        if (!name) {
            return new Response({ success: false, error: "Name is required" }, { status: 400 });
        }
        const playlistData = await db.playlist.create({
            data: {
                name,
                description,
                userId: dbUser.id
            }
        })
        return new Response({ success: true, data: playlistData }, { status: 201 });
    } catch (error) {
        console.error("Error creating playlist:", error);
        return new Response({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}