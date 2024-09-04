import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<div>
			<Link to="/">Home </Link>
			<Link to="create-task">Create Task Page </Link>
			<Link to="todos/:taskId/deleteTask">Delete Task Page </Link>
			<Link to="edit-task">Edit Task Page </Link>
			<Outlet />
		</div>
	);
}

export default Layout;
