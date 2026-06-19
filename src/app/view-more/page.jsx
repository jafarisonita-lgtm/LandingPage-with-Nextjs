import React from 'react'
import Container from '../components/Container'
import Link from 'next/link';
import UIKit from '../../assetes/img/ui-kit.png'
import Image from 'next/image';

function DetailPage() {
  return (
    <Container>
      <div className="h-auto shadow-2xl my-8 p-10 w-10/12 mx-auto rounded">
        <h2 className='font-semibold mb-8 text-3xl hero-title text-shadow-2xs'>Detail Product Page</h2>
        <Image src={UIKit} alt='ui-kit photo' className='mb-5 mx-auto'/>
        <p className='mb-5 text-justify text-sm leading-6 hero-text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <p className='mb-5 text-justify text-sm leading-6 hero-text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <p className='mb-8 text-justify text-sm leading-6 hero-text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <h4 className='font-bold text-2xl text-orange-600 mb-10'>Price: <span className='text-2xl'>25$</span></h4>
        <Link href="/" className="px-8 py-2 text-white bg-fuchsia-700 font-bold cursor-pointer rounded-xs">Back to Home</Link>
      </div>
    </Container>
  );
}

export default DetailPage