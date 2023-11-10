import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import "./Header.css";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: "#001d3d",
    width: "250px",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleLogout = () => {
    // Realiza aquí la lógica para cerrar la sesión del usuario
    navigate("/HOME"); // Redirige a la página de inicio después del cierre de sesión
  };

  return (
    <div>
      {/* Barra de navegación superior */}
      <div className="header">
        <Link to="/HOME" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="navigation-links">
          <Link to="/HOME">HOME</Link>
          <Link to="/PRECARGA">PRECARGA</Link>
          <Link to="/VIEWS">DATOS</Link>
          <Link to="/USUARIOS">USUARIOS</Link>
          <Link to="/BUSQUEDA">BUSQUEDA</Link>
        </div>
        <div>
          <IconButton onClick={openDrawer}>
            <AccountCircleIcon
              sx={{
                fontSize: 50,
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 1,
                paddingBottom: 1,
                color: "white",
                hover: "black",
              }}
            />
          </IconButton>
        </div>
      </div>

      {/* Menú lateral */}
      <StyledDrawer
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
        sx={{
          width: "250px",
          flexShrink: 0,
        }}
      >
        <IconButton
          onClick={closeDrawer}
          sx={{ alignSelf: "flex-end", color: "white" }}
        >
          X
        </IconButton>
        <AccountCircleIcon sx={{ fontSize: "48px" }} />
        <Typography variant="h6" gutterBottom sx={{ padding: "10px" }}>
          Bienvenid@
        </Typography>

        <Button variant="contained" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </StyledDrawer>
    </div>
  );
};

export default Header;
