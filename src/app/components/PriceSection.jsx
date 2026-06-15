import React from 'react'
import Container from './Container'

function PriceSection() {
  return (
    <div className="price-section h-auto pb-20">
      <Container>
        <div className="flex  flex-col justify-center items-center mt-25">
          <h3 className='font-bold text-3xl mb-8 hero-title'>A Price To Suit Everyone</h3>
          <p className='mb-10 w-5/12 text-center mx-auto hero-text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <div className='flex flex-col text-center mb-15'>
            <span className='font-bold hero-title text-4xl mb-2'>40$</span>
            <span className='text-sm text-kit-color font-semibold'>UI Design Kit</span>
          </div>
          <div className='flex flex-col text-center'>
            <span className='hero-text text-xs mb-2'>See, One price. Simple.</span>
            <button className="px-10 py-2 text-white bg-button font-bold cursor-pointer">Purchase Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PriceSection