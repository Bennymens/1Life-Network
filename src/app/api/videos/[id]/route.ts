import fs from "fs";
import path from "path";
import type { VideosData } from "@/data/types";
import { isAuthenticated } from "@/lib/auth";

const DATA_PATH = path.join(process.cwd(), "src", "data", "videos.json");

function readVideos(): VideosData {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeVideos(data: VideosData) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// PUT — update a video
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const data = readVideos();

    let found = false;
    for (const type of ["sessions", "interviews"] as const) {
      const index = data[type].findIndex((v) => v.id === id);
      if (index !== -1) {
        data[type][index] = { ...data[type][index], ...body, id };
        found = true;
        break;
      }
    }

    if (!found) {
      return Response.json({ error: "Video not found" }, { status: 404 });
    }

    writeVideos(data);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to update video" }, { status: 500 });
  }
}

// DELETE — remove a video
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const data = readVideos();

    let found = false;
    for (const type of ["sessions", "interviews"] as const) {
      const index = data[type].findIndex((v) => v.id === id);
      if (index !== -1) {
        data[type].splice(index, 1);
        found = true;
        break;
      }
    }

    if (!found) {
      return Response.json({ error: "Video not found" }, { status: 404 });
    }

    writeVideos(data);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to delete video" }, { status: 500 });
  }
}
