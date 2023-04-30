import React, { useEffect, useState } from "react";
import { StateCustom } from "../context/StateContext";
import Cart from "./Cart";
import Fillcart from "./Fillcart";

const Addtocart = () => {
  const {
    state: { cart },
  } = StateCustom();
  const [maintotal, setTotal] = useState(0);
  const {dispatch} = StateCustom();

  const total = cart?.reduce((pv,cv) => pv+cv.price,0);

  useEffect(() => {
    setTotal(total)
  }, []);

  const increseTotal = (price) => {
    setTotal(maintotal + price)
  }

  const decreseTotal = (price) => {
    setTotal(maintotal - price)
  }

  return (
    <>
        {
            cart?.length > 0 ? (<div className="">
            <div>
              { cart?.map((item) => (
                <Cart key={item.id} {...item} increseTotal={increseTotal} decreseTotal={decreseTotal} />
              ))}
            </div>
            <hr className=" w-[70%]  md:hidden mx-auto my-3" />
            <div className=" md:my-5">
              <div className=" flex items-center justify-between border rounded shadow p-5">
                <h1 className=" md:text-xl font-bold">Total</h1>
                <p className=" md:text-xl font-bold">{maintotal.toFixed(2)}</p>
              </div>
            </div>
            <div onClick={() => dispatch({type:"CLEAR"})} className=" w-44 rounded-lg bg-white hover:bg-slate-100 duration-200 shadow-sm text-center mx-auto mt-5 cursor-pointer text-red-900 border border-red-700 px-3 py-2 ">
              Clear
            </div>
          </div>) : <Fillcart/>
        }
    </>
  );
};

export default Addtocart;
