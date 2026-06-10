import React from "react";
import Container from "./Container";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="shadow">
      <Container>
        <div className="flex items-center justify-between py-2 top-menu">
          <div className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className="text-3xl font-extrabold  logo">
            landing
          </div>

          <button className="bg-button1 w-34 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;