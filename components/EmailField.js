import { TextField } from "@mui/material";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function EmailField() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const handleEmailChange = (event) => {
		const val = event.target.value;

		val !== '' ? setError(!isEmail(val)) : setError(false);
		setEmail(val);
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
