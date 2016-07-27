var React = require('react');
var ReactDOM = require('react-dom');
var DnD = require('./ContainerWidget');

var Main = React.createClass({
    render: function(){
        return(
            <DnD />
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));
