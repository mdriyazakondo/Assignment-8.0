import { useEffect, useState } from "react";
import AllData from "../Apps/AllData";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

const Trending = () => {
  const [data, setData] = useState([]);
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

  return (
    <div className="bg-[#f5f5f5] py-12 md:py-16 lg:py-20">
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-[1500px] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Trending Apps
          </h2>
          <p className="text-gray-600 font-medium text-center mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-6 lg:mt-8">
            {data?.slice(0, 8).map((item) => (
              <AllData key={item.id} item={item} />
            ))}
          </div>
          <button className="flex items-center justify-center  mt-8 w-[200px] mx-auto py-2 rounded-full bg-purple-500 hover:bg-purple-600 cursor-pointer  transition-all duration-500 text-xl font-semibold text-white">
            <Link to={"/apps"}>Show All</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Trending;
