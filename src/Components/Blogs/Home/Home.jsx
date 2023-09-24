import { useLoaderData } from "react-router-dom";
import HomeCard from "./Home Card/HomeCard";

const Home = () => {
    const donates=useLoaderData()
    
    return (
        <div>


          <div>
             {
                donates.map((donate)=><HomeCard key={donate.id} donate={donate}></HomeCard>)
             }
          </div>
        </div>
    );
};

export default Home;