import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionThreeImage from '../../assetes/img/3.png';
import IntroSectionText from './IntroSectionText';

function TextSectionThree() {
  return (
    <div className="mt-10 mb-20 md:mb-30">
  <Container>
    <div
      className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-4 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={sectionThreeImage}
          alt="sectionImage"
          className=" w-full max-w-md lg:max-w-full h-auto"/>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <IntroSectionText />
      </div>
    </div>
  </Container>
</div>
  );
}

export default TextSectionThree