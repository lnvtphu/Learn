var React = require('react');
var update = require('react/lib/update');
var Widget = require('./DnD1.js');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Conatainer = React.createClass({
    getInitialState: function() {
      return {items: [{"title":"name 1","iditem":0},{"title":"name 2","iditem":1},{"title":"name 3","iditem":2},{"title":"name 4","iditem":3}]};
    },
    moveWidget: function(dragIndex, dropIndex){
        var itemDrag = this.state.items[dragIndex];
        console.log("drag: "+dragIndex + "drop: "+ dropIndex);
        this.setState(
            update(this.state,{
                    items: {
                       $splice: [
                         [dragIndex, 1],
                         [dropIndex, 0, itemDrag]
                       ]
                    }
                }
            )
        );
    },
    render: function(){
        console.log(this.state.items);
        return(
            <div style={{width: '400px'}}>
                {this.state.items.map((item, i) => {
                    return (
                        <Widget key={item.iditem}
                            iditem={item.iditem}
                            title={item.title}
                            moveWidget={this.moveWidget} />
                        );
                    })}
            </div>
        )
    }
});
module.exports = DragDropContext(HTML5Backend)(Conatainer);
