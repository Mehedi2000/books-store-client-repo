import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:8000/categories").then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center">All Categories </h1>
      <div className="bg-base-200 text-center w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-40">
        {categories.map((category) => (
          <p key={category._id}>
            <Link to={`/category/${category.categoryId}`}>
              <button className="btn btn-outline btn-primary">
                {category.title}
              </button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
