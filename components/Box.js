var React = require('react');
var ReactDOM = require('react-dom');
var ResizableAndMovable = require('react-resizable-and-movable');

const style = {
  textAlign: 'center',
  padding: '20px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  backgroundColor: '#ffbf00',
};
 var Box = React.createClass({
    render() {
        return (
            <ResizableAndMovable
                x={20}
                y={20}
                style={style}
                bounds={'parent'}
                width={200}
                height={200}
                moveGrid={[1, 1]}
                resizeGrid={[20, 20]}
                canUpdateSizeByParent={true}
                canUpdatePositionByParent={true}
            >
                <div className="">
                    <p>react-resizable-and-movable Example</p>
                    <p>start 200px x 200px</p>
                    <p>min 200px x 200px</p>
                    <p>max 800px x 300px</p>
                </div>
            </ResizableAndMovable>
        );
    }
 });
module.exports = Box;
// ReactDOM.render(<Box />, document.getElementById('app'));
