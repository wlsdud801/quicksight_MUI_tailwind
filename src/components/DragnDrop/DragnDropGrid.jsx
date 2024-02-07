import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { data } from '../Graph/data';
import BarChart from '../Graph/D3';
import ApexChart from '../Graph/Apexchart';
import Chartjs from '../Graph/Chartjs';
import Bizchart from '../Graph/Bizchart';
import Echart from '../Graph/Echart';
import Highchart from '../Graph/Highchart';

const DragnDropGrid = () => {
    const layout = {
        lg: [
            { i: 'a', x: 0, y: 0, w: 1, h: 3 },
            { i: 'b', x: 1, y: 0, w: 1, h: 3 },
            { i: 'c', x: 2, y: 0, w: 1, h: 3 },
            { i: 'd', x: 0, y: 1, w: 1, h: 3 },
            { i: 'e', x: 0, y: 1, w: 1, h: 3 },
        ],
        md: [
            { i: 'a', x: 0, y: 0, w: 1, h: 3 },
            { i: 'b', x: 1, y: 0, w: 1, h: 3 },
            { i: 'c', x: 0, y: 1, w: 1, h: 3 },
            { i: 'd', x: 1, y: 1, w: 1, h: 3 },
            { i: 'e', x: 0, y: 0, w: 1, h: 3 },
        ],
        sm: [
            { i: 'a', x: 0, y: 0, w: 1, h: 3 },
            { i: 'b', x: 0, y: 1, w: 1, h: 3 },
            { i: 'c', x: 0, y: 2, w: 1, h: 3 },
            { i: 'd', x: 0, y: 3, w: 1, h: 3 },
            { i: 'e', x: 0, y: 4, w: 1, h: 3 },
        ],
    };

    const dashboard = [
        { i: 'a', contents: <BarChart data={data} />, title: 'd3' },
        { i: 'b', contents: <ApexChart data={data} />, title: 'Apex' },
        { i: 'c', contents: <Chartjs data={data} />, title: 'Chart.js' },
        { i: 'd', contents: <Highchart data={data} />, title: 'Highchart.js' },
        { i: 'e', contents: <Echart data={data} />, title: 'Echart.js' },
    ];

    const ResponsiveGridLayout = WidthProvider(Responsive);

    return (
        <ResponsiveGridLayout
            className="grid-layout"
            layouts={layout}
            breakpoints={{ lg: 1200, md: 996, sm: 768 }}
            cols={{ lg: 3, md: 2, sm: 1 }}
            rowHeight={150}
            margin={[10, 10]}
            isDraggable={true}
            isResizable={true}
        >
            {dashboard.map((item) => (
                <div key={item.i} className="grid-item border border-gray-500 bg-white p-2">
                    <h2>{item.title}</h2>
                    {item.contents}
                </div>
            ))}
        </ResponsiveGridLayout>
    );
};

export default DragnDropGrid;
