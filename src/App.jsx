import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';

function App() {
	const [response, setResponse] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState(response);
	const [show, setShow] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(
					'https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood'
				);
				let data = await response.json();
				setResponse(data);
			} catch (error) {
				console.error('Failed to load users', error);
			}
		};
		setShow(true);
		fetchData();
	}, []);

	return (
		<>
			<SearchBox
				response={response}
				setFilteredEmployees={setFilteredEmployees}
				setShow={setShow}
			/>

			{show && (
				<div className="employeers-container">
					{response?.map((user) => (
						<div key={user.id} className="employeers">
							<p>Name: {user.name}</p>
							<p>Role: {user.role}</p>
							<p>Department: {user.department}</p>
						</div>
					))}
				</div>
			)}

			{!show && (
				<div className="employeers-container">
					<h2>Filtered Employees</h2>
					{filteredEmployees?.map((user) => (
						<div key={user.id} className="employeers">
							<p>Name: {user.name}</p>
							<p>Role: {user.role}</p>
							<p>Department: {user.department}</p>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default App;
