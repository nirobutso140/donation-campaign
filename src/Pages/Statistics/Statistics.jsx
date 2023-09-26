
import { useLoaderData } from 'react-router-dom';
import MyChart from '../../components/MyChart/MyChart';




const Statistics = () => {

    const data = useLoaderData()
    console.log(data);


    return (
        <>
            <div className='min-h-screen flex items-center justify-center'>

              <MyChart/>

            </div>
        </>
    );
};

export default Statistics;