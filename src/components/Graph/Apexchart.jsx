import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
    useEffect(() => {
        const chartElement = document.querySelector('#chart');
        if (chartElement) {
            const chart = new ApexCharts(chartElement, options);
            // chart.destroy();
            chart.render();
        }
    }, []);

    const options = {
        chart: {
            type: 'bar',
            // width: '100%',
            height: '90%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                },
            },
        },
        series: [
            {
                name: 'sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        redrawOnParentResize: true,
    };

    return <div id="chart" />;
};

export default ApexChart;
