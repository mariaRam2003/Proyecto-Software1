import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; // Icono de ojo
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "../styles/Usuarios.css";

const USUARIOS = () => {
  const [messages, setMessages] = useState({
    deleteUser: { successMessage: "", errorMessage: "" },
    updateUserState: { successMessage: "", errorMessage: "" },
    updateRole: { successMessage: "", errorMessage: "" },
  });

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

  const [deleteUserData, setDeleteUserData] = useState({
    userEmail: "",
  });

  const [updateUserStateData, setUpdateUserStateData] = useState({
    userEmail: "",
    isActive: false,
  });

  const [updateRoleData, setUpdateRoleData] = useState({
    userEmail: "",
    role: "",
  });

  const clearMessages = () => {
    setMessages({
      deleteUser: { successMessage: "", errorMessage: "" },
      updateUserState: { successMessage: "", errorMessage: "" },
      updateRole: { successMessage: "", errorMessage: "" },
    });
  };

  const handleDeleteUserInputChange = (e) => {
    const { name, value } = e.target;
    setDeleteUserData({
      ...deleteUserData,
      [name]: value,
    });
  };

  const handleUpdateUserStateInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setUpdateUserStateData({
      ...updateUserStateData,
      [name]: inputValue,
    });
  };

  const handleUpdateRoleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateRoleData({
      ...updateRoleData,
      [name]: value,
    });
  };

  const deleteUser = async () => {
    const token = getTokenFromCookie();

    try {
      // Realizar la solicitud DELETE a la API
      const response = await fetch(
        process.env.REACT_APP_API_DOMAIN + `/users?token=${token}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: deleteUserData.userEmail,
          }),
        }
      );

      if (response.ok) {
        setMessages({
          ...messages,
          deleteUser: {
            successMessage: "Usuario eliminado exitosamente",
            errorMessage: "",
          },
        });
        setDeleteUserData({ userEmail: "" });
        setTimeout(() => clearMessages(), 3000);
      } else {
        setMessages({
          ...messages,
          deleteUser: {
            successMessage: "",
            errorMessage: "Error al eliminar usuario",
          },
        });
      }
    } catch (error) {
      setMessages({
        ...messages,
        deleteUser: {
          successMessage: "",
          errorMessage: "Error en la solicitud DELETE",
        },
      });
      console.error("Error en la solicitud DELETE", error);
    }
  };

  const updateUserState = async () => {
    const token = getTokenFromCookie();
    const state = updateUserStateData.isActive ? "TRUE" : "FALSE";

    try {
      // Realizar la solicitud PUT a la API
      const response = await fetch(
        process.env.REACT_APP_API_DOMAIN +
          `/users/state?state=${state}&token=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: updateUserStateData.userEmail,
          }),
        }
      );

      if (response.ok) {
        setMessages({
          ...messages,
          updateUserState: {
            successMessage: "Estado de usuario actualizado exitosamente",
            errorMessage: "",
          },
        });
        setUpdateUserStateData({
          userEmail: "",
          isActive: false,
        });
        setTimeout(
          () =>
            setMessages({
              ...messages,
              updateUserState: { successMessage: "", errorMessage: "" },
            }),
          3000
        );
      } else {
        setMessages({
          ...messages,
          updateUserState: {
            successMessage: "",
            errorMessage: "Error al actualizar estado de usuario",
          },
        });
      }
    } catch (error) {
      setMessages({
        ...messages,
        updateUserState: {
          successMessage: "",
          errorMessage: "Error en la solicitud PUT",
        },
      });
      console.error("Error en la solicitud PUT", error);
    }
  };
  // Actualizar rol de usuario
  const updateRole = async () => {
    const token = getTokenFromCookie();
    const role = updateRoleData.role.toLowerCase();
    const user_email = updateRoleData.userEmail;

    try {
      // Realizar la solicitud POST a la API
      const response = await fetch(
        process.env.REACT_APP_API_DOMAIN +
          `/users/permissions?user_email=${user_email}&role=${role}&token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (response.ok) {
        setMessages({
          ...messages,
          updateRole: {
            successMessage: "Rol de usuario actualizado exitosamente",
            errorMessage: "",
          },
        });
        setUpdateRoleData({
          userEmail: "",
          role: "",
        });
        setTimeout(
          () =>
            setMessages({
              ...messages,
              updateRole: { successMessage: "", errorMessage: "" },
            }),
          3000
        );
      } else {
        setMessages({
          ...messages,
          updateRole: {
            successMessage: "",
            errorMessage: "Error al actualizar rol de usuario",
          },
        });
      }
    } catch (error) {
      setMessages({
        ...messages,
        updateRole: {
          successMessage: "",
          errorMessage: "Error en la solicitud POST",
        },
      });
      console.error("Error en la solicitud POST", error);
    }
  };

  return (
    <>
      <Header />
      <div className="PAGE">
        <h1>User Management</h1>
        <div>
          <Link to="/USERTABLE">
            <IconButton>
              <div className="btn-users">
                <RemoveRedEyeIcon sx={{ fontSize: 30, color: "white" }} />
                <Typography
                  variant="button"
                  sx={{ color: "white", fontWeight: 600, padding: 2 }}
                >
                  Ver usuarios
                </Typography>
              </div>
            </IconButton>
          </Link>
        </div>
        <div className="Cards">
          <h2>Borrar Usuario</h2>
          <input
            type="text"
            name="userEmail"
            placeholder="Email del usuario a eliminar"
            value={deleteUserData.userEmail}
            onChange={handleDeleteUserInputChange}
          />
          <button onClick={deleteUser}>Eliminar Usuario</button>
          {messages.deleteUser.successMessage && (
            <div className="success-message">
              {messages.deleteUser.successMessage}
            </div>
          )}
          {messages.deleteUser.errorMessage && (
            <div className="error-message">
              {messages.deleteUser.errorMessage}
            </div>
          )}
        </div>

        <div className="Cards">
          <h2>Actualizar Estado de Usuario</h2>
          <input
            type="text"
            name="userEmail"
            placeholder="Email del usuario a actualizar"
            value={updateUserStateData.userEmail}
            onChange={handleUpdateUserStateInputChange}
          />
          <label>
            Activo
            <input
              type="checkbox"
              name="isActive"
              checked={updateUserStateData.isActive}
              onChange={handleUpdateUserStateInputChange}
            />
          </label>
          <button onClick={updateUserState}>Actualizar Estado</button>
          {messages.updateUserState.successMessage && (
            <div className="success-message">
              {messages.updateUserState.successMessage}
            </div>
          )}
          {messages.updateUserState.errorMessage && (
            <div className="error-message">
              {messages.updateUserState.errorMessage}
            </div>
          )}
        </div>

        <div className="Cards">
          <h2>Actualizar Rol de Usuario</h2>
          <input
            type="text"
            name="userEmail"
            placeholder="Email del usuario a actualizar"
            value={updateRoleData.userEmail}
            onChange={handleUpdateRoleInputChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Nuevo Rol"
            value={updateRoleData.role}
            onChange={handleUpdateRoleInputChange}
          />
          <button onClick={updateRole}>Actualizar Rol</button>
          {messages.updateRole.successMessage && (
            <div className="success-message">
              {messages.updateRole.successMessage}
            </div>
          )}
          {messages.updateRole.errorMessage && (
            <div className="error-message">
              {messages.updateRole.errorMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default USUARIOS;
