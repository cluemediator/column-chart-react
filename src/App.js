import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';

function App() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'column'
      }, // type of the chart
      title: {
        text: 'Column Chart Title'
      }, // title of the chart
      subtitle: {
        text: 'Lorem Ipsum is simply dummy text'
      }, // subtitle of the chart
      xAxis: {
        categories: [
          'X1',
          'X2',
          'X3',
          'X4',
          'X5'
        ], // the categories of the X Axis
        crosshair: true
      },
      yAxis: {
        min: 0, // minimum value of the Y Axis
        title: {
          text: 'Y Axis Title'
        } // the title of the Y Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }

  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Japan',
        data: [50, 72, 88, 92, 34]
      }, {
        name: 'Germany',
        data: [84, 79, 99, 94, 66]
      }, {
        name: 'London',
        data: [49, 39, 47, 40, 42]
      }, {
        name: 'Canada',
        data: [43, 34, 77, 35, 53]
      }]);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h3>Column chart in React - <a href="http://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <div ref={refContainer} />
    </div>
  );
}

export default App;
