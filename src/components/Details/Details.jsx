const Details = ({donate}) => {
    const {image, title, description, price, text_color} = donate
    return (
        <>
           <div className="details_data">
                <img src={image} alt="" />
                <button className="px-5 py-2 rounded-lg relative bottom-[60px] left-[20px]" style={{background: text_color, color: 'white'}}>Donate ${price}</button>
                <p className="text-3xl font-bold my-5">{title}</p>
                <p className="text-gray-600">{description}</p>
           </div>
        </>
    );
};

export default Details;