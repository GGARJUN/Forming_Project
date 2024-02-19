// import React from 'react'

import { useState } from "react";

export const NavBar = () => {
  // function change (){
  //   alert("hello")
  // }
  const [open, setOpen] = useState(false);
  const change = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav class=" bg-green-300 w-full  px-5 py-2 rounded-lg">
        <div class="flex  ">
          <a href="">
            <img
              class="h-12 w-16 pr-5 border-r mr-5 border-green-400 p-1"
              src="images/Logo.jpg"
              alt=""
            />
          </a>
          <div class="my-auto">
            <button
              onClick={change}
              className="hover:bg-green-500 rounded-md lg:hidden p-2 mx-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
            <ul class="hidden   lg:flex font-bold text-gray-600">
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="./index.html">
                  Home
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="./about.html">
                  About
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="#product">
                  Service
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="">
                  Product
                </a>
              </li>

              <li class=" flex  hover:shadow-xlm hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <button onClick={change} className="flex pl-5 ">
                  Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class=" mr-3 w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </li>

              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="">
                  Contect
                </a>
              </li>
            </ul>
          </div>
          <a
            href=""
            class="my-auto text-md px-5 py-2 hover:text-white hover:bg-green-600 bg-green-400 rounded-xl font-bold ml-auto"
          >
            <span class="">Get Start</span>
          </a>
        </div>

        <div id="dropDown" class={`${open ? "block" : "hidden" }`}>
          <ul class=" lg:hidden font-bold text-gray-600 mt-10 text-center w-auto ml-auto">
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Home
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                About
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Service
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Product
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Product
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Contect
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${open ? "block" : "hidden"}`}>
        <ul className="absolute hidden font-bold text-gray-600 lg:block bg-green-300 z-10 left-[55%] top-20  text-center rounded-xl w-[15%]">
          <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
            <a class=" " href="">
              Blog List
            </a>
          </li>
          <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
            <a class=" " href="">
              Blog Details
            </a>
          </li>
          <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
            <a class=" " href="">
              The Team
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
