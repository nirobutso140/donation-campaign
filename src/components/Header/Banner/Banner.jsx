
import "./Banner.css"
const Banner = () => {
    return (
        <>
            <div  className="hero h-[600px] banner" >
              
              <div className="hero-content text-center">
                   <div>
                   <h1 className="font-bold text-5xl mb-8">I Grow By Helping People In Need</h1>
                    
                    <form>
                       <input className="py-[14px] px-8" type="text" name="" placeholder="Search here...." />
                       <input className="p-3 text-white bg-[#FF444A]"  type="submit" value="Search" />
                    </form>
             
                  
                   </div>
               </div>
                          

             
           </div>
        </>
    );
};

export default Banner;