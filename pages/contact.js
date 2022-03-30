import { Grid, Stack, Typography } from "@mui/material";
import ContactForm from "../components/contactForm";

function Contact() {
	return (
		<Stack
			sx={{ padding: 5 }}
			direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
			spacing={3}
			justifyContent={"space-around"}
			alignItems={"flex-start"}
		>
			<Stack
				direction={"column"}
				justifyContent={"space-around"}
				spacing={10}
                maxWidth={700}
                >
				<Typography
					variant="h2"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
					}}
					fontSize={{ xs: 40, sm: 60 }}
				>
					Contactez nous !
				</Typography>
				<Stack
					direction={"column"}
					spacing={5}
					alignSelf={{lg:"flex-end"}}
				>
					<Typography
						variant="body1"
						sx={{
							fontFamily: "Roboto",
							fontWeight: 400,
                            fontSize:20
						}}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Vel ab perferendis ducimus iure nisi possimus
						necessitatibus libero veniam voluptatem culpa, incidunt
						autem expedita asperiores. Aliquid ipsa qui ex nesciunt
						officiis?
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontFamily: "Roboto",
							fontWeight: 400,
                            fontSize:20
						}}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Vel ab perferendis ducimus iure nisi possimus
						necessitatibus libero veniam voluptatem culpa, incidunt
						autem expedita asperiores. Aliquid ipsa qui ex nesciunt
						officiis?
					</Typography>
				</Stack>
			</Stack>
			<ContactForm />
		</Stack>
	);
}
export default Contact;
