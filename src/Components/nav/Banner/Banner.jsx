
import PropTypes from 'prop-types'
import  { useState } from 'react';

const Banner = ({ donation, onSearch }) => {
    const overlay = {
        backgroundColor: 'rgba(0,0,0,0.3)'
    }

   const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
     const filtered = donation.filter(donate => donate.category.toLowerCase() === searchInput.toLowerCase());
        onSearch(filtered);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-[url('https://i.ibb.co/wd9j318/384056721-24297713219819684-2982518742680676676-n.jpg')] bg-no-repeat  h-4/6 mt-4 bg-cover bg-blend-multiply bg-white bg-opacity-90" style={overlay} >
             <h1 className="pt-40 text-center text-[#0B0B0B] font-bold text-[48px]">I Grow By Helping People In Need</h1>
              <div className="pb-40">
                  <input placeholder="Search here...."  className="w-56 rounded-l-lg mx-auto border-2"  type="text"  value={searchInput}  onChange={(e) => setSearchInput(e.target.value)} />



                  <button className="px-2 py-1 text-white rounded-r-lg bg-[#FF444A]" onClick={handleSearch}>Search</button>
              </div>
        </div>
    );
};

Banner.propTypes = {
    donation: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired
};
export default Banner;

