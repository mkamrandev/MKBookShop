import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
      <div>
        <div>
          <div
            className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
              sticky
                ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"
                : ""
            }`}
          >
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {navItems}
                  </ul>
                </div>
                <a className="text-2xl font-bold cursor-pointer">MKBookShop</a>
              </div>
              <div className="navbar-end space-x-3">
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="hidden md:block">
                  <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                    <input
                      type="text"
                      className="grow outline-none dark:bg-slate-900 dark:text-white"
                      placeholder="Search"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-7 h-7 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
                <div className="">
                  <a
                    className="bg-black text-white px-3 py-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="font-bold text-2xl">Contact us</h3>

            {/* Namr */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
              {...register("name", { required: true })}
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
              <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
              {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
              <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-6 space-y-2">
              <span>Message</span>
              <br />
              <textarea {...register("text", { required: true })} type="text" className="textarea textarea-bordered w-80" placeholder="Bio"/>
              <br />
            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
        </div>
        <div>
          <div className="ml-0 mt-4 md:ml-16 p-4 ">
            <hr />
            <footer className="pt-4 footer text-base-content dark:bg-slate-900 dark:text-white">
              <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </nav>
              <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </nav>

              <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text dark:bg-slate-900 dark:text-white">
                      Enter your email address
                    </span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered join-item"
                    />
                    <button className="btn btn-primary join-item">
                      Subscribe
                    </button>
                  </div>
                </fieldset>
              </form>
            </footer>
            <footer className="footer footer-center p-2 text-base-content mt-4 dark:bg-slate-900 dark:text-white">
              <aside>
                <p>Copyright © 2024 - All right reserved by MKBookShop</p>
              </aside>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
