/**
 * Created by sa on 17-1-5.
 */
var Dispatcher = require("flux").Dispatcher;
var TodoDispatcher = new  Dispatcher();
var ListStore = require("../store/ListStore");

TodoDispatcher.register(function (action) {
    console.log("TodoDispatcher",action)
    switch (action.actionType){
        case "ADD_NEW_ITEM":
            ListStore.addNewItemHandel(action.text)
            ListStore.emitChange();
            break;
        default:
            break;
    }
})
module.exports = TodoDispatcher;