import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            categoryId: data.categoryId,
            img: imgData.data.url,
            title: data.title,
            location: data.location,
            name: data.name,
            condition: data.condition,
            description: data.description,
            categoryName: data.categoryName,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            yearsUse: data.yearsUse,
            mobileNum: data.mobileNum,
            postedTime: data.postedTime,
          };
          //save product information to the db
          fetch("https://books-store-server-delta.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.title} is addded successfully`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };

  return (
    <div className="w-96 p-8">
      <h1 className="text-center text-3xl font-bold mb-8"> Add A Product</h1>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">CategoryId</span>
          </label>
          <select
            {...register("categoryId")}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="01" selected>
              01
            </option>
            <option value="02">02</option>
            <option value="03">03</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <input
            type="text"
            {...register("condition", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <select
            {...register("categoryName")}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="Biographies" selected>
              Biographies
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="text"
            {...register("resalePrice", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            {...register("originalPrice", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Uses Years</span>
          </label>
          <input
            type="text"
            {...register("yearsUse", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register("mobileNum", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Posted Time</span>
          </label>
          <input
            type="text"
            {...register("postedTime", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-primary w-full mt-6"
          value="ADD A PRODUCT"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
