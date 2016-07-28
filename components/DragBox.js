var React = require('react');
var ReactDOM = require('react-dom');



var DragBox = React.createClass({
    getInitialState: function(){
        return{
            data: [{"col":"col-sm-4","iditem":0},{"col":"col-sm-4","iditem":1},{"col":"col-sm-4","iditem":2}]
        }
    },
    dragStart: function(event){
        this.dragged = event.currentTarget;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData("text/html", event.currentTarget);
    },
    dragOver: function(event){
        console.log(event.clientX);
    },
    dragEnd: function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        console.log("end: "+event.target.offsetWidth +"height "+event.target.offsetHeight);
    },
    render: function(){
        return(
            <div onDragOver={this.dragOver}>
                <div className="row">{
                    this.state.data.map((value, index) =>{
                        return(
                            <div onDragEnd={this.dragEnd}
                            draggable="true"
                            onDragEnd={this.dragEnd}
                            onDragStart={this.dragStart}
                            className={value.col} key={index}>{value.col} + {value.iditem}</div>
                        );
                    })
                }
                </div>
                <div className="bottom-tartget">

                </div>
            </div>
        )
    }
});

ReactDOM.render(<DragBox />, document.getElementById('app'));
