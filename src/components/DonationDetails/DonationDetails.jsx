import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const DonationDetails = () => {
   const allDonate = useLoaderData()
   const {id} = useParams()
   
   const donate = allDonate.find(donate => donate.id == id)
   
    return (
        <>
            <Details donate={donate}/>
        </>
    );
};

export default DonationDetails;