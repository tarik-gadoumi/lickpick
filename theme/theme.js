import { createTheme } from "@mui/material/styles";
import "typeface-roboto";
import "typeface-montserrat";

const theme = createTheme({
	palette: {
		primary: {
			light: "#F3F7FF",
			main: "#0060F9",
			dark: "#152652",
		},
		secondary: {
			main: "#00CB73",
		},
		warning: {
			main: "#FFB300",
			dark: "#F96C00",
		},
	},
    typography: {
        fontFamily: ['Roboto', 'Montserrat'].join(','),
		h1:{
			fontSize: 60,
			fontWeight: "bold",
		},

		h2:{
			fontSize: 40,
			fontWeight: "bold",
		},

		h3:{
			fontSize: 30,
			fontWeight: "bold",
		},

		h4:{
			fontSize: 25,
		},

		h5:{
			fontSize: 20,
		},

    }
});

export default theme;
