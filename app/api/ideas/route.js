import { NextResponse } from "next/server";
import ideas from "./ideas.json";

export async function GET(request) {
  // console.log("response request**********");
  // console.log({ url: request.url, request });
  return NextResponse.json(ideas);
}
export async function POST(request) {
  const { title, description } = await request.json();
  const idea = {
    id: Date.now().toString(),
    title,
    description,
  };
  ideas.push(idea);
  console.log({ ideaFromServer: idea });
  console.log("***************");
  console.log(ideas);
  console.log("***************");

  return NextResponse.json({ idea, status: 201 });
}
