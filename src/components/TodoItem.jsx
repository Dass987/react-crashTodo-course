import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	
	getStyle = () => {
		return { 
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			backgroundColor: this.props.todo.completed ? '#a5d6a7' : '#f5f5f5',
			padding: '10px 0'
		};
	}
	
	render() {
		
		const { id, title } = this.props.todo;
		
		return (
			<div className="col-md-6 mb-4" >
				<div className="card" style={this.getStyle()}>
					<div className="card-body">
						<div className="card-title">
							<h3>{ title }</h3>
						</div>
						<div className="custom-control custom-checkbox">
							<input
							 type="checkbox" 
							 className="custom-control-input" 
							 id={'customCheck' + this.props.todoId} 
							 onChange={this.props.markComplete.bind(this, id)} 
							 checked={this.props.todo.completed ? 'checked' : ''} />
							<label 
								className="custom-control-label" 
								htmlFor={'customCheck' + this.props.todoId}
								>Check this custom checkbox</label>
						</div>
						<p className="card-text">
						</p>
						<button
						 className="btn btn-danger ml-2 text-white"
						 onClick={this.props.delTodo.bind(this, id)}
						 >Delete</button>
					</div>
				</div>
			</div>
		)
	}
}

// --- PropTypes

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,	
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};

/*const btnStyle = {
	backgroundColor: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}*/

export default TodoItem;