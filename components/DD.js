var React = require('react');
var ReactDOM = require('react-dom');
var Box = require('./Box');

var DD = React.createClass({
    render: function(){
        return(
            <div className="boxContainer">
                <Box/>
                <Box/>
            </div>
        )
    }
});
// var React = require('react');
// var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
// var _ = require('lodash');
// var WidthProvider = require('react-grid-layout').WidthProvider;
// var ReactGridLayout = require('react-grid-layout');
// ReactGridLayout = WidthProvider(ReactGridLayout);
//
//
// var BasicLayout = React.createClass({
//   mixins: [PureRenderMixin],
//
//   propTypes: {
//     onLayoutChange: React.PropTypes.func.isRequired
//   },
//
//   getDefaultProps() {
//
//     return {
//       className: "layout",
//       items: 20,
//       rowHeight: 30,
//       cols: 12
//     };
//   },
//
//   getInitialState() {
//
//       console.log("calll");
//     var layout = this.generateLayout();
//     return {
//       layout: layout
//     };
//   },
//
//   generateDOM() {
//     return _.map(_.range(this.props.items), function(i) {
//       return (<div key={i}><span className="text">{i}</span></div>);
//     });
//   },
//
//   generateLayout() {
//     var p = this.props;
//     return _.map(new Array(p.items), function(item, i) {
//       var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
//       return {x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString()};
//     });
//   },
//
//   onLayoutChange: function(layout) {
//     this.props.onLayoutChange(layout);
//   },
//
//   render() {
//     return (
//       <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange}
//           {...this.props}>
//         {this.generateDOM()}
//       </ReactGridLayout>
//     );
//   }
// });
//
// module.exports = BasicLayout;
// if (require.main === module) {
//   require('./DDContainer.js')(module.exports);
// }
ReactDOM.render(<DD />, document.getElementById('app'));
