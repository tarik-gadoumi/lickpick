import Head from "next/head";
import { TextField, Button, Grid } from "@mui/material";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";

export default function ContactForm() {
	const style = {
		marginTop: 10,
	};

	return (
		<form action="/" method="post">
			<Grid sx={style} container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						fullWidth
						required
						id="firstname"
						name="firstname"
						label="Prénom"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						fullWidth
						required
						id="lastname"
						name="lastname"
						label="Nom"
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<EmailField />
				</Grid>
				<Grid item xs={12} md={12}>
					<PhoneField />
				</Grid>
				<Grid item xs={12} md={12}>
					<TextField
						fullWidth
						required
						id="message"
						name="message"
						label="Message"
						multiline
						rows={4}
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<Button variant="contained">Envoyer</Button>
				</Grid>
			</Grid>
		</form>
	);
}
