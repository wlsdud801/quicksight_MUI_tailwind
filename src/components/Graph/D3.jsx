import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import useResize from '../../hooks/useResize';

const Barchart = () => {
    const ref = useRef();
    const size = useResize(ref);

    d3.select(ref.current).select('svg').remove();

    useEffect(() => {
        if (!size) {
            return;
        }

        const { width: chartWidth, height: chartHeight } = size;

        // set the dimensions and margins of the graph
        const margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = chartWidth - margin.right - margin.left,
            height = chartHeight - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3
            .select(ref.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Parse the Data
        d3.csv(
            'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv'
        ).then(function (data) {
            // X axis
            const x = d3
                .scaleBand()
                .range([0, width])
                .domain(data.map((d) => d.Country))
                .padding(0.2);
            svg.append('g')
                .attr('transform', `translate(0, ${height})`)
                .call(d3.axisBottom(x))
                .selectAll('text')
                .attr('transform', 'translate(-10,0)rotate(-45)')
                .style('text-anchor', 'end');

            // Add Y axis
            const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
            svg.append('g').call(d3.axisLeft(y));

            // Bars
            svg.selectAll('mybar')
                .data(data)
                .join('rect')
                .attr('x', (d) => x(d.Country))
                .attr('y', (d) => y(d.Value))
                .attr('width', x.bandwidth())
                .attr('height', (d) => Math.abs(height - y(d.Value)))
                .attr('fill', '#5f0f40');
        });
    }, [size]);

    return <svg id="barchart" className="w-full h-[calc(100%-2rem)] bg-white" ref={ref} />;
};

export default Barchart;
