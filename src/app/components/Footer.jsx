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
    <div className=" h-50 flex justify-center items-center footer-section">
      <Container>
        <div>
          <div className="grid grid-cols-3  gap-4 justify-between py-5 items-center">
            <p className="text-sm text-gray-500 ">©2023 Yourcompany</p>
            <h2 className="text-center text-3xl font-bold  logo">
              <Image src={Logo} alt='my-logo' />
            </h2>
            <button className="footer-button  text-sm absolute right-14 cursor-pointer font-semibold text-white rounded-xs">
              Purchase now
            </button>
          </div>
          <div className="border-b-2 border-slate-300"></div>
          <div className="flex justify-between items-center py-5">
            <nav className="flex top-menu hero-text">
              <Link href="/" className="mr-10 text-xs">
                Home
              </Link>
              <Link href="/" className="mr-10 text-xs">
                About
              </Link>
              <Link href="/" className="mr-10 text-xs">
                Contact
              </Link>
            </nav>
            <div className="flex justify-center items-center text-xs">
              <Link href="/" className="mr-5 text-gray-500">
                 <FontAwesomeIcon icon={faFacebook} />
              </Link>
               
              <Link href="/" className="mr-5  text-gray-500">
                 <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="/" className="mr-5  text-gray-500 ">
                 <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="/" className="mr-5  text-gray-500">
                 <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link href="/" className=" text-gray-500">
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