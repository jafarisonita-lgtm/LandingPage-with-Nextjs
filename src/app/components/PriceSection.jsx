"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link';


function PriceSection() {
  return (
    <div className="price-section h-auto py-16 md:py-24">
  <Container>
    <div className="flex flex-col justify-center items-center text-center">
      <h3
        className="font-bold text-2xl md:text-3xl mb-6 hero-title " >
        A Price To Suit Everyone
      </h3>

      <p
        className=" mb-10 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 hero-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus.
      </p>

      <div className="flex flex-col text-center mb-12">
        <span
          className="font-bold hero-title text-3xl md:text-4xl mb-2">
          $40
        </span>

        <span className="text-sm text-kit-color font-semibold">
          UI Design Kit
        </span>
      </div>

      <div className="flex flex-col text-center">
        <span className="hero-text text-xs mb-3">
          See, One price. Simple.
        </span>

        <Link href="/login">
          <button
            className=" w-full sm:w-auto px-10 py-2 text-white bg-button font-bold cursor-pointer rounded-md " >
            Purchase Now
          </button>
        </Link>
      </div>
    </div>
  </Container>
</div>
  );
}

export default PriceSection