"use client";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

type Props = {
  to: string;
};

export default function ScrollTo({ to }: Props) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const targetElement = document.querySelector(to);
    if (!targetElement) return;

    buttonRef.current.addEventListener("click", () => {
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  return (
    <button ref={buttonRef} type="button" className="relative text-white">
      <div className="absolute top-1/2 border-gray-300 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon icon={faArrowDown} size="2x" />
      </div>
    </button>
  );
}
