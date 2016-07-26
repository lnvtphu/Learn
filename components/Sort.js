var React = require('react');
var ReactDOM = require('react-dom');
var Sortable = require('react-sortable-hoc');
var LinkState = require('react-link-state');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;
var SortableHandle = Sortable.SortableHandle;
var arrayMove = Sortable.arrayMove;

const DragHandle = SortableHandle(
    function test(){
    return (
        <span className="glyphicon glyphicon-menu-hamburger pointer"> </span>
    );
});
function checkTitle(x){
    alert(x);
}
const SortableItem = SortableElement(
    function test2({value}){
    return(
        <li  className="SortableItem">
            <DragHandle />
            {value}
        </li>
    );
});


const SortableList = SortableContainer(({items}) => {
	return (
		<ul  className="SortableList">
			{items.map((value, index) =>
                <SortableItem key={index}  idItem = {value.iditem} index={index} value={value.title}/>
            )}
		</ul>
	);
});

var SortableComponent = React.createClass({
    getInitialState: function(){
        return {
            items: [{"title":"name 1","iditem":1},{"title":"name 2","iditem":2},{"title":"name 3","iditem":3},{"title":"name 4","iditem":4}]
        }
    },
    onSortEnd: function({oldIndex, newIndex}){
        let {items} = this.state;

        this.setState({
            items: arrayMove(items, oldIndex, newIndex)
        });
    },
    render: function(){
        let {items} = this.state;

        return (
            <SortableList items={items}  onSortEnd={this.onSortEnd} useDragHandle={true} />
        )
    }
});


ReactDOM.render(<SortableComponent />, document.getElementById('app'));
