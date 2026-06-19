import React from 'react'
import Container from '../components/Container'

function LogIn() {
  return (
    <Container>
      <div className="shadow-2xl h-96 flex flex-col my-15 rounded  p-10 justify-center">
        <div className="flex mb-5 justify-items-center">
          <label className="mr-5 text-black">Username: </label>
          <input
            type="text"
            placeholder="Please enter your username..."
            className="border-2 rounded py-2 w-6/12 px-2"
          />
        </div>

        <div className="flex mb-10 justify-items-center">
          <label className="mr-5 text-black">Password: </label>
          <input
            type="Password"
            placeholder="Please enter your password"
            className="border-2 rounded py-2 w-6/12 px-2"
          />
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-2 text-white bg-button font-bold cursor-pointer rounded-xs">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
}

export default LogIn