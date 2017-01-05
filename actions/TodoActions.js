/**
 * Created by sa on 17-1-5.
 */
var TodoDispatcher = require("../dispatcher/TodoDispatcher");

var TodoActions = {
    addNewItem:function (text) {
        console.log("TodoActions------------------")
        TodoDispatcher.dispatch({
            actionType:"ADD_NEW_ITEM",
            text:text
        })
    }
}

module.exports = TodoActions