import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Welcome(props) {
	function handleLogout() {
		props.changeState();
	}
	const [, setadmin] = useState(null);
	let updateEmail;
	function handleAdminChange(e) {
		updateEmail = e.target.value;
		fetch('http://localhost:8080/admin/add', {
			method: 'POST',
			body: JSON.stringify({
				email: e.target.value
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => {
				handleAdmin();
			})
			.catch((error) => console.error('Error:', error));
	}
	function handleAdminRemove(e) {
		updateEmail = e.target.value;
		fetch('http://localhost:8080/admin/remove', {
			method: 'POST',
			body: JSON.stringify({
				email: e.target.value
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => {
				handleAdmin();
			})
			.catch((error) => console.error('Error:', error));
	}
	function handleAdmin() {
		if (props.users) {
			for (let i = 0; i < props.users.length; i++) {
				if (props.users[i].email === updateEmail) {
					if (props.users[i].admin) {
						setadmin(false);
					} else {
						setadmin(true);
					}
				}
			}
		}
	}

	return (
		<>
			{props.loggedIn ? (
				<div className='welcome-page'>
					<h1 id='welcome-msg'>
						Welcome to NOBROKER,{' '}
						{props.user.firstName + ' ' + props.user.lastName}
					</h1>

					<div id='btn-container'>
						<button
							id='logout-btn'
							type='submit'
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>

					{props.user.admin ? (
						<div id='table-container'>
							<table>
								<tbody>
									<tr id='header'>
										<th>First name</th>
										<th>Last name</th>
										<th>Email</th>
										<th>Add admin</th>
									</tr>

									{props.users.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.firstName}</td>
												<td>{obj.lastName}</td>
												<td>{obj.email}</td>

												<td>
													{obj.admin ? (
														<button
															id='make-admin-btn'
															value={obj.email}
															onClick={
																handleAdminRemove
															}
														>
															remove
														</button>
													) : (
														<button
															id='make-admin-btn'
															value={obj.email}
															onClick={
																handleAdminChange
															}
														>
															add
														</button>
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					) : (
						''
					)}
				</div>
			) : (
				<Redirect to='/login' />
			)}
		</>
	);
}

export default Welcome;
