import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";

const SingleCategory = () => {
  const books = useLoaderData();
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold text-center">All Books Are Here</h1>
      <div className="mt-8 w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-24">
        {books.map((book) => (
          <SingleBook key={book._id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
