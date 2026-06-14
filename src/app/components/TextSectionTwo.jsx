import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionTwoImage from '../../assetes/img/2.png';
import IntroSectionText from './IntroSectionText';

function TextSectionTwo() {
  return (
    <div className="mt-10 mb-30">
      <Container>
        <div className="grid grid-cols-2 gap-5  py-4 items-center-safe">
          <div className="flex">
            <Image
              src={sectionTwoImage}
              alt="sectionImage"
              className="section-image w-auto h-75"
            />
          </div>
          <div className="flex flex-col">
            <IntroSectionText />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TextSectionTwo