var React = require('react');
var LineChart = require('react-chartjs').Line;
var PolarAreaChart = require("react-chartjs").PolarArea;
var ReactDOM = require('react-dom');

var rand = function(min, max, num) {
          var rtn = [];
          while (rtn.length < num) {
            rtn.push((Math.random() * (max - min)) + min);
          }
          return rtn;
        }
var dataLine = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                     data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
          };
          var dataPolarArea = [
          {
              value: rand(25, 300, 1)[0],
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "Red"
          },
          {
              value: rand(25, 300, 1)[0],
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Green"
          },
          {
              value: rand(25, 300, 1)[0],
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Yellow"
          },
          {
              value: rand(25, 300, 1)[0],
              color: "#949FB1",
              highlight: "#A8B3C5",
              label: "Grey"
          },
          {
              value: rand(25, 300, 1)[0],
              color: "#4D5360",
              highlight: "#616774",
              label: "Dark Grey"
          }
          ];

var options = {
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
var Line =  React.createClass({
    render: function(){
        return <LineChart data={dataLine} options={options}     width="778px"    height= "389px"/>
    }
});

var PolarArea = React.createClass({
  render: function() {
    return <PolarAreaChart data={dataPolarArea} options={options} width="778px"    height= "389px"/>
  }
});

ReactDOM.render(<PolarArea />, document.getElementById('app'));
