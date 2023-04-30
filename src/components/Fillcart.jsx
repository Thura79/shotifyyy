import React from 'react'
import { Link } from 'react-router-dom'

const Fillcart = () => {
  return (
    <div className=' shadow border p-5 rounded w-60 md:w-96 flex items-center justify-center mt-20 mx-auto'>
        <div className="">
            <h1 className=' text-xl md:text-3xl font-bold'>Purchasing to Cart</h1>
            <Link to={'/'}>
            <button className=' mx-auto block mt-5 bg-blue-500 text-sm md:text-lg px-3 py-1 hover:px-5 hover:py-2 hover:bg-blue-700 transition-all duration-500 text-white rounded'>Buy Items</button>
            </Link>
        </div>
    </div>
  )
}

export default Fillcart