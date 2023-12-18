import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { SignupForm } from './components/SignupForm';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, ProtectedRoute } from './routes/ProtectedRoute';
import { ComponentA } from './liftingstateup/ComponentA';
import { ComponentB } from './liftingstateup/ComponentB';
import ErrorBoundary from './components/ErrorBoundary';

// Public route
const routes = createBrowserRouter([{
  path: "/signup",
  element: <SignupForm />
}, {
  path: "/login",
  element: <LoginForm />
}, {
  path: "/dashboard",
  element: <ProtectedRoute element={<Dashboard />} />,
  errorElement: <ErrorBoundary />
}, {
  path: "/testing",
  element: <ComponentB a={"10"} b={20} name="sdvsdfv" list={{}} element={"sdfsd"} />,
}, {
  path: "/",
  element: <LoginForm />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={routes} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
