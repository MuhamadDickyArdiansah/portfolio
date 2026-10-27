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

export default function Home() {
  return (
    <div className="flex flex-col flex-1 mt-20 ">
      <main id="home" className="">
        {/* HERO Section */}
        <section className="flex mt-20">
          <Container>
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <div className="flex flex-col gap-10">
                <div className="font-display font-bold">
                  <h1 className="text-7xl">FULL STACK DEVELOPER</h1>
                  <h1 className="text-4xl">MUHAMAD DICKY ARDIANSAH</h1>
                </div>

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

              <div>
                <div className="flex w-full sm:w-1/2 items-center justify-center">
                  <div className="group relative">
                    <img
                      src="/images/fto.png"
                      alt="Dicky's Profile"
                      className="w-50  rounded-full  mb-1 object-cover object-top"
                    />

                    <div className="absolute bottom-0 left-full flex flex-col items-start z-20 pointer-events-none animate-bounce">
                      {/* Kursor Panah / Pointer */}
                      <MousePointer2 className="w-5 h-5 text-white fill-[#0066CC] -rotate-10 -mb-2 -ml-3 drop-shadow-sm" />

                      {/* Badge Label */}
                      <div className="bg-[#0066CC] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl shadow-md">
                        Dicky
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="flex mt-20">
          <Container>
            <div className="flex flex-col gap-10">
              <div className="flex justify-center">
                <h2 className="font-display font-bold text-5xl">About</h2>
              </div>
              <div>
                <p className="font-sans text-xl">
                  I&apos;m a Full Stack Developer interested in building web
                  applications that are functional, responsive, and easy to
                  maintain. I work with modern web technologies to develop user
                  interfaces, implement application logic, and integrate
                  databases. I enjoy solving problems through code, learning new
                  technologies, and turning ideas into practical digital
                  solutions. My focus is on writing clean code and building
                  applications that provide a straightforward and reliable user
                  experience.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="projects" className="mt-20">
          <Container>
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
                    <div className="w-sm">
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

        <section id="contact" className="flex my-20 ">
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
