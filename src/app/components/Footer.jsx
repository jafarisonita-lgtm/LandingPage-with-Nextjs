"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Logo from '../../assetes/img/logo.png'
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-section py-8 md:py-12">
  <Container>
    <div>
      {/* Top Footer */}
      <div
        className=" flex flex-col md:grid md:grid-cols-3 gap-6 items-center py-5">
        <p className="text-sm text-gray-500 text-center md:text-left">
          ©2023 Yourcompany
        </p>

        <div className="flex justify-center">
          <Image src={Logo} alt="my-logo" />
        </div>

        <div className="flex justify-center md:justify-end">
          <Link href="/login">
            <button
              className="footer-button px-6 py-2 text-sm font-semibold text-white rounded-md cursor-pointer ">
              Purchase Now
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-slate-300"></div>

      {/* Bottom Footer */}
      <div
        className=" flex flex-col md:flex-row justify-between items-center gap-6 py-5 " >
        {/* Menu */}
        <nav
          className=" flex flex-col sm:flex-row items-center gap-4 hero-text" >
          <Link href="/" className="text-xs">
            Home
          </Link>

          <Link href="/" className="text-xs">
            About
          </Link>

          <Link href="/" className="text-xs">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div
          className=" flex justify-center items-center gap-5 text-xs ">
          <Link href="/" className="text-gray-500">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link href="/" className="text-gray-500">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link href="/" className="text-gray-500">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>

          <Link href="/" className="text-gray-500">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>

          <Link href="/" className="text-gray-500">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </div>
  </Container>
</div>
  );
}

export default Footer