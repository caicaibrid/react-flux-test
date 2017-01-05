
const React = require("react");
let Button = require("./button");
let TodoActions = require("../actions/TodoActions");
let ListStore = require("../store/ListStore");

let ButtonController = React.createClass({
    getInitialState(){
      return {
          items:ListStore.getAll()
      }
    },
    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },
    _onChange:function () {
        console.log("ButtonController",ListStore.getAll())
        this.setState({
            items:ListStore.getAll()
        })
    },
    createNewItem:function (e) {
        TodoActions.addNewItem(e.target.previousSibling.previousSibling.value);
    },
    render:function () {
        return <Button onClick={this.createNewItem} items={this.state.items}> </Button>
    }
})

module.exports = ButtonController;
