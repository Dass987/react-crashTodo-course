import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {
	
	state = {
		title: ''
	}

	onSubmit = (e) => {
		e.preventDefault();

		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<h3 className="mb-3 text-left text-secondary">Add new todo</h3>
					<input
						id="Add_Todo"
						type="text" 
						name="title"
						className="form-control"
						placeholder="Add Todo..."
						value={this.state.title}
						onChange={this.onChange}
					/>
				 </div>
				 <button type="submit" className="btn btn-primary btn-lg btn-block">Add</button>
			</form>
		)
	}
}

// --- PropTypes

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

//const formStyle = {display: 'flex'};
//inputStyle = {flex: '10', padding: '5px'};
//const submitStyle = {flex: '1'};

export default AddTodo;