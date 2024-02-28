"use client";

import Link from "next/link";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const collapseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navbarRef.current) return;

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
        navbarRef.current?.classList.add(
          "bg-gray-900/40",
          "filter",
          "backdrop-blur-md"
        );
      } else {
        navbarRef.current?.classList.remove(
          "bg-gray-900/40",
          "filter",
          "backdrop-blur-md"
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (!collapseRef.current) return;

    document.documentElement.addEventListener("click", (e: Event) => {
      if (!collapseRef.current?.contains(e.target as Element)) {
        setShow(false);
      }
    });
  });

  useEffect(() => {
    const navbarLinks = document.querySelectorAll("#navbarLinks");
    if (!navbarLinks) return;

    navbarLinks.forEach((e: Element) => {
      e.addEventListener("click", () => {
        setShow(false);
      });
    });
  });

  return (
    <nav
      ref={navbarRef}
      className="w-full p-4 fixed top-0 left-0 right-0 z-40 transition-colors ease-in-out duration-200"
    >
      {/* Container */}
      <div className="flex items-center justify-between">
        {/* Right */}
        <div className="flex items-center">
          <Link href="/" className="text-xl text-white font-extrabold me-10">
            KafeKoding
          </Link>

          <div
            ref={collapseRef}
            className={`flex items-start md:items-center flex-col md:flex-row gap-5 absolute z-[10000] md:static top-0 ${
              show
                ? "left-0 opacity-100 visible"
                : "-left-[1200px] opacity-0 invisible"
            } md:opacity-100 md:visible w-[70%] md:w-auto min-h-screen md:min-h-0 bg-black/70 filter backdrop-blur-md md:filter-none md:backdrop-blur-0 md:bg-inherit p-10 md:p-0 transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between w-full mb-2 md:hidden">
              <Link href="/" className="text-2xl font-extrabold text-white">
                KafeKoding
              </Link>
              <button
                type="button"
                className="text-white"
                onClick={() => setShow(false)}
              >
                <FontAwesomeIcon icon={faX} size="2x" />
              </button>
            </div>
            <Link
              href="/"
              id="navbarLinks"
              className="text-lg md:text-sm text-gray-300 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              id="navbarLinks"
              className="text-lg md:text-sm text-gray-300 hover:text-gray-100"
            >
              Tentang
            </Link>
            <Link
              href="/repositories"
              id="navbarLinks"
              className="text-lg md:text-sm text-gray-300 hover:text-gray-100"
            >
              Repository
            </Link>
            <Link
              href="/contact"
              id="navbarLinks"
              className="text-lg md:text-sm text-gray-300 hover:text-gray-100"
            >
              Kontak
            </Link>
          </div>
        </div>
        {/* Right */}

        {/* Left */}
        <div className="flex items-center gap-5">
          <Link
            target="_blank"
            href="https://github.com/Aeroxee"
            className="text-white text-xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            target="_blank"
            href="https://facebook.com/fajhrinazgul"
            className="text-white text-xl"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            target="_blank"
            href="https://instagram.com/fajhri_fath"
            className="text-white text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            target="_blank"
            href="https://www.tiktok.com/@fajhrifath"
            className="text-white text-xl"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {/* Left */}
      </div>
      {/* Container */}
    </nav>
  );
}
