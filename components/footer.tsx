import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed z-10 bottom-0 left-0 right-0 w-full p-3 bg-gray-900/20 filter backdrop-blur-sm">
      <p className="text-white text-center">
        &copy; Copyright 2024:{" "}
        <Link href="/" className="text-sky-400 underline">
          Aeroxee
        </Link>
      </p>
    </footer>
  );
}
