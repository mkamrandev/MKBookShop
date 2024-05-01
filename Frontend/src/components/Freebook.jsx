import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBooks] = useState([])
  useEffect(() =>{
    const getBook=async() =>{
      try {
        const res =await axios.get("http://localhost:4005/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="">
        <h1 className="mt-12 text-lg font-semibold pb-1">Free Book Categories</h1>
        <p>
          Delve into our library of captivating reads! Explore a universe of
          free books, igniting your imagination and fueling your
          literary adventures.
        </p>
      </div>
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
