import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { spacing, Link } from "@mui/material/";
import Dropdown from "./Dropdown";

const pages = ["Trouver mon entreprise", "Trouver mon école"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ p: 3 }}
      style={{ textTransform: "none", background: "none" }}
    >
      <Container maxWidth="xl" sx={{ mr: 5 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src="/Logo.png"
              alt="linkpick"
              sx={{ width: 80, height: 80 }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src="/Logo.png" alt="linkpick" className="img" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
            <Box sx={{ mt: 2 }}>
              {" "}
              <Dropdown />
            </Box>
          </Box>

          <Box>
            <Typography>
              {" "}
              <Link
                href="#"
                underline="none"
                sx={{
                  px: 1,
                  pb: 0.5,
                  color: "black",
                  fontSize: 14,
                }}
              >
                {"  Se connecter"}
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography>
              {" "}
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  px: 5,
                  pb: 0.5,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    borderRadius: "20px",
                    px: 1,
                    pb: 0.5,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {"  Sinscrire"}
                </Link>
              </Button>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
<style jsx>{`
  .img {
    max-width: 30%;
  }
  .nav-display {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9rem;
    font-weight: bold;
    -moz-box-shadow: 0 4px 4px #f8f8f8;
    -webkit-box-shadow: 0 4px 4px #f8f8f8;
    box-shadow: 0 4px 4px #f8f8f8;
    padding: 2rem;
  }
  .nav-display a {
    text-decoration: none;
    color: black;
  }
  .logo-secondary-display {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    align-items: center;
  }
  .logo-primary-display {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    align-items: center;
  }
  .sign-up {
    background-color: #0360f9;
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    border-radius: 50px;
  }
  .sign-up a {
    color: white;
  }
`}</style>;
