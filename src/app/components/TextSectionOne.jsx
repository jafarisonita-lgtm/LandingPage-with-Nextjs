import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import sectionOneImage from '../../assetes/img/1.png';
import IntroSectionText from './IntroSectionText';
import IconImage from '../../assetes/img/Lefticon.png'

function TextSectionOne() {
  return (
    <div className="mt-10 mb-30 ">
      <Container>
        <div className="grid grid-cols-2 gap-5  py-4 items-center-safe">
          <div className="flex flex-col">
            <IntroSectionText />
            <div className="flex w-10/12 justify-between">
              <div className="mr-6">
                <i className="mb-4 section-icons p-1 text-white">
                  <Image src={IconImage} alt="icon-image"/>
                </i>
                <h5 className="hero-title mb-3 font-bold">Title Goes Here</h5>
                <p className="section-icons-text ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div>
                <i className="mb-4 section-icons p-1 text-white">
                  <Image src={IconImage} alt="icon-image"/>
                </i>
                <h5 className="hero-title mb-3 font-bold">Title Goes Here</h5>
                <p className="section-icons-text ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-4">
            <Image src={sectionOneImage} alt="sectionImage"  className='section-image ' />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TextSectionOne