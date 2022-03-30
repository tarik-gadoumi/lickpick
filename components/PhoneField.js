import { TextField } from "@mui/material";
import { useState } from "react";
import isMobilePhone from "validator/lib/isMobilePhone";

export default function PhoneField() {
	const [phone, setPhone] = useState("");
	const [error, setError] = useState(false);
	const [isValidPhone, setIsValidPhone] = useState(false);

	const handlePhoneChange = (event) => {
		const value = event.target.value;

		setIsValidPhone(isMobilePhone(value));
		setPhone(value);
		setError(!isValidPhone);
		console.log(error);
	};

	return (
		<TextField
			fullWidth
			required
			value={phone}
			error={error}
			type="text"
			label="Téléphone"
			name="phone"
			id="phone"
			onChange={handlePhoneChange}
		/>
	);
}
