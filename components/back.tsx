"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-2">
      <button
        type="button"
        onClick={() => router.back()}
        className="text-sm font-extralight text-white"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </button>
    </div>
  );
}
