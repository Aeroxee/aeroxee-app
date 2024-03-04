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
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "./modal";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let isLogined = false;
  const isLoginedCookie = getCookie("isLogined");
  if (isLoginedCookie) {
    isLogined = true;
  } else {
    isLogined = false;
  }

  // login handle
  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username === "fajhrinazgul" && password === "root") {
      setCookie("isLogined", true);
      window.location.href = "/";
      return;
    } else {
      window.alert("Password salah");
      setShowModal(false);
      return;
    }
  };

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
    <>
      <nav
        ref={navbarRef}
        className="w-full p-4 fixed top-0 left-0 right-0 z-40 transition-colors ease-in-out duration-200"
      >
        {/* Container */}
        <div className="flex items-center justify-between">
          {/* Right */}
          <div className="flex items-center">
            <Link href="/" className="text-xl text-white font-extrabold me-10">
              Aeroxee
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
                  Aeroxee
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
                href="/blog"
                id="navbarLinks"
                className="text-lg md:text-sm text-gray-300 hover:text-gray-100"
              >
                Blog
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
              {isLogined ? (
                <button
                  type="button"
                  className="text-lg md:text-sm text-white bg-rose-600 hover:bg-rose-700 px-2 py-1 rounded-sm"
                  onClick={() => {
                    deleteCookie("isLogined");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  className="text-lg md:text-sm text-white bg-sky-600 hover:bg-sky-700 px-2 py-1 rounded-sm"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button>
              )}
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

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h4 className="text-xl font-extrabold text-white text-center mb-5">
          Login Akun
        </h4>
        <form action="" method="post" onSubmit={handleLoginSubmit}>
          <div className="flex flex-col text-white mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent px-4 py-1 rounded-sm border border-gray-700"
            />
          </div>
          <div className="flex flex-col text-white mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent px-4 py-1 rounded-sm border border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="text-white px-4 py-1 bg-sky-600 hover:bg-sky-700 rounded-md"
          >
            Login
          </button>
        </form>
      </Modal>
    </>
  );
}
