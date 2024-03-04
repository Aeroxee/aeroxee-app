import { ClientDB } from "@/libs/db";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await ClientDB.db("aeroxee").collection("blog").insertOne({
      fullName: data.fullName,
      title: data.title,
      content: data.content,
      createdAt: new Date(),
    });
    return Response.json({ status: "success" }, { status: 201 });
  } catch (error) {
    return Response.json({ status: "error" }, { status: 400 });
  }
}

export async function GET() {
  const results = await ClientDB.db("aeroxee")
    .collection("blog")
    .find()
    .toArray();

  return Response.json({ status: "success", message: "", data: results });
}
