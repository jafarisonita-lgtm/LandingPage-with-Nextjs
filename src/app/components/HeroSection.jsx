import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="bg-header flex flex-col">
      <Navbar />
      <Container>
        <div className="flex flex-col py-5 h-auto w-6/12 my-50 content-center ">
          <h1 className="font-extrabold text-4xl mb-7 w-9/12 text-justify hero-title">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="w-9/12 text-justify mb-12 hero-text  leading-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="flex w-7/12 justify-between">
            <button className="px-8 py-2 text-white bg-button font-bold">
              Purchase UI Kit
            </button>
            <button className="px-8 py-2 font-bold button-text-color border bg-white">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
