import { useLoaderData } from "react-router-dom";
import HomeCard from "./Home Card/HomeCard";
import Banner from "../../nav/Banner/Banner";

const Home = () => {
    const donates=useLoaderData()
    
    return (
        <div>
      <Banner></Banner>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 w-[90%] mx-auto">
             {
                donates.map((donate)=><HomeCard key={donate.id} donate={donate}></HomeCard>)
             }
          </div>
        </div>
    );
};

export default Home;