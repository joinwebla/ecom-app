import { Navigate } from 'react-router-dom';

export const ProtectedRoute = (props) => {
	const isLoggedIn = !!localStorage.getItem("ecom-token");
	if (isLoggedIn) return props.element;
	return <Navigate to="/login" replace />
}

export const AuthProvider = (props) => {
	return <props.element user={"some details here"} />
}