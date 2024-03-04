import Container from "@/components/container";
import { ClientDB } from "@/libs/db";
import { ObjectId } from "mongodb";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const blog: any = await ClientDB.db("aeroxee")
    .collection("blog")
    .findOne({ _id: ObjectId.createFromHexString(id) });

  return {
    title: `${blog.title} - ${blog.fullName} | Aeroxee`,
  };
}

export default async function Detail({ params }: Props) {
  const id = params.id;

  const blog: any = await ClientDB.db("aeroxee")
    .collection("blog")
    .findOne({ _id: ObjectId.createFromHexString(id) });

  return (
    <Container>
      <div id="about" className="pb-[100px] w-full md:w-[60%] mx-auto">
        <h1 className="text-2xl text-white font-extrabold mb-4">
          {blog.title}
        </h1>

        <div
          className="prose prose-headings:text-sky-600 prose-p:text-white prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </Container>
  );
}
