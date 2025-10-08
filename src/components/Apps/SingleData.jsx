import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import {
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ComposedChart,
} from "recharts";
import { toast } from "react-toastify";

const SingleData = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [installed, setInstalled] = useState(false); // <-- app install check

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const delay = new Promise((resolve) => setTimeout(resolve, 800));

      try {
        const res = await fetch("/app.json");
        const data = await res.json();
        const found = data.find((item) => item.id === parseInt(id));
        setSingleData(found);
        await delay;

        // Check if already installed
        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        if (installedApps.some((app) => app.id === found.id)) {
          setInstalled(true);
        }
      } catch (err) {
        console.error(err);
        await delay;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !singleData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

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
  } = singleData;

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.some((app) => app.id === singleData.id)) {
      installedApps.push(singleData);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${title} installed successfully!`);
    } else {
      alert(`${title} is already installed.`);
    }
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-5 md:mx-auto py-10">
        <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              className="w-full h-[400px] bg-gray-200 object-cover rounded-lg"
              src={image}
              alt={title}
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="border-b border-gray-400 pb-4">
              <h2 className="text-4xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-500 text-xl font-medium">
                Developer:
                <span className="text-[#6733e4] pl-2">{companyName}</span>
              </p>
            </div>

            <div className="mt-4 text-gray-500 flex items-center gap-8 flex-wrap">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/icon-downloads.png"
                  alt="downloads"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">Downloads</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  {size}M
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/icon-ratings.png"
                  alt="ratings"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">Average Ratings</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  {ratingAvg}
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/assets/icon-review.png"
                  alt="reviews"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">Total Reviews</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                  {reviews >= 1000
                    ? `${(reviews / 1000).toFixed(1)}k`
                    : reviews}
                </h3>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleInstall}
                className={`text-xl font-semibold py-2 px-8 rounded-md cursor-pointer transition ${
                  installed
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#00d390] hover:bg-[#15e4a2] text-white"
                }`}
                disabled={installed}
              >
                {installed ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            layout="vertical"
            data={[...ratings].sort(
              (a, b) => parseInt(b.name) - parseInt(a.name)
            )}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-7xl mx-auto py-8 ">
        <p className="text-gray-700 text-xl ">{description}</p>
      </div>
    </div>
  );
};

export default SingleData;
