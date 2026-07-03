"use client"
import React from "react";
import Container from "./Container";
import Link from "next/link";


function HeroSection() {
  return (
    <div className="bg-header flex flex-col">
      <Container>
        <div className="flex flex-col  py-10  md:py-20   w-full md:w-8/12 " >
          <h1 className="font-extrabold md:text-5xl mb-6  w-full md:w-9/12  hero-title">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className=" w-full  md:w-9/12 mb-8   md:mb-12 leading-7 hero-text" >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className=" flex flex-col sm:flex-row gap-4 w-full md:w-6/12">
            <Link href="/login">
              <button className=" w-full sm:w-auto px-8 py-2 text-white bg-button font-bold rounded">
                Purchase UI Kit
              </button>
            </Link>
            <Link
              href="/view-more"
              className=" w-full sm:w-auto px-8 py-2 font-bold button-text-color border-2 rounded bg-white text-center" >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
