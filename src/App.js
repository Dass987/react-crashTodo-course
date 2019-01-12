import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import uuid from 'uuid';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

	state = {
		todos: [
			/*{id:  uuid.v4(), title: 'Take out the trash', completed: false},
			{id: uuid.v4(), title: 'Dinner with wife', completed: true},
			{id: uuid.v4(), title: 'Meeting with boss', completed: false}*/
		]
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => this.setState({ todos: res.data }));
	}

	// --- Toggle Complete

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	}

	// --- Delete todo

	delTodo = (id) => {
		console.log(id + ' is here');
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState({
				todos: [...this.state.todos.filter(todo => todo.id !== id)]
			}));

	}

	// --- Add todo

	addTodo = (title) => {

		/*const newTodo = {
			id: uuid.v4(),
			title: title,
			completed: false
		}*/

		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title: title,
			completed: false
		})
			.then(res => this.setState({
				todos: [...this.state.todos, res.data]
			}));

	}

  render() {
    return (
      <Router>
				<div className="App">
					<img src={logo} className="App-logo" alt="Logo" />
					<Header/>
					<Route exact path="/" render={props => (
						<React.Fragment>
							<div className="container mt-4">
								<div className="mb-5">
									<AddTodo addTodo={this.addTodo} />
								</div>
								<div className="dropdown-divider"></div>
								<div className="row mt-5">
									<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
								</div>
							</div>
						</React.Fragment>
					)} />
					<Route path="/about" component={About} />
				</div>
			</Router>
    );
  }
}

export default App;
