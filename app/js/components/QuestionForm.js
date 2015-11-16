var React=require('react');

module.exports=React.createClass({
	handleForm:function(e){
		e.preventDefault();
		if(!this.refs.title.value)return;
		var newQuestion={
			title:this.refs.title.value,
			desc:this.refs.desc.value,
			voteCount:0
		};
		this.refs.addQuestionForm.reset();
		this.props.onNewQuestion(newQuestion);
	},
	render:function(){
		var styleObj={
			display:this.props.formDisplayed?'block':'none'
		};
		return(
			<form ref="addQuestionForm" style={styleObj} onSubmit={this.handleForm} name="addQuestion" className="jumbotron clearfix">
				<div className="form-group">
					<label htmlFor="form-group">问题</label>
					<input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题表示"/>

				</div>
				<textarea ref="desc" className="form-control" rows="3" placeholder="问题描述"></textarea>
				<button className="btn btn-success pull-right">确认</button>
				<button type="button" className="btn btn-default pull-right" onClick={this.props.toggleFormDisplay}>取消</button>

			</form>

		)

	}
})
