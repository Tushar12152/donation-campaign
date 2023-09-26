
import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./Home Card/HomeCard";
import Banner from "../../nav/Banner/Banner";
you 

const Home = () => {
    const donates = useLoaderData();
    const [filteredDonates, setFilteredDonates] = useState(donates);

    const handleSearch = (filteredData) => {
        setFilteredDonates(filteredData);
    }

    return (
        <div>
            <Banner donation={donates} onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 w-[90%] mx-auto">
                {
                    filteredDonates.map((donate) => <HomeCard key={donate.id} donate={donate} />)
                }
            </div>
        </div>
    );
};

export default Home;
