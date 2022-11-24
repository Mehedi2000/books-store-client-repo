import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-8">About Us !</h1>
      <div className="hero bg-base-200 w-4/5 mx-auto my-10 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="sm:w-full md:w-1/2">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4b/9e/3a/one-of-our-bookcases.jpg?w=1200&h=-1&s=1"
              alt=""
              className="rounded-lg shadow-2xl w-3/5 mx-auto"
            />
          </div>
          <div className="text-center sm:w-full md:w-1/2">
            <h1 className="text-2xl font-bold">Buy And Sell Used Books</h1>
            <p className="py-6 font-semibold">
              Search And Buy Second Hand Books Near You.Post Free Ad To Sell Old
              Books In City.Billed As The Largest In The City.And The Collection
              More Than 50k Items.
            </p>
            <p className="text-center">
              <button className="btn btn-primary">Learn More</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
