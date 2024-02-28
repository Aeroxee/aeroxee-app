import Container from "@/components/container";
import Image from "next/image";

import Code from "@/components/code";
import ScrollTo from "@/components/scrollTo";
import imgA from "@/public/images/a.jpg";
import Link from "next/link";

const codeText = `// Package main is package for show Aeroxee bio.
package main

import (
	"fmt"
)

type Bio map[string]string

func main() {
	for k, v := range GetBio() {
		fmt.Printf("%+v: %+v\n", k, v)
	}
}

// OperatingSystem function to get operating system used by 'Fajri Fath'.
func OperatingSystem() string {
	return "Arch Linux"
}

// GetBio is function to return map array bio.
func GetBio() Bio {
	return Bio{
		"- ⚡ Quick bio:":                    "Without Error I am nothing",
		"- 🔭 I'm currently working on":      "I am an active student to learn the world of programming ---,
		"- 🌱 I'm currently learning":        "Golang, Postgresql, TypeScript, Node.JS, Go to Full Stack Developper",
		"- 👯 I'm looking to collaborate on": "Golang, React JS, And Python related projects",
		"- 🤔 I'm looking for help with":     "Anything related to what I am currently learning 😅",
		"- 💬 Ask me about":                  "Python, Golang, PostgreSQL, Software Design & Architecture, Web-Dev and SEO",
		"- 📫 How to reach me:":              "https://github.com/aZ4ziL#you-can-reach-me-at-alien",
	}
}
`;

export default function About() {
  return (
    <>
      <Code />
      <header className={`w-full h-screen relative`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[70%] text-center">
          <h1 className="text-xl md:text-4xl font-extrabold mb-2 text-white">
            Tentang Saya
          </h1>
          <p className="text-white">Tekan tombol untuk scroll down.</p>

          <div className="mt-5">
            <ScrollTo to="#about" />
          </div>
        </div>
      </header>

      <Container>
        <div id="about" className="pb-[200px] w-full md:w-[60%] mx-auto">
          <h1 className="text-2xl text-white font-extrabold mb-4">
            Tentang Saya
          </h1>
          <div className="flex flex-col gap-5">
            <Image
              src={imgA}
              alt=""
              width={1200}
              height={800}
              className="w-full h-[200px]"
            />
            <div className="w-full text-white text-lg ">
              <p className="mb-2">
                Saya mahasiswa dari{" "}
                <Link
                  href="http://metamedia.ac.id"
                  className="text-sky-500 underline"
                >
                  Universitas Metamedia
                </Link>{" "}
                yang aktif berkarya dibidang IT, khususnya di bidang pemrograman
                website.
              </p>
              <pre>
                <code className="language-go">{codeText}</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
