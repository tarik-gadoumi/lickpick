import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavBar from "./NavBar";
import NavTest from "./NavTest";
import Footer from "./Footer";
import Foote from "./Foote";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


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
      {/* <Foote /> */}
      {/* <NavBar /> */}
      {/* <NavTest /> */}
  
      <Box sx={{ flexGrow: 1, minHeight: "60vh" }}>{children}</Box>
      <br></br>
      <br></br>

      {/* <Footer /> */}
      {/* <Foote /> */}
      <Foote />

      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/ScrollTrigger.min.js"></script>
    </BodyContainer>
  );
};

export default Layout;
