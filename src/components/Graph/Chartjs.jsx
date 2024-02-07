import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const Chartjs = () => {
    const options = {
        responsive: true,
        plugins: {
            //   legend: {
            //     position: 'top' as const,
            //   },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
            tooltip: {
                enabled: true,
                // callbacks: {
                //     footer: footer,
                // },
            },
        },
        maintainAspectRatio: false,
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: [20, 10, 45, 64, 76, 23, 75],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Line options={options} data={data} />;
};

export default Chartjs;
