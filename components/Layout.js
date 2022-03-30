import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavBar from "./NavBar";
import NavTest from "./NavTest";
import Footer from "./Footer";
import Foote from "./Foote";

const BodyContainer = styled("div")({
  display: "flex",
  flex: 1,
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Layout = ({ children }) => {
  return (
    <BodyContainer>
      {/* <NavBar /> */}
      <NavTest />
      <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>{children}</Box>
      <br></br>
      <br></br>

      <Footer />
      {/* <Foote /> */}

      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </BodyContainer>
  );
};

export default Layout;
