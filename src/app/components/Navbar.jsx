"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Container>

        <div className="flex items-center justify-between py-4 ">

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 menu-text-color">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>

          {/* Logo */}
          <div className="text-xl md:text-3xl font-extrabold logo">
            Landing
          </div>

          {/* Desktop Button */}
          <Link href="/login" className="hidden md:block">
            <button className="bg-button1 px-6 py-2 text-white rounded-md">
              Buy Now
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl "
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className=" md:hidden flex flex-col gap-4 py-4 menu-text-color">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>

            <Link href="/login">
              <button className="bg-button1 px-6 py-2 text-white rounded-md w-full">
                Buy Now
              </button>
            </Link>
          </div>
        )}

      </Container>
    </nav>
  );
}