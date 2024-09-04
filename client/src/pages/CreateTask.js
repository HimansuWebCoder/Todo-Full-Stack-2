import { useState, useEffect } from "react";

function CreateTask() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://localhost:8000/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ todo: inputValue }), // Send `todo` data to the server
		})
			.then((res) => res.json())
			.then((newTodo) => {
				// Add the new task to the existing todos
				setTodos([...todos, newTodo]);
				// Clear the input field
				setInputValue("");
			})
			.catch((error) => {
				console.error("Error creating task:", error);
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
