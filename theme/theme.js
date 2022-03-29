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
    }
});

export default theme;
