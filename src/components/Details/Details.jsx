import swal from 'sweetalert';

const Details = ({donate}) => {
    const {id, image, title, description, price, text_color} = donate

    const giveDonation = () =>{
        const addedItems = []
        const donationItems = JSON.parse(localStorage.getItem('item'))
        if(!donationItems){
             addedItems.push(donate)
             localStorage.setItem('item',JSON.stringify(addedItems))
             swal("Good job!", "Thanks For your Donation!", "success");
        }else{
            const isExists = donationItems.find(myDonate => myDonate.id===id)
            if(!isExists){
                addedItems.push(...donationItems , donate) 
                localStorage.setItem('item',JSON.stringify(addedItems))
                swal("Good job!", "Thanks For your Donation!", "success");
            }else{
                swal("Error!", "You Already Donate This Item", "error");
            }
           
        }
        
        
    }

    return (
        <>
           <div className="details_data">
                <img src={image} alt="" />
                <div className='w-[100%] h-20 relative bottom-[80px] opacity-40 bg-green-950'></div>
                <button className="px-5 py-2 rounded-lg relative bottom-[140px] left-[20px]" style={{background: text_color, color: 'white'}} onClick={giveDonation}>Donate ${price}</button>
                <p className="text-3xl font-bold my-5">{title}</p>
                <p className="text-gray-600">{description}</p>
           </div>
        </>
    );
};

export default Details;