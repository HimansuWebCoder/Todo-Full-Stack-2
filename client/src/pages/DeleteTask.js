import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DeleteTask() {
	const { taskId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		console.log(taskId);
	});

	function deleteTask() {
		fetch(`http://localhost:8000/todos/${taskId}/deleteTask`, {
			method: "delete",
		});
	}

	return (
		<div>
			<h1>Do you really want to delete this Task ?</h1>
			<button onClick={deleteTask}>Delete</button>
		</div>
	);
}

export default DeleteTask;
