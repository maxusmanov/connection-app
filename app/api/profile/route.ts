import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: "fake-user-id",
    username: "shrish",
    display_name: "Shrish",
    avatar_url: null,
  });
}
