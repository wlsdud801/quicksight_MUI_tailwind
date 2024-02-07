import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Highchart = () => {
    const options = {
        chart: {
            type: 'spline',
        },
        title: {
            text: 'Monthly Average Temperature',
        },
        subtitle: {
            text: 'Source: Wikipedia.com',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            title: {
                text: 'Temperature',
            },
            labels: {
                format: '{value}°',
            },
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1,
                },
            },
        },
        ressponsive: {
            rules: [
                {
                    // condition: {
                    //     maxWidth: 500,
                    // },
                    chartOptions: {
                        legend: {
                            enabled: false,
                        },
                    },
                },
            ],
        },
        series: [
            {
                name: 'Tokyo',
                marker: {
                    symbol: 'square',
                },
                data: [
                    5.2,
                    5.7,
                    8.7,
                    13.9,
                    18.2,
                    21.4,
                    25.0,
                    { y: 26.4, marker: { symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)' } },
                    22.8,
                    17.5,
                    12.1,
                    7.6,
                ],
            },
            {
                name: 'Bergen',
                marker: {
                    symbol: 'diamond',
                },
                data: [
                    { y: 1.5, marker: { symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)' } },
                    1.6,
                    3.3,
                    5.9,
                    10.5,
                    13.5,
                    14.5,
                    14.4,
                    11.5,
                    8.7,
                    4.7,
                    2.6,
                ],
            },
        ],
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default Highchart;
