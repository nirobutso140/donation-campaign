import { useLoaderData } from "react-router-dom";
import Donets from "../../components/Donets/Donets";
import { useState } from "react";
import './Home.css'


const Home = () => {
        const dontes =   useLoaderData()
        const [searchTerm, setSearchTerm] = useState('');
        const [filteredItems, setFilteredItems] = useState(dontes);


    const handleSearch = (e) => {
        e.preventDefault()
        const filtered = dontes.filter(item =>
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
                       <input onClick={e =>handleSearch(e)} className="p-3 text-white bg-[#FF444A]"  type="submit" value="Search" />
                       {/* <button onClick={handleSearch}>click</button> */}
                    </form>
             
                  
                   </div>
               </div>
                          

             
           </div>
           <Donets categoryFltered={filteredItems} dontes={dontes}/>
        </>
    );
};

export default Home;