import { createSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../img/logo.png";

// Style
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/LoginPages.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [estado, setEstado] = useState("true");
  const [rol, setRol] = useState("viewer");
  const [isUserCreated, setIsUserCreated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: mail,
      password: password,
      nombre: name,
      estado: estado,
      rol: rol,
    };

    try {
      const response = await fetch(
        process.env.REACT_APP_API_DOMAIN + "/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.status === 201) {
        // Autenticación exitosa, puedes redirigir al usuario a la página de inicio
        const responseData = await response.json();
        navigate({
          pathname: "/",
          search: createSearchParams({
            id: responseData.id,
          }).toString(),
        });
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.log("Error de validación:", errorData);
      } else {
        console.log("Error inesperado:", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container-login">
      <div className="login_area">
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="title-holder">
            <img src={logo} className="logo-image" alt="" />
            <h2 className="login_title">Registrate</h2>
          </div>
          <div className="text-box">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Nombre</label>
          </div>
          <div className="text-box">
            <input
              required
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label>Correo Electrónico</label>
          </div>
          <div className="text-box">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>
          {/* Área de estado */}
          <br />
          <button className="Button-Login" type="submit">
            Registrar
          </button>
        </form>
        {isUserCreated && (
          <div className="user-created-message">
            Usuario creado. Redirigiendo...
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
