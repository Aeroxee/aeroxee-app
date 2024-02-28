import Container from "@/components/container";
import getMoment from "@/libs/getMoments";
import { faClock, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Octokit } from "@octokit/rest";
import Link from "next/link";
import { Key } from "react";

export default async function Repositories() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repositories = await octokit.repos.listForAuthenticatedUser({
    sort: "created",
    direction: "desc",
    visibility: "public",
    headers: {
      "If-None-Match": "",
    },
  });

  return (
    <>
      <Container>
        <h1 className="text-2xl text-white font-extrabold mb-4">
          Repository Saya
        </h1>

        <div className="md:w-[60%] md:mx-auto">
          {repositories.data.map((repo: any, index: Key) => (
            <div key={index} className="p-4 border-b border-gray-300">
              <Link
                href={repo.html_url}
                target="_blank"
                className="text-xl text-sky-600 underline font-extrabold"
              >
                {repo.name}
              </Link>
              <div className="flex items-center flex-wrap mb-4">
                <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{getMoment(repo.created_at)}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                  <FontAwesomeIcon icon={faCode} />
                  <span>{repo.language}</span>
                </div>
              </div>

              <p className="text-sm text-white font-light">
                {repo.description ? repo.description : "Tidak ada deskripsi."}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
