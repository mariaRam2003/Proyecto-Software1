import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    const token = getTokenFromCookie();

    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_DOMAIN + `/users?page_num=1&token=${token}`
        );
        const data = await response.json();
        setUsers(data.users); // Ajusta aquí para acceder a la propiedad 'users'
      } catch (error) {
        console.error("Error fetching data:", error);
        // Puedes manejar el error de alguna manera (mostrar un mensaje de error, por ejemplo)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="PAGE">
        <h1>DATOS DE USUARIOS</h1>
        <div className="pagina">
          <table className="table-users">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.nombre}</td>{" "}
                    {/* Ajusta aquí para acceder a 'nombre' en lugar de 'name' */}
                    <td>{user.email}</td>
                    <td>{user.rol}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
