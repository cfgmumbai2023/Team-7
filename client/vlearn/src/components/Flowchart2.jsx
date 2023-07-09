
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import rawData from '../data/life-expectancy-table.json';
const Flowchart2 = () => {
    useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
  
    const countries = [
        'Finland',
        'France',
        'Germany',
        'Iceland',
        'Norway',
        'Poland',
        'Russia',
        'United Kingdom'
    ];
  
    const datasetWithFilters = [];
    const seriesList = [];
  
    echarts.util.each(countries, (country) => {
        const datasetId = 'dataset_' + country;
        datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
            type: 'filter',
            config: {
            and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': country }
            ]
            }
        }
        });
  
        seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
            show: true,
            formatter: function (params) {
            return params.value[3] + ': ' + params.value[0];
            }
        },
        labelLayout: {
            moveOverlap: 'shiftY'
        },
        emphasis: {
            focus: 'series'
        },
        encode: {
            x: 'Year',
            y: 'Income',
            label: ['Country', 'Income'],
            itemName: 'Year',
            tooltip: ['Income']
        }
        });
    });
  
    const option = {
        animationDuration: 10000,
        dataset: [
        {
            id: 'dataset_raw',
            source: rawData
        },
        ...datasetWithFilters
        ],
        title: {
        text: 'Views Accessed by Grades'
        },
        tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
        },
        xAxis: {
        type: 'category',
        nameLocation: 'middle'
        },
        yAxis: {
        name: 'Income'
        },
        grid: {
        right: 140
        },
        series: seriesList
    };
  
    option && myChart.setOption(option);
  
    return () => {
        myChart.dispose();
    };
    }, []);
  
    return <div id="main" style={{ width: '100%', height: '400px' }} />;
};
  
export default Flowchart2;