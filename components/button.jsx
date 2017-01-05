const React = require("react");

var Button = function (props) {
    return <div>
        <input type="text"/>
        <br/>
        <button value="button value" onClick={props.onClick}>Click me</button>
        <br/>
        <ul>
            {
                props.items.map(function (ele,index,array) {
                    return <li data-array={array} key={index}>{ele}</li>
                })
            }
        </ul>
    </div>
}
module.exports = Button;
