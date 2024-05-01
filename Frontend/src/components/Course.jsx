import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBooks] = useState([])
  useEffect(() =>{
    const getBook=async() =>{
      try {
        const res =await axios.get("http://localhost:4005/book");
        console.log(res.data);
        setBooks(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);

  return (
    <>
    <br></br>
    <div className="dark:bg-slate-900 dark:text-white"></div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="mt-28 text-xl font-semibold md:text-2xl dark:bg-slate-900 dark:text-white">
            Welcome, <span className="text-pink-500">book lover!</span> Dive
            into a world of stories waiting to be explored! :)
          </h1>
          <p className="mt-6">
            Step into the exclusive realm of MKBookShop, where a treasure trove
            of books awaits, both free and paid, accessible only to our esteemed
            members. Whether you're an avid reader or a budding book enthusiast,
            our carefully curated collection is sure to captivate your mind and
            fuel your imagination.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8">
              Back
            </button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
