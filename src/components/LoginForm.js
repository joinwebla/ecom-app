import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputComponent } from "./InputComponent";
import { loginApiCall } from "../apiCalls";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signupSchema = yup.object({
	username: yup.string().required('Required'),
	password: yup.string().required('Required').min(5).max(10),
}).required('Required')


export const LoginForm = (props) => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: yupResolver(signupSchema)
	});
	const navigate = useNavigate()

	//
	const [loading, setLoading] = useState(false);

	const finalSubmit = async (data) => {
		setLoading(true)
		try {
			const response = await loginApiCall(data)
			if (response.status == 200) {
				const token = response.data.token;
				localStorage.setItem("ecom-token", token)
				navigate("/dashboard")
			}
		} catch (error) {
			toast.error("Invalid username/password")
		} finally {
			setLoading(false)
		}
	}

	console.log(errors);

	return (
		<div className="center-div">
			<div className="signup-form">
				<h1> Please Sign-in</h1>
				<form onSubmit={handleSubmit(finalSubmit)}>
					<InputComponent
						label="Username"
						name="username"
						type="text"
						placeholder="Enter username"
						register={register}
						errors={errors}
					/>
					<InputComponent
						label="Password"
						name="password"
						type="password"
						placeholder="Enter password"
						register={register}
						errors={errors}
					/>
					<button type="submit" class="btn btn-primary mt-10">
						{
							loading ? (<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : null
						}
						Singin
					</button> <br />
					<a href="/signup">Don't have an account? Signup here</a>
				</form>
			</div>
		</div>
	)
}