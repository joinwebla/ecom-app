

export const InputComponent = (props) => {
	const {
		register,
		type = "text",
		label,
		placeholder,
		name, //email, password
		errors = {},
		registerProps = {},
	} = props;

	return (
		<div className="form-group mt-10">
			<label>{label}</label>
			<input
				{...register(name, { ...registerProps })}
				type={type}
				className="form-control"
				placeholder={placeholder}
			/>
			{
				errors && errors[name] ? (<span className="text-danger">{errors[name]?.message}</span>) : null
			}
		</div>
	)
}
