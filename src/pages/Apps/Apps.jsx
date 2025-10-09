import React, { useEffect, useState } from "react";
import AllData from "../../components/Apps/AllData";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const delay = new Promise((resolve) => setTimeout(resolve, 300));
      try {
        const res = await fetch("/app.json");
        const data = await res.json();
        setData(data);
        await delay;
      } catch (err) {
        console.error(err);
        await delay;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [search]);

  const allData = data.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="bg-[#f5f5f5] py-17 min-h-screen ">
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-[1500px] mx-5 md:mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
              Our All Applications
            </h2>
            <p className="text-gray-600 text-sm md:text-xl font-medium text-center">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex items-center justify-between mt-8">
            <h3 className="text-2xl font-semibold">
              ({allData.length}) Apps Found
            </h3>

            <div className="w-2/4 md:w-1/3 flex flex-col relative">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="Search app..."
              />
              <FaSearch className="absolute w-5 h-5 left-2 top-3 text-gray-500" />
            </div>
          </div>

          {allData.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                src="/assets/App-Error.png"
                alt="No Apps Found"
                className="w-72 h-72 object-contain"
              />
              <h2 className="text-gray-800 text-4xl font-bold mt-4">
                OPPS!! APP NOT FOUND
              </h2>
              <p className="text-gray-500 text-lg mt-4">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
              <Link to={"/"}>
                <button className="py-2 px-8 rounded-md bg-purple-600 text-white font-semibold mt-6 cursor-pointer">
                  Go Back
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-6 lg:mt-8">
              {allData.map((item) => (
                <AllData key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
