/*
* 用户访问 View
View 发出用户的 Action
Dispatcher 收到 Action，要求 Store 进行相应的更新
Store 更新后，发出一个"change"事件
View 收到"change"事件后，更新页面
* */
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
