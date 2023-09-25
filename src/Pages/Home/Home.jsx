import { useLoaderData } from "react-router-dom";
import Donets from "../../components/Donets/Donets";
import Banner from "../../components/Header/Banner/Banner";



const Home = () => {
       const dontes =   useLoaderData()
    
    return (
        <>
           <Banner/>
           <Donets dontes={dontes}/>
        </>
    );
};

export default Home;