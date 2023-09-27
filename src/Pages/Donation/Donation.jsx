import {useEffect, useState } from "react";

import DonateItems from "../../components/DonateItems/DonateItems";

const Donation = () => {
  
   const [donateItem, setDonateItem] = useState([])
   const [noDataFound, setNoDataFound] = useState('')
   const [isButtonVisible, setIsButtonVisible] = useState(true);
   const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('item'))
        if(donationItems){
            setDonateItem(donationItems)
        }else{
            setNoDataFound('Sorry No Data Found!!!')
        }
        
    }, [])
    
    
    const handleButtonClick = () => { 
        setIsShow(!isShow)
        setIsButtonVisible(false);
      };
   
    return (
        <> 
           
           <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5 p-5">
              
                  {noDataFound? <p className="text-center w-[100%]">{noDataFound}</p>: 
                    isShow? donateItem.map(item=> <DonateItems key={item.id} item={item}/>):
                    donateItem.slice(0,4).map(item=> <DonateItems key={item.id} item={item}/>)
                 } 
           </div>
          { isButtonVisible && <button onClick={handleButtonClick} className="btn btn-success mx-auto block">See All</button>}
        </>
    );
};

export default Donation;
