import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Year', 'Sales', 'Expenses'],
  ['2014', 1170, 460],
  ['2015', 660, 1120],
  ['2016', 1030, 540],
];

export const options = {
  isStacked: true,
  height: 170,
  legend: { position: 'top', maxLines: 3 },
  vAxis: { minValue: 0 },
};

const AreaChart = () => {
  return (
    <>
      <Chart
        chartType='AreaChart'
        width='100%'
        height='180px'
        data={data}
        options={options}
      />
    </>
  );
};

export default AreaChart;
