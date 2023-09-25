import { useEffect, useState } from "react";
import Donate from "./Donate/Donate";

const Donation = () => {
     const [donates,setDonates]=useState([])
     const [empty,setEmpty]=useState('')
     const [seeAll,setSeeAll]=useState(false)
     
     useEffect(()=>{
        const donation=JSON.parse(localStorage.getItem('donation'))
        if(donation){
            setDonates(donation)
        }
        else{
            setEmpty('There Is No Donation Here....')
        }
      
     },[])

    // console.log(empty)
    // console.log(donates)
    return (
        <div>
             {
                empty?<p className="text-center font-bold text-4xl mt-10 text-violet-900 lg:mt-20">{empty}</p>
                :
                <div>
            <div className="grid lg:grid-cols-2 gap-6">
               {
                seeAll? donates.map(donate=><Donate key={donate.id} donate={donate}></Donate>):
                donates.slice(0,4).map(donate=><Donate key={donate.id} donate={donate}></Donate>)
               }
            </div>

        {  donates.length>4 &&<div className="lg:ml-[600px] ml-[200px] mt-10">
          <button onClick={()=>setSeeAll(!seeAll)} className={seeAll?"hidden":"bg-[#009444] p-2 text-white rounded-lg " }>See All</button>
          </div>}
                </div>

               
             }


        </div>
    );
};

export default Donation;