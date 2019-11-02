import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			admin: null,
			users: null,
			user: null
		};
		this.changeState = this.changeState.bind(this);
		this.setUsers = this.setUsers.bind(this);
		this.setUser = this.setUser.bind(this);
	}
	changeState() {
		this.setState((prevState) => {
			return { loggedIn: !prevState.loggedIn };
		});
	}

	setUsers(users) {
		this.setState({
			users
		});
	}

	setUser(user) {
		this.setState({
			user
		});
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<div>
						<Route
							exact
							path='/'
							render={(props) => (
								<Login
									{...props}
									setUsers={(users) => this.setUsers(users)}
									setUser={(user) => this.setUser(user)}
									changeState={this.changeState}
								/>
							)}
						/>
						<Route
							path='/Login'
							render={(props) => (
								<Login
									{...props}
									setUsers={(users) => this.setUsers(users)}
									setUser={(user) => this.setUser(user)}
									changeState={this.changeState}
								/>
							)}
						/>
						<Route path='/register' component={Register} />
						<Route
							path='/Welcome'
							render={(props) => (
								<Welcome
									{...props}
									changeState={this.changeState}
									loggedIn={this.state.loggedIn}
									user={this.state.user}
									users={this.state.users}
									setUsers={(users) => this.setUsers(users)}
								/>
							)}
						/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
