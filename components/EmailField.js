import { TextField } from "@mui/material";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function EmailField() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(false);
	const handleEmailChange = (event) => {
		const val = event.target.value;

		setIsValidEmail(isEmail(val));
		setEmail(val);
		setError(!isValidEmail);
	};

	return (
		<TextField
			fullWidth
			required
			value={email}
			error={error}
			type="email"
			label="Email"
			name="email"
			id="email"
			onChange={handleEmailChange}
		/>
	);
}
