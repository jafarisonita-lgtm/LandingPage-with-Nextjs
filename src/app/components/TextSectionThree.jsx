import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionThreeImage from '../../assetes/img/3.png';
import IntroSectionText from './IntroSectionText';

function TextSectionThree() {
  return (
    <div className="mt-10 mb-30">
      <Container>
        <div className="grid grid-cols-2 gap-5  py-4 items-center-safe">
          <div className="flex">
            <Image
              src={sectionThreeImage}
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

export default TextSectionThree