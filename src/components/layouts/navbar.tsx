"use client";

import { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "./nav-items";
import { Menu, X } from "lucide-react";
import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pendingScrollTarget = useRef<HTMLElement | null>(null);
  const resumeUrl =
    "https://drive.google.com/file/d/1VyDWgQbe0u7e87kLnrNrOP13J54PJ_92/view?usp=sharing";

  function navigateToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    closeMenu = false,
  ) {
    event.preventDefault();
    const section = document.querySelector<HTMLElement>(sectionId);

    if (!section) {
      return;
    }

    window.history.pushState(null, "", sectionId);

    if (closeMenu) {
      pendingScrollTarget.current = section;
      setIsOpen(false);
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="fixed top-0 z-50 w-full bg-background py-2">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between"
        >
          <a
            href="#home"
            className="font-display font-bold"
            onClick={() => setIsOpen(false)}
          >
            Muhamad Dicky
          </a>
          <div className="flex items-center gap-4 font-sans">
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(event) => navigateToSection(event, item.id)}
                  className="rounded-full px-3 py-2 text-sm transition-colors hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover md:flex"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-surface md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </nav>
        <AnimatePresence
          onExitComplete={() => {
            pendingScrollTarget.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            pendingScrollTarget.current = null;
          }}
        >
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-2 flex flex-col gap-2 overflow-hidden border-t border-border pt-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.id}
                    onClick={(event) => navigateToSection(event, item.id, true)}
                    className="block rounded-xl px-3 py-2 font-medium transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex min-h-11 items-center self-start rounded-full bg-accent px-4 font-medium text-on-accent transition-colors hover:bg-accent-hover"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
