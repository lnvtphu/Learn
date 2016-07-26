"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;

var generalChartData = [
  {
    "State": "CA",
    "Under 5 Years": 2704659,
    "5 to 13 Years": 4499890,
    "14 to 17 Years": 2159981,
    "18 to 24 Years": 3853788,
    "25 to 44 Years": 10604510,
    "45 to 64 Years": 8819342,
    "65 Years and Over": 4114496
  },
  {
    "State": "TX",
    "Under 5 Years": 2027307,
    "5 to 13 Years": 3277946,
    "14 to 17 Years": 1420518,
    "18 to 24 Years": 2454721,
    "25 to 44 Years": 7017731,
    "45 to 64 Years": 5656528,
    "65 Years and Over": 2472223
  },
  {
    "State": "NY",
    "Under 5 Years": 1208495,
    "5 to 13 Years": 2141490,
    "14 to 17 Years": 1058031,
    "18 to 24 Years": 1999120,
    "25 to 44 Years": 5355235,
    "45 to 64 Years": 5120254,
    "65 Years and Over": 2607672
  }
];

var chartSeries = [
    {
      field: 'Under 5 Years',
      name: 'Under 5 Years'
    },
    {
      field: '5 to 13 Years',
      name: '5 to 13 Years'
    },
    {
      field: '14 to 17 Years',
      name: '14 to 17 Years'
    }

  ],
  y = function(d) {
    return d.State;
  },
  yScale = 'ordinal',
  x = function(d) {
    return +d;
  },
  xTickFormat = d3.format(".2s");

var Bar = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 500,
      series: chartSeries
    }
  },
  render: function() {

    return (
      <div>
        <BarStackHorizontalChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          y= {y}
          yScale= {yScale}
          x= {x}
          xTickFormat= {xTickFormat}
          horizontal= {true}
        />
      </div>
    )
  }
})
ReactDOM.render(<Bar />, document.getElementById('app'));
