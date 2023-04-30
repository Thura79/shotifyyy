import React from 'react'
import { StateCustom } from '../context/StateContext'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SingleProduct = (props) => {
  const {title, thumbnail, price, id} = props;
  const navigate = useNavigate();
  const {dispatch} = StateCustom();
  return (
    <motion.div layout transition={{duration:1,}} className=' border shadow p-2 md:p-5 rounded w-36 md:w-72'>
        <div className=" flex flex-col md:h-72 ">
            <img src={thumbnail} className=' w-20 h-20 md:w-36 md:h-36 object-cover my-5 block mx-auto' alt="" />
            <p className=' truncate md:text-lg'>{title}</p>
            <p className=' md:text-lg'>$ {price}</p>
            <div className=' flex flex-col mt-auto gap-1 md:flex-row md:gap-4 '>
                <button onClick={() => dispatch({type:"ADD-TO-CART",payload: props})} className=' bg-blue-500 text-sm md:text-lg px-3 py-1 hover:px-5 hover:py-2 hover:bg-blue-700 transition-all duration-500 text-white rounded'>Add to Cart</button>
                <button onClick={() => navigate(`/detail/${id}`)} className=' bg-blue-500 text-sm md:text-lg px-3 py-1 hover:px-5 hover:py-2 hover:bg-blue-700 transition-all duration-500 text-white rounded'>Detail</button>
                
            </div>
        </div>
    </motion.div>
  )
}

export default SingleProduct