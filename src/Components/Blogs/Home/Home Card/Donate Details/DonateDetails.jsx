
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert'

const DonateDetails = () => {

    const [donation,setDonation]=useState({})
    const donations=useLoaderData()
    // console.log(donations)
    const donationId=useParams();
    const id= parseInt(donationId.id)
    // console.log(id)
    useEffect(()=>{
        const findDonate=donations?.find(donation=>donation.id===id)
        // console.log(findDonate)
        setDonation(findDonate)
    },[donations,id])
  
    // console.log(donation)
       const {image, title, description, text_color: button_color,price}=donation;
       

       const handleAddToDonation=()=>{
       

       const donationList=[];
       const donationGet=JSON.parse(localStorage.getItem('donation'))
       if(!donationGet){
        donationList.push(donation)
        localStorage.setItem('donation',JSON.stringify(donationList))
        swal("Congratulations!", "Succesfully Donated!", "success");
       }
       else{
          const isExist=donationGet.find(donate=> donate.id===id)

          if(!isExist){
            donationList.push(...donationGet,donation)
            localStorage.setItem('donation',JSON.stringify(donationList))
            swal("Congratulations!", "Succesfully Donated!", "success");
          }

          else{
            swal("Sorry!", "You Already Donated this!  please try Another!!!", "error");
          }
       
       }

        
        
        
      
       }

    return (
      
        <div className="mt-5 relative w-[90%] mx-auto">
           
           <img className="w-[1120px] h-[400px] mx-auto" src={image}  />
            <h1 className="text-[#0B0B0B] text-4xl font-bold  pt-10 pl-10">{title}</h1>
            <p className="pl-10 pt-1 text-[#0B0B0BB3] leading-6">{description}</p>
           <div className="absolute top-80 rounded-lg bg-[#0B0B0B80] w-[1120px] mx-auto py-5   lg:ml-12">
                 <button onClick={handleAddToDonation} className="py-2 px-4 ml-10 rounded-lg text-white" style={{ backgroundColor: button_color }}> Donate ${price}</button>
           </div>
        </div>
    );
};

export default DonateDetails;



