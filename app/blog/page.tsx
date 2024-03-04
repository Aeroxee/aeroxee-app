import Container from "@/components/container";
import HeaderBlog from "@/components/header-blog";
import { ClientDB } from "@/libs/db";
import getMoment from "@/libs/getMoments";
import stripHtmlAndTruncate from "@/libs/truncate";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Key } from "react";

export const metadata: Metadata = {
  title: "Blog | Aeroxee",
  description: "Ini adalah blog saya",
};

export default async function Blog() {
  const blogs = await ClientDB.db("aeroxee")
    .collection("blog")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  const cookieStore = cookies();
  const isLogined = cookieStore.get("isLogined");

  return (
    <Container>
      <h1 className="text-2xl text-white font-extrabold mb-4">Blog Saya</h1>

      {isLogined && <HeaderBlog />}

      <div className="md:w-[60%] md:mx-auto">
        {blogs.map((blog: any, index: Key) => (
          <div key={index} className="p-4 border-b border-gray-300">
            <Link
              href={`/blog/${blog._id}`}
              className="text-xl text-sky-600 underline font-extrabold"
              prefetch={false}
            >
              {blog.title}
            </Link>
            <div className="flex items-center flex-wrap mb-4">
              <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                <FontAwesomeIcon icon={faUser} />
                <span>{blog.fullName}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                <FontAwesomeIcon icon={faClock} />
                <span>{getMoment(blog.createdAt)}</span>
              </div>
            </div>

            <p className="text-sm text-white font-light">
              {stripHtmlAndTruncate(blog.content, 20)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
