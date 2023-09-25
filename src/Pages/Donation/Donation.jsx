import { useEffect, useState } from "react";
import DonateItems from "../../components/DonateItems/DonateItems";

const Donation = () => {

   const [donateItem, setDonateItem] = useState([])

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('item'))
        setDonateItem(donationItems)
    }, [])
    console.log(donateItem);
    return (
        <>
           <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 p-5">
              {
                donateItem.map(item=> <DonateItems item={item}/>)
              }
           </div>
        </>
    );
};

export default Donation;
