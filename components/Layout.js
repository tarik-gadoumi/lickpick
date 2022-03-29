import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Header from "./Header";
// import Footer from "./Footer";

const BodyContainer = styled("div")({
  display: "flex",
  flex: 1,
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
});


const Layout = ({children}) => {
  return (
    <BodyContainer>
      {/* <Header /> */}
      <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </BodyContainer>
  );
};

export default Layout;
