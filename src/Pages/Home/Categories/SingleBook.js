import React from "react";

const SingleBook = ({ book }) => {
  const {
    img,
    categoryId,
    title,
    location,
    resalePrice,
    categoryName,
    originalPrice,
    yearsUse,
    name,
    condition,
    mobileNum,
    postedTime,
    description,
  } = book;
  return (
    <div className="card card-compact sm:w-64 md:w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-80" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-semibold text-success">Seller-Name : {name}</h2>
        <h2 className="font-semibold">Mobile-Number : {mobileNum}</h2>
        <h2 className="font-semibold">Location : {location}</h2>
        <h2 className="font-semibold text-red-600">
          Resale-Price : ${resalePrice}
        </h2>
        <h2 className="font-semibold">Original-Price : ${originalPrice}</h2>
        <h2 className="font-semibold">Uses : {yearsUse}</h2>
        <h2 className="font-semibold">Condition : {condition}</h2>
        <h2 className="font-semibold">Post-Time : {postedTime}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
