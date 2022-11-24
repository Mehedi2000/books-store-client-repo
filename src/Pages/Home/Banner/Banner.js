import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div className="banner-container">
        <div className="banner z-20">
          <div className="pt-32 z-40">
            <h2 className="text-white text-4xl lg:text-6xl font-bold">
              <p className="text-center mb-3">THE</p>
              <p className="text-center mb-3">SECOND HAND BOOKS</p>
              <p className="text-center">STORE</p>
            </h2>
            <p className="text-center mt-6">
              <button className="btn btn-primary text-center">
                Learn More
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
