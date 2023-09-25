

const DonateItems = ({ item }) => {

    const {img, category, image, title, description, price, text_color, category_bg, card_bg} = item

    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body" style={{background: card_bg}}>
                    <p className="w-20 text-center rounded-md" style={{background: category_bg, color: text_color}}>{category}</p>
                    <h2 className="card-title">{title}</h2>
                    <p style={{color: text_color}}>${price}</p>
                    <div className="card-actions">
                        <button style={{background: text_color, color: "white"}} className="btn border-0">View Datails</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonateItems;
