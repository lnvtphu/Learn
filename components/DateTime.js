var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');
var DateTimeField = require('react-bootstrap-datetimepicker');

var DayTam = React.createClass({
    getInitialState: function() {
      return {
          date: moment(new Date(1468480020000)).format("dddd, MMMM Do YYYY, HH:mm A"),
          error: ''
      }
    },
    handleChange: function(date){
        var d = new Date(parseInt(date));
        console.log(d+": "+date);
        this.setState({
            date: moment(d).format("dddd, MMMM Do YYYY, HH:mm A")
        });
    },
    handleValidate: function(data){
        var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
        if (!ck_name.test(name)) {
            this.setState({
                error: 'loi............'
            });
        }
    },
    render: function() {
        return (
            <div>
                <DateTimeField
                    onChange={this.handleChange}
                    showToday={true}
                    minDate={moment().subtract(9, "days")}
                    maxDate={moment().add(2, "days")}
                />
                <span>{this.state.date}</span>
                <input onChange={this.handleValidate}></input>
                <span>{this.state.error}</span>
            </div>
        );
    }
});

ReactDOM.render(<DayTam />, document.getElementById('app'));
