import { Chart } from 'react-google-charts';


const MyChart = () => {
    const data = [
        ['Task', 'Hours per Day'],
        ['Your Donation', 1],
        ['Total Donation', 12]
        
    ];

    const options = {
        title: 'My Daily Activities',
        is3D: false,
    };
    return (
        <>
            <Chart
                chartType="PieChart"
                width={'100%'}
                height={'400px'}
                data={data}
                options={options}
            />
        </>
    );
};

export default MyChart;

