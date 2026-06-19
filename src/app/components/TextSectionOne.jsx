import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionOneImage from '../../assetes/img/1.png';
import IntroSectionText from './IntroSectionText';
import IconImage from '../../assetes/img/Lefticon.png'

function TextSectionOne() {
  return (
    <div className="mt-10 mb-20 md:mb-30">
  <Container>
    <div
      className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-4 items-center"
    >
      {/* Content */}
      <div className="flex flex-col">
        <IntroSectionText />

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-8
          mt-8
          "
        >
          <div>
            <i className="mb-4 section-icons p-1 text-white inline-block">
              <Image src={IconImage} alt="icon-image" />
            </i>

            <h5 className="hero-title mb-3 font-bold">
              Title Goes Here
            </h5>

            <p className="section-icons-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
            </p>
          </div>

          <div>
            <i className="mb-4 section-icons p-1 text-white inline-block">
              <Image src={IconImage} alt="icon-image" />
            </i>

            <h5 className="hero-title mb-3 font-bold">
              Title Goes Here
            </h5>

            <p className="section-icons-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src={sectionOneImage}
          alt="sectionImage"
          className="w-full max-w-md lg:max-w-full h-auto"
        />
      </div>
    </div>
  </Container>
</div>
  );
}

export default TextSectionOne