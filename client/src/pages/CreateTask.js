import { useState, useEffect } from "react";

function CreateTask() {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("https://server-seven-beta-99.vercel.app/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ todo: inputValue }), // Send `todo` data to the server
		});
	};

	return (
		<div>
			<h1>Create Task</h1>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter task"
				required
			/>
			<button onClick={handleSubmit}>Add Task</button>
		</div>
	);
}

export default CreateTask;
