import React from "react";
import { MdOutlineFileDownload, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";

const AllData = ({ item }) => {
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = item;

  return (
    <div>
      <div className="shadow p-4 rounded-md bg-gray-100 ">
        <h2>{item.id}</h2>
        <Link to={`/app/${item.id}`}>
          <img className="h-[250px] rounded-md w-full" src={image} alt="" />
        </Link>
        <div className="space-y-3  pt-4">
          <h2 className="text-2xl font-semibold text-gray-700 ">{title}</h2>
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 bg-green-50 py-2 px-4 rounded-sm text-green-500 text-xl font-semibold">
              <MdOutlineFileDownload className="w-6 h-6" />
              {downloads}
            </h4>
            <h4 className="flex items-center gap-2 bg-amber-50/70 py-2 px-4 rounded-sm text-amber-500 text-xl font-semibold">
              <MdOutlineStar className="w-6 h-6" />
              {ratings.length}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
