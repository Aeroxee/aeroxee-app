import Container from "@/components/container";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Key } from "react";

export default function Loading() {
  return (
    <Container>
      <h1 className="text-2xl text-white font-extrabold mb-4">Blog Saya</h1>

      <div className="md:w-[60%] md:mx-auto">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((repo: any, index: Key) => (
          <div
            key={index}
            className="p-4 border-b border-gray-300 animate-pulse"
          >
            <div className="w-60 h-3.5 bg-gray-500 rounded-full mb-2"></div>
            <div className="flex items-center flex-wrap mb-4">
              <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                <FontAwesomeIcon icon={faUser} />
                <div className="w-20 h-1.5 bg-gray-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-300 me-4">
                <FontAwesomeIcon icon={faClock} />
                <div className="w-20 h-1.5 bg-gray-500 rounded-full"></div>
              </div>
            </div>

            <div className="w-full h-2.5 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-full h-2.5 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-[60%] h-2.5 bg-gray-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </Container>
  );
}
