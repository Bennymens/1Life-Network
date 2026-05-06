import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import type { VideosData, Video } from "@/data/types";

const DATA_PATH = path.join(process.cwd(), "src", "data", "videos.json");
const SESSION_TOKEN = "1life-admin-session";

function readVideos(): VideosData {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeVideos(data: VideosData) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_TOKEN);
  return !!token?.value;
}

// GET — return all videos
export async function GET() {
  try {
    const data = readVideos();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Failed to read videos" }, { status: 500 });
  }
}

// POST — add a new video
export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { youtubeId, artist, category, title, description } = body;

    if (!youtubeId || !artist || !category || !title) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = readVideos();
    const type = category.toLowerCase().includes("interview") ? "interviews" : "sessions";

    const newVideo: Video = {
      id: `${type === "sessions" ? "sess" : "int"}-${Date.now()}`,
      youtubeId,
      artist,
      category,
      title,
      description: description || "",
      createdAt: new Date().toISOString(),
    };

    data[type].push(newVideo);
    writeVideos(data);

    return Response.json({ success: true, video: newVideo }, { status: 201 });
  } catch {
    return Response.json({ error: "Failed to add video" }, { status: 500 });
  }
}
