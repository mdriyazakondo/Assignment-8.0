import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import { MdOutlineFileDownload, MdOutlineStar } from "react-icons/md";

const Installed = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const delay = new Promise((resolve) => setTimeout(resolve, 800));
      try {
        const apps =
          (await JSON.parse(localStorage.getItem("installedApps"))) || [];
        setInstalledApps(apps);
        await delay;
      } catch (error) {
        console.error(error);
        await delay;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const removeStorage = (id) => {
    const removeItem = installedApps.filter((item) => item.id !== id);
    setInstalledApps(removeItem);
    localStorage.setItem("installedApps", JSON.stringify(removeItem));
    toast.info("App uninstalled successfully!");
  };

  const sortedData = [...installedApps].sort((a, b) => {
    if (sortOrder === "asc") return a.size - b.size;
    if (sortOrder === "desc") return b.size - a.size;
    return 0;
  });

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-[#f5f5f5] min-h-screen py-10 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="text-center my-10">
        <h2 className="text-3xl sm:text-4xl font-bold">Your Installed Apps</h2>
        <p className="text-gray-700 text-lg sm:text-xl mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top bar */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {installedApps.length} Apps Found
        </h2>
        <div className="w-full sm:w-1/3 md:w-1/5">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 cursor-pointer hover:border-blue-400"
          >
            <option value="all">All</option>
            <option value="asc">Low - High</option>
            <option value="desc">High - Low</option>
          </select>
        </div>
      </div>

      {/* No apps installed */}
      {installedApps.length === 0 ? (
        <div className="max-w-7xl mx-auto py-20 flex flex-col items-center justify-center text-center">
          <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 w-full sm:w-4/5 md:w-1/2 transition-transform transform hover:-translate-y-1 duration-300">
            <img
              src="/assets/App-Error.png"
              alt="No apps"
              className="w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-6 opacity-80"
            />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent mb-3">
              No Apps Installed Yet
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              It looks a little empty here. Go explore and install your favorite
              apps!
            </p>
            <button
              onClick={() => (window.location.href = "/apps")}
              className="mt-6 px-5 sm:px-6 py-2 text-white cursor-pointer bg-[#00d390] rounded-lg shadow hover:bg-[#06c285] transition"
            >
              Browse Apps
            </button>
          </div>
        </div>
      ) : (
        // Apps list
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedData.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-md bg-gray-200"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {app.title}
                  </h3>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                    <p className="text-green-500 flex items-center font-medium gap-1 text-base sm:text-lg">
                      <MdOutlineFileDownload className="h-5 w-5" />
                      {app.size}M
                    </p>
                    <p className="text-amber-600 flex items-center font-medium gap-1 text-base sm:text-lg">
                      <MdOutlineStar />
                      {app.ratings.length}
                    </p>
                    <p className="text-gray-600 flex items-center font-medium gap-1 text-base sm:text-lg">
                      {app.downloads} MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="w-full sm:w-auto py-2 px-5 bg-[#00d390] text-white rounded-md cursor-pointer hover:bg-[#06c285] transition"
                onClick={() => removeStorage(app.id)}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installed;
