import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { BlogD } from "./BlogD";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";
export const BlogList = () => {
  const productData = [
    {
      id: 1,
      imageurl: " Card/1.jpg",
      name: "Hello",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
      readmore:<Link to ='/About'></Link>
    },
    {
      id: 2,
      imageurl: " Card/2.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },

    {
      id: 3,
      imageurl: " Card/3.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 4,
      imageurl: " Card/4.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 5,
      imageurl: " Card/5.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 6,
      imageurl: " Card/4.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 7,
      imageurl: " Card/3.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 8,
      imageurl: " Card/2.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
    {
      id: 9,
      imageurl: " Card/1.jpg",
      name: "some big hedding",
      date: "February 20, 2024",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etassumenda",
    },
  ];

  return (
    <>
      <NavBar />
      <div class="grid grid-cols-2 md:grid-cols-3  gap-10  py-5  px-16">
        {productData.map((item) => (
          <BlogD
            name={item.name}
            url={item.imageurl}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
      <ScrollToTop/>
    </>
  );
};
