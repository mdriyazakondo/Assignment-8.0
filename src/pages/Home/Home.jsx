import HeroSection from "../../components/Home/HeroSection";
import About from "../../components/Home/About";
import Trending from "../../components/Home/Trending";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoading(false);
    };

    loadingData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <HeroSection />
          <About />
          <Trending />
        </div>
      )}
    </div>
  );
};

export default Home;
