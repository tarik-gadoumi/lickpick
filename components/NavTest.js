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
      sx={{ p: 3, boxShadow: 0 }}
      style={{ textTransform: "none", background: "none" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <a href="/">
              {" "}
              <img
                src="/Logo.png"
                alt="linkpick"
                sx={{ width: 80, height: 80 }}
              />{" "}
            </a>
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
              <MenuIcon sx={{ color: "black" }} />
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
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Montserrat",
                      color: "primary.dark",
                    }}
                  >
                    {page}
                  </Typography>{" "}
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
            <img
              src="/Logo.png"
              alt="linkpick"
              sx={{ width: 80, height: 80 }}
            />
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
                  fontFamily: "Montserrat",
                  color: "primary.dark",
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

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="displayButton">
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
                  fontFamily: "Montserrat",
                  color: "primary.dark",
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
                    fontFamily: "Montserrat",
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
