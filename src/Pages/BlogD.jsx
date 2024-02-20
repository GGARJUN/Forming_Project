import React from 'react'
import { NavBar } from "../components/NavBar";
export const BlogD = (props) => {
  return (
    <>


    <div class="text-center  bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={props.url}
        alt="Blog Image"
        class="w-full h-40 object-cover"
      />
      <div class="px-4 py-2">
        <h3 class="text-lg font-bold text-gray-800">
        {props.name}
        </h3>
        <p class="text-sm text-gray-600">{props.date}</p>
      </div>
      <div class="px-4 py-2">
        <p class="text-sm text-gray-700">
        {props.description}
        </p>
      </div>
      <div class="px-4 py-2 bg-blue-500 hover:bg-blue-700">
        <a  class="text-sm text-white ">
          Read more
        </a>
      </div>
    </div>

   

</>
  )
}
