import { createSearchParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../img/logo.png";

// Style
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/LoginPages.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Datos del usuario para enviar a la API
    const userData = {
      email: mail,
      password: password,
    };

    try {
      const response = await fetch("http://3.88.218.62/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        // Autenticación exitosa, puedes redirigir al usuario a la página de inicio
        const responseData = await response.json();
        navigate({
          pathname: "/HOME",
          search: createSearchParams({
            id: responseData.id,
          }).toString(),
        });
      } else if (response.status === 422) {
        // Error de validación
        const errorData = await response.json();
        console.log("Error de validación:", errorData);
      } else {
        // Otro error no manejado
        console.log("Error inesperado:", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container">
      <div className="login_area">
        <form className="form-signin" onSubmit={handleSubmit}>
          {/* Logo y título */}
          <div className="title-holder">
            <img src={logo} className="logo-image" alt="" />
            <h2 className="login_title">Login</h2>
          </div>
          {/* Área de correo electrónico */}
          <div className="text-box">
            <input
              required
              type="email" // Cambiado de "mail" a "email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label>Correo Electrónico</label>
          </div>
          {/* Área de contraseña */}
          <div className="text-box">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          <br />
          {/* Enviar el formulario y llamar a handleSubmit */}
          <button className="Button-Login" type="submit">
            Login
          </button>
        </form>
        {/* Enlace para registrarse */}
        <div className="register-link">
          <p>
            No tienes una cuenta aún?{" "}
            <Link to="/SINGUP" className="registrate-btn">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
