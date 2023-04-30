import React, {  useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { StateCustom } from "../context/StateContext";
import { motion } from "framer-motion";

const Cart = (props) => {
  const { title, thumbnail, price, increseTotal, decreseTotal } = props;
  const [count, setCount] = useState(1);
  const {dispatch} = StateCustom();

  const toprice = count * price;

  const incqty = () => {
    setCount((pre) => pre + 1);
    increseTotal(price)
  };

  const decqty = () => {
    if (count > 1) {
      setCount((pre) => pre - 1);
      decreseTotal(price)
    }
  };

  const removecart = () => {
    dispatch({type: "REMOVE-CART", payload: props});
    decreseTotal(toprice)
  }
  return (
    <motion.div layout  transition={{
      duration:1,
      
    }} className=" border p-2 md:p-5 rounded shadow mt-3 md:mt-5">
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center">
          <img
            src={thumbnail}
            className=" w-20 h-20 md:w-36 md:h-36 object-contain m-3 md:m-5"
          />
          <div className=" space-y-3">
            <p className=" text-sm md:text-lg">{title}</p>
            <p className=" text-sm md:text-lg">$ {toprice.toFixed(2)}</p>
            <button onClick={removecart} className=' text-sm md:text-lg text-white rounded px-3 py-1 hover:bg-red-700 duration-200 border cursor-pointer bg-red-500'>remove</button>
          </div>
        </div>

        <div className=" flex flex-col items-center space-y-2 md:space-y-3">
          <IoIosArrowUp onClick={incqty} className=" cursor-pointer select-none" />
          <p>{count}</p>
          <IoIosArrowDown onClick={decqty} className=" cursor-pointer select-none" />
        </div>
      </div>
    </motion.div>

    
  );
};

export default Cart;
