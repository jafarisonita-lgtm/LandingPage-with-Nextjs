"use client"
import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionFourImage from '../../assetes/img/4.png';
import IntroSectionText from './IntroSectionText';
import Link from 'next/link';


function TextSectionFour() {
  return (
   <div className="mt-10 mb-20 md:mb-30">
  <Container>
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-4 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={sectionFourImage}
          alt="sectionImage"
          className="w-full max-w-md lg:max-w-full h-auto"/>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <IntroSectionText />

        <div className="mt-6">
          <Link href="/login">
            <button
              className=" w-full sm:w-auto px-8 py-2 text-white bg-button font-bold cursor-pointer rounded-md" >
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Container>
</div>
  );
}

export default TextSectionFour