var React = require('react');
var ReactDOM = require('react-dom');
var style = require('../css/main.css');

var img1 = document.createElement("img");
img1.src = require("../images/small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("../images/big.png");
document.body.appendChild(img2);

ReactDOM.render(
	<div>
	<h1 className={style.red}>局部</h1>
	<span className="blue">全局</span>
	<div className="green"></div>
	</div>,
	document.getElementById('box')
)

