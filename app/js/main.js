var React=require('react');
var reactDOM=require('react-dom');
var QuestionApp=require('./components/QuestionApp.js');
var mainCom=reactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
)