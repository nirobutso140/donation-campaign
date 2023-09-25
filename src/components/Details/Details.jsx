import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({donate}) => {
    const {image, title, description, price, text_color} = donate

    const giveDonation = () =>{
        const addedItems = []
        const donationItems = JSON.parse(localStorage.getItem('item'))
        if(!donationItems){
             addedItems.push(donate)
             localStorage.setItem('item',JSON.stringify(addedItems))
        }else{
            addedItems.push(...donationItems , donate) 
            localStorage.setItem('item',JSON.stringify(addedItems))
        }
        toast("Thanks For Your Donation!!");
        
    }

    return (
        <>
           <div className="details_data">
                <img src={image} alt="" />
                <button className="px-5 py-2 rounded-lg relative bottom-[60px] left-[20px]" style={{background: text_color, color: 'white'}} onClick={giveDonation}>Donate ${price}</button>
                <p className="text-3xl font-bold my-5">{title}</p>
                <p className="text-gray-600">{description}</p>
                <ToastContainer />
           </div>
        </>
    );
};

export default Details;