"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const topElement = document.querySelector("#top");
    if (!topElement) return;

    buttonRef.current.addEventListener("click", () => {
      topElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  useEffect(() => {
    function handleScroll() {
      // Mendapatkan tinggi jendela (viewport)
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Mendapatkan posisi scroll
      var scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      // Mendapatkan tinggi dokumen
      var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // Menghitung batas 40% dari tinggi dokumen
      var fortyPercent = documentHeight * 0.1;

      // Jika posisi scroll mencapai 40% dari tinggi dokumen
      if (scrollPosition >= fortyPercent) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`fixed z-10 w-10 bottom-20 right-5 h-10 text-white bg-sky-600 hover:bg-sky-700 rounded-full ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-200 ease-in`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
