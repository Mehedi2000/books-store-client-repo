import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleProvider = new GoogleAuthProvider();

  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.option);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const googleUser = {
          name: user.displayName,
          email: user.email,
          role: "Buyer",
        };
        toast.success("User Created Successfully");
        saveUser(googleUser.name, googleUser.email, googleUser.role);
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://books-store-server-delta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-10 border-2">
        <h2 className="text-2xl text-center font-medium mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose an Option</span>
            </label>
            <select
              {...register("option")}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be atleast 6 character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary mt-6 mb-4 w-full"
            value="SIGN UP"
            type="submit"
          />
        </form>
        {signUpError && <p className="text-red-600">{signUpError}</p>}
        <p>
          Already Have An Account?{" "}
          <Link className="text-primary font-medium" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
