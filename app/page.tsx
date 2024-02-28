import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={`w-full h-screen relative`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[70%] text-center">
          <h1 className="text-xl md:text-4xl font-extrabold mb-2 text-white">
            Selamat Datang di Aeroxee
          </h1>
          <p className="text-white">
            Website ini adalah website pribadi dari{" "}
            <Link
              href="https://github.com/Aeroxee"
              className="text-sky-400 underline"
              target="_blank"
            >
              Fajri Fath
            </Link>
          </p>
        </div>
      </header>
    </>
  );
}
