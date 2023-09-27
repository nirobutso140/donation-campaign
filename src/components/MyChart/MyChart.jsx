import { Chart } from 'react-google-charts';


const MyChart = () => {

    const donationItems = JSON.parse(localStorage.getItem('item'))
    
    const total = 12;
    const subtractedValue =  donationItems.length
    const remainingPercentage = ((total - subtractedValue) / total) * 100;

    const data = [
        ['Task', 'Hours per Day'],
        ['Your Donation', 100 - remainingPercentage],
        ['Total Donation', remainingPercentage]
        
    ];

    const options = {
        title: 'Your donation From Total Donation',
        is3D: true,
    };
    return (
        <>
           <div className='w-[100%]'>
           <Chart
                chartType="PieChart"
                width={'100%'}
                height={'400px'}
                data={data}
                options={options}
            />
           </div>
        </>
    );
};

export default MyChart;

