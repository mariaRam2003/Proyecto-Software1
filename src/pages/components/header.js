import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
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
  const getTokenFromCookie = () => {
    const cookieArray = document.cookie.split("; ");
    let token = null;

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i];
      if (cookie.startsWith("token=")) {
        token = cookie.split("=")[1];
        break;
      }
    }

    return token;
  };

  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userRoles, setUserRoles] = useState({});

  useEffect(() => {
    const token = getTokenFromCookie();

    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_DOMAIN + `/users/permissions?token=${token}`
        );
        const data = await response.json();
        console.log(data);
        setUserRoles(data); // Store user roles in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <Link to="/HOME" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="navigation-links">
          <Link to="/HOME">HOME</Link>
          <Link to="/PRECARGA">PRECARGA</Link>
          <Link to="/VIEWS">DATOS</Link>
          {userRoles === "admin" && <Link to="/USUARIOS">USUARIOS</Link>}
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
