"use client";

import { useState, useEffect } from "react";

import { navItems } from "./nav-items";
import { ArrowUpRight, Menu } from "lucide-react";
import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" fixed w-full top-0 z-50 py-2 gap-3 bg-white ">
      <Container>
        <nav className="flex justify-between items-center">
          <h3 className="font-display font-bold">Muhamad Dicky</h3>
          <div className="flex justify-between gap-4 font-sans">
            <div className="hidden md:flex justify-between gap-2">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  className="hover:bg-[#F5F5F7] px-3 py-1 rounded-2xl "
                >
                  <a href={item.id}>{item.label}</a>
                </span>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1VyDWgQbe0u7e87kLnrNrOP13J54PJ_92/view?usp=sharing"
              target="_blank"
              className="md:flex items-center bg-[#0066CC] text-white rounded-full px-3 cursor-pointer hidden aria-hidden:true"
            >
              Resume
            </a>
          </div>

          <div
            className={`cursor-pointer md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden border-t border-white/50 backdrop-blur-xl max-md:group-has-checked:grid flex flex-col gap-3 flex-col">
            <div className="flex flex-col justify-between gap-2">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  className="hover:bg-[#F5F5F7] px-3 py-1 rounded-2xl border"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.id}>{item.label}</a>
                </span>
              ))}
            </div>
            <div>
              <button
                className=" flex items-center bg-[#0066CC] text-white rounded-full px-3 cursor-pointer "
                onClick={() => setIsOpen(false)}
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
