import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputComponent } from "./InputComponent";
import { signupApiCall } from "../apiCalls";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signupSchema = yup.object({
	fullname: yup.string().required('Required').min(2).max(50),
	phone: yup.string().required('Required').length(10, 'Recheck your number!'),
	email: yup.string().email().required('Required'),
	password: yup.string().required('Required').min(5).max(10),
	passwordConfirm: yup.string().required('Required').min(5).max(10)
}).required('Required')


export const SignupForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: yupResolver(signupSchema)
	});
	const navigate = useNavigate()

	const finalSubmit = async (data) => {
		if (data.password !== data.passwordConfirm) {
			alert("Passwords not matching!")
			return;
		}
		const response = await signupApiCall({
			"email": data.email,
			"username": data.fullname,
			"password": data.password,
			"phone": data.phone
		})

		if (response.status == 200) {
			toast.success("Signup successfull")
			navigate("/login")
		} else {
			toast.error("Signup failed, Please recheck the entered data")
		}
	}

	const phone = watch("phone");
	const email = watch("email");

	console.log(errors);

	return (
		<div className="center-div">
			<div className="signup-form">
				<h1> Register Now!</h1>
				<form onSubmit={handleSubmit(finalSubmit)}>
					<InputComponent
						label="Username"
						name="fullname"
						placeholder="Enter username"
						registerProps={{ required: true }}
						register={register}
						errors={errors}
					/>
					<InputComponent
						label="Phone Number"
						name="phone"
						placeholder="Enter phone number"
						register={register}
						errors={errors}
					/>
					<InputComponent
						label="Email address"
						name="email"
						type="email"
						placeholder="Enter email"
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
					<InputComponent
						label="Confirm Password"
						name="passwordConfirm"
						type="password"
						placeholder="Confirm Password"
						register={register}
						errors={errors}
					/>

					<button type="submit" className="btn btn-primary mt-10">Submit</button><br />
					<a href="/login">Have an account already? Login here</a>
				</form>
			</div>
		</div>
	)
}