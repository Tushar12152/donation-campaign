
const Banner = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
             <h1 className="pt-40 text-center text-[#0B0B0B] font-bold text-[48px]">I Grow By Helping People In Need</h1>
              <div className="pb-40">
                  <input className="w-56 mx-auto border-2" type="text" />
                  <button className="px-2 py-1 rounded-lg bg-[#FF444A]">Search</button>
              </div>
        </div>
    );
};

export default Banner;