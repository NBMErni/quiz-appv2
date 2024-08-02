import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { login } from "../redux/authSlice";

import logo from "../../public/images/logo.svg";
import gradhat from "../../public/images/hands-graduate.svg";

const Login = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}User/login`, {
        username: data.username,
        password: data.password,
      });

      if (response.status === 200) {
        const res = response.data;
        console.log(res);

        dispatch(
          login({ role: res.role, user: res.user, isAuthenticated: true })
        );

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${res.user}!`,
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            if (res.role === "admin") {
              navigate("/admin");
            } else {
              navigate("/home");
            }
          }
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect username or password",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <>
      <section className="h-screen pt-20 lg:pt-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center ">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
          <div className="left">
            <div className="flex justify-center mb-10">
              <img
                src={logo}
                alt="logo"
                className="w-[250px] sm:w-[200px] md:w-[250px] lg:w-[350px]"
              />
            </div>

            <div className="text-center mb-10">
              <h1 className="mb-3">Welcome back!</h1>
              <h1>Please login to your account.</h1>
            </div>

            <div className="px-6 py-5 rounded-md bg-slate-200 mx-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col my-5">
                  <label>Username</label>
                  <input
                    type="text"
                    className="py-1 pl-2"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-red-500">Username is required</span>
                  )}
                </div>

                <div className="flex flex-col my-5">
                  <label>Password</label>
                  <input
                    type="password"
                    className="py-1 pl-2"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-5 py-2 my-5 bg-amber-400 rounded-md text-white font-bold"
                    onClick={() => handleSubmit()}
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <h1 className="text-center">
                Don't have an account yet?{" "}
                <span className="text-blue-600">Register here</span>
              </h1>
            </div>
          </div>
          <div className="right">
            <img
              src={gradhat}
              alt="grad-hat"
              className="hidden sm:hidden lg:block lg:w-[350px] lg:mt-28"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
