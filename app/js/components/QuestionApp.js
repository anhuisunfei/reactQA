var React=require('react');
var QuestionList=require('./QuestionList.js');
var QuestionForm=require('./QuestionForm.js');
var ShowAddButton=require('./ShowAddButton.js');
var _=require('lodash');

module.exports=React.createClass({
	getInitialState:function(){
		var questions=[
			{
				key:1,
				title:"123",
				desc:"234",
				voteCount:22
			}, 
			{
				key:2,
				title:"234234",
				desc:"23423423",
				voteCount:11
			}
		];
		questions=this.sortQuestions(questions);
		return{
			questions:questions,
			formDisplayed:false
		}
	},
	toggleFormDisplay:function(){
		this.setState({
			formDisplayed:!this.state.formDisplayed
		})
	},
	onNewQuestion:function(newQuestion){
		newQuestion.key=this.state.questions.length+1;
		var newQuestions=this.state.questions.concat(newQuestion);
		newQuestions=this.sortQuestions(newQuestions);
		this.setState({
			questions:newQuestions
		});
	},
	sortQuestions:function(questions){
		questions=questions.sort(function(a,b){
			return b.voteCount-a.voteCount;
		})
		return questions;
	},
	onVote:function(key,voteCount){
		 var questions=_.uniq(this.state.questions);
		 var _index=_.findIndex(questions,function(item){
		 	return item.key==key;
		 });
		 questions[_index].voteCount=voteCount;
		 questions=this.sortQuestions(questions);
		 this.setState({
		 	questions:questions
		 })
	},
	render:function(){
		return (
			<div>
				<div className="jumbotron text-center">
					<div className=" container">
						<h1>React 问答</h1>
					</div>
					<ShowAddButton toggleFormDisplay={this.toggleFormDisplay} />
				</div>
				<div className="main container">
					<QuestionForm 
					   onNewQuestion={this.onNewQuestion} 
					   toggleFormDisplay={this.toggleFormDisplay} 
					   formDisplayed={this.state.formDisplayed} />
					<QuestionList 
					onVote={this.onVote} 
					questions={this.state.questions} />	
				</div>
			</div>
		)
	}
}); 