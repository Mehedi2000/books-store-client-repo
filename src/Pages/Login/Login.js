import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
// import UseToken from "../../hooks/UseToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  // const [token] = UseToken(loginUserEmail);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-10 border-2">
        <h2 className="text-2xl text-center font-medium mb-4">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
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
                  message: "Password must be atleast 6 characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary w-full mt-6 mb-4"
            value="Login"
            type="submit"
          />
          {loginError && <p className="text-red-600 font-bold">{loginError}</p>}
        </form>
        <p>
          New to Books Store?
          <Link className="text-primary font-medium" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
