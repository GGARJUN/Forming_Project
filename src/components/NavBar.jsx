// import React from 'react'

import { useState } from "react";

export const NavBar = () => {
  // function change (){
  //   alert("hello")
  // }
  const [open,setOpen] = useState(false)
  const change = ()=> {
    setOpen(!open)
  }
 
  return (
    <>
      <nav class="bg-green-300 w-full  px-5 py-2 rounded-lg">
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
                  Prodect
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="#product">
                  Service
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="">
                  Portfolio
                </a>
              </li>
              <li class="hover:shadow-xl hover:bg-green-500 rounded-xl py-2 hover:text-white mx-3">
                <a class="py-5 px-5" href="">
                  contect
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
        <div id="dropDown" class={`${open ? '' : 'hidden'}`}>
          <ul class="lg:hidden font-bold text-gray-600 mt-10 text-center w-auto ml-auto">
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Home
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Prodect
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Service
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                Portfolio
              </a>
            </li>
            <li class="hover:shadow-xl hover:text-white hover:bg-green-500 m-3 rounded-xl py-2">
              <a class=" " href="">
                contect
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
