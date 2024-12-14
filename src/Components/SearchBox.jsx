import { useEffect, useState } from 'react';

const SearchBox = ({ response, setShow, setFilteredEmployees }) => {
	// console.log(response);
	const [inputValue, setInputValue] = useState('');

	const filter = (e) => {
		e.preventDefault();
		const employees = response.filter((employee) => {
			const checkRole = employee.role
				.toLowerCase()
				.includes(inputValue.toLowerCase());
			const checkName = employee.name
				.toLowerCase()
				.includes(inputValue.toLowerCase());

			return checkRole || checkName;
		});
		setFilteredEmployees(employees);
		setShow(false);
	};

	return (
		<>
			<form action="" onSubmit={filter}>
				<input
					type="text"
					name=""
					id=""
					placeholder="Enter text.."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
};

export default SearchBox;
