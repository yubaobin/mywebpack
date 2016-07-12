const React = require('react');
const ReactDom = require('react-dom');

const Test = React.createClass({
	render: function(){
		return (
			<span className="test">测试中文</span>
		);
	}
});

ReactDom.render(
	<Test />,
	document.getElementById('box')
)