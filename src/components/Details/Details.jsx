const Details = ({donate}) => {
    const {image, title, description} = donate
    return (
        <>
           <div className="details_data">
                <img src={image} alt="" />
                <p className="text-3xl font-bold my-5">{title}</p>
                <p className="text-gray-600">{description}</p>
           </div>
        </>
    );
};

export default Details;