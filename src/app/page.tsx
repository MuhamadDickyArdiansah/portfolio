import Image from "next/image";
import Container from "../components/layouts/container";
import {
  ArrowRight,
  ArrowRightCircle,
  ArrowRightIcon,
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  HandGrab,
  MousePointer2,
  MoveRight,
} from "lucide-react";

import { projects } from "./data/projects";
import { experiences } from "./data/experiences";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 mt-20 ">
      <main id="home" className="">
        {/* HERO Section */}
        <section className="relative flex">
          <Container>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <div className="font-display font-bold">
                  <h1 className="text-[86px]">FULL STACK DEVELOPER</h1>
                  <h1 className="text-4xl">MUHAMAD DICKY ARDIANSAH</h1>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between">
                <div className="flex flex-col w-full sm:w-1/2 gap-10">
                  <div>
                    <p>
                      I build modern web applications with a focus on clean
                      design, practical functionality, and maintainable code.
                    </p>
                  </div>

                  <div>
                    <button className="flex items-center bg-black text-white text-xs rounded-full px-3 py-1 cursor-pointer font-sans">
                      Get Started <ArrowRight className="text-[6px]" />
                    </button>
                  </div>
                </div>

                <div className="relative flex w-full justify-center items-center pt-16 pb-6">
                  <div className="group relative w-full max-w-xs sm:max-w-sm">
                    {/* 1. Base Card / Bingkai Latar Belakang */}
                    <div className="relative aspect-square w-full rounded-full bg-gradient-to-b from-slate-100 to-slate-200 border border-black/5 shadow-xl shadow-black/5" />

                    {/* 2. Foto Subjek (Posisi Menerobos ke Atas Bingkai) */}
                    {/* Atur posisi tinggi foto dengan mengubah `-top-12` atau `scale-110` */}
                    <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                      <img
                        src="/images/pas-foto.png"
                        alt="Dicky's Profile"
                        className="relative -top-1 w-[100%] max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-xl"
                      />
                    </div>

                    {/* 3. Floating Badge & Kursor */}
                    <div className="absolute -bottom-2 -right-2 sm:-right-4 flex flex-col items-start z-20 pointer-events-none animate-bounce">
                      <MousePointer2 className="w-5 h-5 text-white fill-[#0066CC] -rotate-12 -mb-1.5 -ml-2.5 drop-shadow-md" />
                      <div className="bg-[#0066CC] text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-lg shadow-[#0066CC]/30 font-sans">
                        Dicky
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="scroll-mt-20 flex mt-20">
          <Container>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-1/2 gap-10">
                <div className="flex justify-center">
                  <h2 className="font-display font-bold text-2xl">About</h2>
                </div>
                <div>
                  <p className="font-sans text-xl">
                    I&apos;m a Full Stack Developer interested in building web
                    applications that are functional, responsive, and easy to
                    maintain. I work with modern web technologies to develop
                    user interfaces, implement application logic, and integrate
                    databases. I enjoy solving problems through code, learning
                    new technologies, and turning ideas into practical digital
                    solutions. My focus is on writing clean code and building
                    applications that provide a straightforward and reliable
                    user experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full sm:w-1/2 ">
                <div className="flex justify-center mb-10">
                  <h2 className="font-display font-bold text-2xl">
                    Experience
                  </h2>
                </div>
                {experiences.map((experience) => [
                  <div
                    key={experience.id}
                    className="flex w-full flex-col items-start font-sans"
                  >
                    {/* Timeline Item */}
                    <div className="flex gap-x-4">
                      {/* Kolom Garis & Titik Lingkaran */}
                      <div className="flex flex-col items-center">
                        {/* Titik Lingkaran (Bullet Dot) */}
                        <div className="z-10 h-3 w-3 shrink-0 rounded-full bg-slate-400 ring-4 ring-white dark:ring-slate-900" />

                        {/* Garis Vertikal */}
                        <div className="h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
                      </div>

                      {/* Konten Teks */}
                      <div className="-translate-y-1 pb-5">
                        <h2 className="font-display text-base font-bold text-slate-800 dark:text-white">
                          {experience.title}
                        </h2>
                        <h4 className="font-display text-[#1D1D1F]">
                          {experience.organization}
                        </h4>
                        <p className="mt-1 text-sm font-sans">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>,
                ])}
              </div>
            </div>
          </Container>
        </section>

        <section id="projects" className="scroll-mt-20 mt-20">
          <Container>
            <div className="flex justify-center">
              <h2 className="font-display font-bold text-2xl mb-10">
                Projects
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {projects.map((project) => [
                <div
                  key={project.id}
                  className="bg-[#F5F5F7] rounded-2xl overflow-hidden max-w-lg p-5 cursor-pointer transition-all duration-700 hover:scale-[1.015873]"
                >
                  <div className="flex flex-col gap-3 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <div>
                      <p>{project.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map((tag, index) => [
                        <span
                          key={index}
                          className=" font-sans border py-1.5 px-3 rounded-2xl text-xs font-medium"
                        >
                          {tag}
                        </span>,
                      ])}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className={project.imageSize}>
                      <img
                        className="w-full object-cover"
                        src={project.imageUrl}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-2">
                    <span className=" bg-white rounded-full p-1 flex justify-center items-center">
                      <ChevronRight />
                    </span>
                  </div>
                </div>,
              ])}
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-20 flex my-20 ">
          <Container>
            <div className="flex sm:justify-around justify-center items-center sm:items-start sm:flex-row flex-col">
              <div className="max-w-xs font-display">
                <h1 className="font-bold text-7xl">
                  Want to start a new project?
                </h1>
                <h4 className="text-2xl text-end">or just say hello</h4>
              </div>
              <div className="flex flex-col gap-10">
                <a
                  className="font-display text-2xl underline"
                  href="mailto:dickymuhamad140@gmail.com"
                >
                  dickymuhamad140@gmail.com
                </a>
                <div className="flex flex-wrap max-w-60 gap-2 font-sans">
                  <span className="flex  items-center gap-2 cursor-pointer">
                    <img
                      src="images/icons/instagram.png"
                      className="w-5 h-5 object-cover"
                    />{" "}
                    Instagram
                  </span>

                  <span className="flex  items-center gap-2">
                    <img
                      src="images/icons/whatsapp.png"
                      className="w-5 h-5 object-cover"
                    />{" "}
                    Whatsapp
                  </span>

                  <span className="flex  items-center gap-2">
                    <img
                      src="images/icons/LinkedIn.png"
                      className="w-5 h-5 object-cover"
                    />{" "}
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
