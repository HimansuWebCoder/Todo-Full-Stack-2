import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function ViewTask() {
	const [todos, setTodo] = useState([]);

	useEffect(() => {
		fetch("https://server-seven-beta-99.vercel.app/allTodos")
			.then((res) => res.json())
			.then((todos) => {
				console.log(todos);
				setTodo(todos);
			});
	}, []);

	const deleteTodo = (taskId) => {
		fetch(`http://localhost:8000/todos/${taskId}/deleteTask`, {
			method: "delete",
		}).then((res) => {
			if (res.ok) {
				// Update the state by filtering out the deleted task
				setTodo((prevTodos) =>
					prevTodos.filter((todo) => todo.id !== taskId),
				);
			}
		});
	};

	// return (
	// <div>
	// 	<h1>View Task</h1>

	// 	{todos.map((todo) => (
	// 		<>
	// 			<p key={todo.id}>{todo.todo}</p>
	// 			<button onClick={() => deleteTodo(todo.id)}>
	// 				Delete Task
	// 			</button>
	// 			<button>
	// 				<Link to={`todos/${todo.id}/deleteTask`} />
	// 				Delete the task
	// 				<Link />
	// 			</button>
	// 			<Outlet />
	// 		</>
	// 	))}
	// </div>

	// );

	return (
		<div>
			<h1>View Task</h1>

			{todos.map((todo) => (
				<div key={todo.id}>
					{" "}
					{/* Apply the key to the outermost element */}
					<p>{todo.todo}</p>
					<button onClick={() => deleteTodo(todo.id)}>
						Delete Task
					</button>
					<button>
						{/* Wrap the button text inside the Link component */}
						<Link to={`todos/${todo.id}/deleteTask`}>
							Delete the task
						</Link>
					</button>
					<Outlet />
				</div>
			))}
		</div>
	);
}

export default ViewTask;
