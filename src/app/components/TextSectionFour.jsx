import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionFourImage from '../../assetes/img/4.png';
import IntroSectionText from './IntroSectionText';

function TextSectionFour() {
  return (
    <div className="mt-10 mb-30">
      <Container>
        <div className="grid grid-cols-2 gap-5  py-4 items-center-safe">
          <div className="flex">
            <Image
              src={sectionFourImage}
              alt="sectionImage"
              className="section-image w-auto h-75"
            />
          </div>
          <div className="flex flex-col">
            <IntroSectionText />
            <div>
            <button className="px-8 py-2 text-white bg-button font-bold">
              Purchase Now
            </button>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TextSectionFour