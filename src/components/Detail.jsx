import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [change, setChange] = useState(true);
  const {
    title,
    thumbnail,
    price,
    brand,
    category,
    rating,
    images,
    description,
  } = item;

  const fetchDetail = async () => {
    const api = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await api.json();
    setItem(data);
    setChange(false);
  };
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <>
      {change ? (
        <Loading />
      ) : (
        <div>
          <div className=" p-5 flex flex-col md:flex-row items-center justify-start md:gap-5">
            <img
              src={thumbnail}
              className=" w-full md:w-[30%] md:h-64 object-cover border rounded"
            />
            <div className=" space-y-2 mt-5 md:mt-0">
              <p className=" border bg-blue-600 w-72 text-white rounded-xl text-center">
                Brand - {brand}
              </p>
              <p>Category - {category}</p>
              <p>Title - {title}</p>
              <p>Description - {description}</p>
              <p>Price - $ {price}</p>
              <p> Rating - {rating} </p>
            </div>
          </div>

          <div className=" p-5">
            <h1 className=" border-b-2 border-blue-700 w-44 text-sm md:text-xl font-bold my-5 md:my-10">
              You may also like
            </h1>
            <div className=" flex flex-wrap gap-5">
              {images?.map((pd) => (
                <img
                  src={pd}
                  className=" border rounded w-36 h-36 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
