import { useLoaderData } from "react-router-dom";
import Donets from "../../components/Donets/Donets";



const Home = () => {
       const dontes =   useLoaderData()
    
    return (
        <>
           <Donets dontes={dontes}/>
        </>
    );
};

export default Home;