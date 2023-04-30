import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateCustom } from "../context/StateContext";

const Nav = () => {
  const {
    state: { cart },
    search,
    setSearch,
  } = StateCustom();
  return (
    <div className=" border rounded shadow p-3 md:p-5 my-2 sticky top-0 bg-white">
      <div className=" flex justify-between items-center ">
        <Link to={"/"}>
          <p className=" text-xl md:text-4xl">Shop</p>
        </Link>
        <div className=" flex items-center gap-1 md:gap-3">
          <Link to={"/addtocart"}>
            <div className=" relative  bg-blue-600 border hover:bg-blue-700 duration-200 rounded px-3 py-1 md:px-5 md:py-3 ">
              <AiOutlineShoppingCart className=" text-white cursor-pointer text-xl hover:text-2xl duration-300 hover:md:text-3xl md:text-2xl" />
              <span className=" absolute -top-3 -right-2 w-7 h-7 bg-red-700 flex items-center justify-center rounded-full text-white">
                {cart?.length}
              </span>
            </div>
          </Link>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-28 md:w-auto outline-none border px-3 py-1 md:px-5 md:py-3 rounded"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
