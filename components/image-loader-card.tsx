"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageLoaderCardProps = {
  src: string | StaticImageData;
};

export default function ImageLoaderCard({ src }: ImageLoaderCardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <Image
          src={src}
          alt="blog"
          width={1200}
          height={800}
          className="w-full h-[200px] rounded-lg"
          onLoad={(e) => {
            setIsLoading(true);
          }}
        />

        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-900 rounded-lg ${
            !isLoading ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all duration-200 ease-in-out`}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon
              icon={faSpinner}
              size="2x"
              className="text-white animate-spin"
            />
          </div>
        </div>
      </div>
    </>
  );
}
