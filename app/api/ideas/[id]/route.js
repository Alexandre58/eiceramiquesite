import { NextResponse } from "next/server";
import ideas from "../ideas.json";
export async function GET(request, context) {
  console.log("************** pathname***************");
  console.log({ pathname: request.nextUrl.pathname, context });

  const { id } = context.params;
  const idea = ideas.find((idea) => idea.id === id);
  console.log({ ideaFromEndPoint: idea });
  return NextResponse.json({
    idea,
    msg: `bien recupéré l'id du context ${context.params.id}`,
  });
}
