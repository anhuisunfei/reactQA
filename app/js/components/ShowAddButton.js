
var React=require('react');

module.exports=React.createClass({
	render:function(){
		return(
			<button id="addQuestionBtn" onClick={this.props.toggleFormDisplay} className="btn btn-success">添加问题</button>
		)
	}
})