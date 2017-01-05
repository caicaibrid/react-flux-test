/**
 * Created by sa on 17-1-3.
 */
const React = require("react");
const ReactDom = require("react-dom");
const ButtonController = require("./components/ButtonController");

const app = document.getElementById("app");
app.style.color = 'blue';

ReactDom.render(<ButtonController count="0" />,document.querySelector("#app"));
