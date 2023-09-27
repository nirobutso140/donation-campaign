
import { useState } from "react";
import "./Banner.css"
const Banner = ({dataForSearch}) => {


    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(dataForSearch);


    const handleSearch = () => {
        const filtered = dataForSearch.filter(item =>
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
      };
    return (

        <>
            <div  className="hero h-[600px] banner" >
              
              <div className="hero-content text-center">
                   <div>
                   <h1 className="font-bold text-5xl mb-8 heading">I Grow By Helping People In Need</h1>
                    
                    <form>
                       <input onChange={e => setSearchTerm(e.target.value)} className="py-[14px] px-8" type="text" name="" placeholder="Search here...." />
                       <input onClick={handleSearch} className="p-3 text-white bg-[#FF444A]"  type="submit" value="Search" />
                    </form>
             
                  
                   </div>
               </div>
                          

             
           </div>
        </>
    );
};

export default Banner;