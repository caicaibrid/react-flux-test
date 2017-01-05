/**
 * Created by sa on 17-1-5.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({},EventEmitter.prototype,{
    items:[],
    getAll:function () {
        return this.items
    },
    addNewItemHandel:function (text) {
        console.log("ListStore-----------------")
        this.items.push(text);
    },
    emitChange:function () {
        this.emit("change");
    },
    addChangeListener:function (callback) {
        this.addListener("change",callback)
    },
    removeChangeListener:function (callback) {
        this.removeListener("change",callback)
    }
})

module.exports = ListStore