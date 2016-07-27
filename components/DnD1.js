var React = require('react');
var ReactDOM = require('react-dom');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var flow = require('lodash/flow');

var widgetSoure = {
    beginDrag: function(props){
        return{
            iditem: props.iditem,
            title: props.title
        }
    },

    isDragging: function (props, monitor){
        return monitor.getItem().iditem === props.iditem;
    }
    // ,
    // endDrag: function(props, monitor, component){
    //     var item = monitor.getItem();
    //     var dropResult =  monitor.getDropResult();
    //     //move data at her
    //         props.moveWidget(item.iditem, props.iditem);
    //
    // }
};
var widgetTarget = {
    canDrop: function(props, monitor){
        var item = monitor.getItem();
        //check can drop
    },
    hover: function(props, monitor, component){
        var dragIndex = monitor.getItem().iditem;
        var hoverIndex = props.iditem;
        if (dragIndex === hoverIndex) {
                return;
        }

        const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = monitor.getClientOffset();

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        props.moveWidget(dragIndex, hoverIndex);
        monitor.getItem().iditem = hoverIndex;

    },
    drop: function(props, monitor){
        console.log(props.iditem);
        //return title and state delete
        return{
            iditem: props.iditem,
            title: props.title
        }
    }
};
function collectDrag(connect, monitor){
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}
function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}
var Widget =  React.createClass({
    propTypes: function(){
        connectDragSource: PropTypes.func.isRequired
        isDragging: PropTypes.bool.isRequired
        connectDropTarget: PropTypes.func.isRequired
        isOver: PropTypes.bool.isRequired
        canDrop: PropTypes.bool.isRequired
    },
    render: function(){
        var connectDragSource = this.props.connectDragSource;
        var isDragging = this.props.isDragging;
        var connectDropTarget = this.props.connectDropTarget;
        var title = this.props.title;
        return connectDragSource(connectDropTarget(
            <div style={{opacity: isDragging ? 0.5 : 1,transform:isDragging ? 'scale(0.9,0.9)' : 'scale(1,1)',
                cursor:isDragging ? 'move' : ''}}>
                {title}
            </div>
        ));
    }
});

module.exports = flow(
    DragSource("div", widgetSoure, collectDrag),
    DropTarget("div", widgetTarget, collectDrop)
)(Widget);
