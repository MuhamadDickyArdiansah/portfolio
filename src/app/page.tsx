import Image from "next/image";
import Container from "../components/layouts/container";
import { ArrowRight, ChevronRight, MousePointer2 } from "lucide-react";

import { projects } from "./data/projects";
import { experiences } from "./data/experiences";

export default function Home() {
  return (
    <div className="mt-20 flex flex-1 flex-col">
      <main id="home">
        {/* HERO Section */}
        <section className="relative flex">
          <Container>
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="font-display font-bold">
                <h1 className="text-[clamp(2.5rem,8.5vw,5.375rem)] leading-[0.98] tracking-[-0.045em]">
                  FULL STACK DEVELOPER
                </h1>
                <p className="mt-3 text-[clamp(1.25rem,4vw,2.25rem)] leading-tight tracking-[-0.025em]">
                  MUHAMAD DICKY ARDIANSAH
                </p>
              </div>

              <div className="flex flex-col-reverse justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
                <div className="flex w-full flex-col gap-6 sm:w-1/2 sm:gap-8">
                  <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                    I build modern web applications with a focus on clean
                    design, practical functionality, and maintainable code.
                  </p>

                  <div>
                    <a
                      href="#projects"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-contrast px-4 py-2 font-sans text-sm font-medium text-on-contrast transition-colors hover:bg-secondary"
                    >
                      Get Started <ArrowRight aria-hidden="true" size={16} />
                    </a>
                  </div>
                </div>

                <div className="relative flex w-full items-center justify-center pt-8 pb-6 sm:w-1/2 sm:pt-12">
                  <div className="group relative w-full max-w-[16rem] sm:max-w-sm">
                    <div className="relative aspect-square w-full rounded-full border border-foreground/5 bg-gradient-to-b from-surface-tint to-surface-tint-strong shadow-xl shadow-foreground/5" />

                    <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
                      <Image
                        src="/images/pas-foto.png"
                        alt="Portrait of Dicky"
                        width={800}
                        height={1000}
                        loading="eager"
                        sizes="(max-width: 640px) 256px, 384px"
                        className="relative top-5 h-auto w-full max-w-none object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105"
                      />
                    </div>

                    <div className="pointer-events-none absolute left-11/12 -bottom-2 z-20 flex flex-col items-start sm:-right-4 animate-bounce">
                      <MousePointer2
                        aria-hidden="true"
                        className="-mb-1.5 -ml-2.5 h-5 w-5 -rotate-12 fill-accent text-on-accent drop-shadow-md"
                      />
                      <div className="rounded-full bg-accent px-3.5 py-1.5 font-sans text-xs font-medium text-on-accent shadow-lg shadow-accent/30 sm:text-sm">
                        Dicky
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="mt-20 flex scroll-mt-20 sm:mt-24">
          <Container>
            <div className="flex flex-col gap-12 sm:flex-row sm:gap-8 lg:gap-12">
              <div className="flex w-full flex-col gap-6 sm:w-1/2 sm:gap-8">
                <div className="flex justify-center">
                  <h2 className="font-display text-2xl font-bold">About</h2>
                </div>
                <div className="max-w-2xl">
                  <p className="font-sans text-base leading-relaxed sm:text-lg">
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

              <div className="flex w-full flex-col sm:w-1/2">
                <div className="mb-8 flex justify-center">
                  <h2 className="font-display font-bold text-2xl">
                    Experience
                  </h2>
                </div>
                <div>
                  {experiences.map((experience) => (
                    <div
                      key={experience.id}
                      className="flex w-full items-start font-sans"
                    >
                      <div className="flex min-h-full gap-x-4">
                        <div className="flex shrink-0 flex-col items-center">
                          <div className="z-10 h-3 w-3 shrink-0 rounded-full bg-muted ring-4 ring-background" />
                          <div className="min-h-8 w-0.5 flex-1 bg-border" />
                        </div>

                        <div className="-translate-y-1 min-w-0 pb-6">
                          <h2 className="font-display text-base font-bold text-foreground">
                            {experience.title}
                          </h2>
                          <h3 className="font-display text-sm text-foreground sm:text-base">
                            {experience.organization}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="projects" className="mt-20 scroll-mt-20 sm:mt-24">
          <Container>
            <div className="flex justify-center">
              <h2 className="mb-8 font-display text-2xl font-bold sm:mb-10">
                Projects
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {projects.map((project) => {
                const cardContent = (
                  <>
                    <div className="mb-5 flex flex-col gap-3 sm:mb-6">
                      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-surface-raised/80 px-3 py-1.5 font-sans text-xs font-medium text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={`/${project.imageUrl}`}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 512px"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between px-1 text-sm font-medium text-muted">
                      <span className="transition-colors group-hover:text-accent">
                        {project.liveUrl
                          ? "View project"
                          : "Live website unavailable"}
                      </span>
                      {project.liveUrl && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-raised text-foreground transition-transform duration-300 group-hover:translate-x-1">
                          <ChevronRight aria-hidden="true" size={18} />
                        </span>
                      )}
                    </div>
                  </>
                );
                const cardClassName =
                  "group w-full max-w-lg overflow-hidden rounded-3xl border border-border/50 bg-surface p-4 shadow-sm shadow-foreground/5 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/10 sm:p-5";

                return project.liveUrl ? (
                  <a
                    key={project.id}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title} project website (opens in a new tab)`}
                    className={`${cardClassName} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <article key={project.id} className={cardClassName}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section id="contact" className="my-20 flex scroll-mt-20 sm:my-24">
          <Container>
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start sm:justify-around sm:gap-8">
              <div className="w-full max-w-xs font-display">
                <h2 className="text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                  Want to start a new project?
                </h2>
                <p className="mt-2 text-right text-xl sm:text-2xl">
                  or just say hello
                </p>
              </div>
              <div className="flex w-full min-w-0 flex-col gap-6 sm:w-auto sm:gap-8">
                <a
                  className="break-all font-display text-lg underline underline-offset-4 sm:break-normal sm:text-xl lg:text-2xl"
                  href="mailto:dickymuhamad140@gmail.com"
                >
                  dickymuhamad140@gmail.com
                </a>
                <div className="flex max-w-full flex-wrap gap-x-4 gap-y-3 font-sans text-sm sm:max-w-60">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/images/icons/instagram.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-cover"
                    />
                    Instagram
                  </span>

                  <span className="flex items-center gap-2">
                    <Image
                      src="/images/icons/whatsapp.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-cover"
                    />
                    Whatsapp
                  </span>

                  <span className="flex items-center gap-2">
                    <Image
                      src="/images/icons/LinkedIn.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-cover"
                    />
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
