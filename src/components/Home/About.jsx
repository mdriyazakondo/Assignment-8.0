import React from "react";

const trusted = [
  {
    title: "Total Downloads",
    value: "29.6M",
    date: "21% more than last month",
  },
  {
    title: "Total Reviews",
    value: "906K",
    date: "46% more than last month",
  },
  {
    title: "Active Apps",
    value: "132+",
    date: "31 more will Launch",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white ">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white mt-8">
          {trusted.map((trues, i) => (
            <div key={i} className="text-center">
              <small className="text-sm font-medium ">{trues.title}</small>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold my-3">
                {trues.value}
              </h2>
              <p className="text-sm font-medium ">{trues.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
