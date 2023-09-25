import { Link } from 'react-router-dom';
import './Donate.css'

const Donate = ({donate}) => {
    const {id, title, picture, category, category_bg, card_bg, text_color} = donate


    return (
        <>
          <Link to={`/donationDetails/${id}`}>
            <div className="donate_card w-64 rounded-lg " style={{ backgroundColor: card_bg}}>
                    <img className="donate_img" src={picture} alt="" />
                    <p className='px-2 py-1 mx-3 my-2 rounded-md w-[75px] text-center ' style={{ backgroundColor: category_bg, color: text_color}}>{category}</p>
                    <p className=' mx-4 py-2' style={{color: text_color}}>{title}</p>
            </div>
          </Link>
        </>
    );
};

export default Donate;