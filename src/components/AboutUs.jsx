import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="pink_diamond-removebg-preview.png" alt="About Us" className="rounded-lg shadow-lg"/>
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-purple-900 border-b-2 border-purple-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-gray-800">About <span className="text-purple-600">Our Company</span></h2>
            <p className="text-gray-700">
              At AJ Mehta Diamonds, we pride ourselves on crafting brilliance. With decades of expertise in diamond 
              manufacturing, we transform raw stones into exquisite gems that captivate and inspire. Our commitment 
              to precision, innovation, and sustainability ensures that every diamond we create meets the highest 
              standards of quality and elegance. From cutting-edge technology to skilled craftsmanship, we bring 
              timeless beauty to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
