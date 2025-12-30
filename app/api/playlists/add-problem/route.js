import { db } from "@/lib/db";

export async function POST(request, { params }) {
    try {
        const user = await currentUser()
        if (!user) {
            return Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const dbUser = await db.user.findUnique({
            where: {
                clerkId: user.id
            }
        })
        if (!dbUser) {
            return new Response({ success: true, error: "Unauthorized" }, { status: 401 });
        }
        const { problemId, playlistId } = await request.json()
        if (!problemId || !playlistId) {
            return Response({ success: false, error: "problemId and playlistId are required" }, { status: 400 });
        }
        const playlist = await db.playlist.findFirst({
            where: {
                id: playlistId,
                userId: dbUser.id
            },
            select: {}
        })
        if (!playlist) {
            return Response({ success: false, error: "Playlist not found" }, { status: 404 });
        }
        const problemInPlaylist = await db.problemInPlaylist.create({
            data: {
                problemId,
                playlistId
            }
        })
        return Response({ success: true, data: problemInPlaylist }, { status: 200 });
    } catch (error) {
        console.error("Error adding problem to playlist:", error);
        return Response({ success: false, error: "Internal Server Error" }, { status: 500 });

    }
}