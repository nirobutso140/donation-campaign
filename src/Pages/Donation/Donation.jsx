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
           <div>
              {
                donateItem.map(item=> <DonateItems item={item}/>)
              }
           </div>
        </>
    );
};

export default Donation;
