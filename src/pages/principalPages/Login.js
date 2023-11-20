import { createSearchParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../img/logo.png";

// Style
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/LoginPages.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate();

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: mail,
      password: password,
    };

    try {
      const response = await fetch(
        process.env.REACT_APP_API_DOMAIN + "/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        console.log("Login exitoso:", responseData);

        // Configura la cookie con el token JWT
        document.cookie = `token=${responseData}; path=/; secure; samesite=strict`;

        // Imprime la cookie en la consola
        console.log("Cookie con el token JWT:", document.cookie);

        setAlertMessage(
          "¡Login exitoso! Espera a ser dirigido a la página principal."
        );
        // Espera 3 segundos antes de redirigir para dar tiempo a leer el mensaje de éxito
        setTimeout(() => {
          navigate({
            pathname: "/HOME",
            search: createSearchParams({
              id: responseData.id,
            }).toString(),
          });
        }, 3000);
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.log("Error de validación:", errorData);
        setAlertMessage(
          "Credenciales inválidas. Por favor, inténtalo de nuevo."
        ); // Mensaje de error
      } else {
        console.log("Error inesperado:", response.status);
        setAlertMessage("Error inesperado. Por favor, inténtalo de nuevo."); // Mensaje de error
      }
    } catch (error) {
      console.error("Error de red:", error);
      setAlertMessage("Error de red. Por favor, inténtalo de nuevo."); // Mensaje de error
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
          {/* Mensaje de alerta */}
          {alertMessage && <div className="alert-message">{alertMessage}</div>}
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
