var React=require('react');
var QuestionItem=require('./QuestionItem.js');

module.exports=React.createClass({
	render:function(){
		var questions=this.props.questions;
		if(!Array.isArray(questions))throw new Error('questions is not a Array');
		var questionList=questions.map(function(item){
			 return <QuestionItem 
			 			onVote={this.props.onVote}
			 			questionKey={item.key}
			 			key={item.key} 
			 			voteCount={item.voteCount} 
			 			title={item.title} 
			 			desc={item.desc} />
		}.bind(this));

		return (
			<div id="questions" className="">
				{questionList}
			</div>
		)
	}
})