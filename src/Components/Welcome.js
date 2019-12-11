import React from "react";
import { Redirect } from "react-router-dom";

function Welcome(props) {
  function handleLogout() {
    props.changeState();
  }
  // const [, setadmin] = useState(null);
  function handleAdminAdd(e) {
    let updateEmail = e.target.value;
    fetch("http://localhost:3000/admin/add", {
      method: "POST",
      body: JSON.stringify({
        email: updateEmail
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        handleAdminChange(updateEmail);
      })
      .catch(error => console.error("Error:", error));
  }
  function handleAdminRemove(e) {
    let updateEmail = e.target.value;
    fetch("http://localhost:3000/admin/remove", {
      method: "POST",
      body: JSON.stringify({
        email: updateEmail
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        handleAdminChange(updateEmail);
      })
      .catch(error => console.error("Error:", error));
  }
  function handleAdminChange(updateEmail) {
    let updatedUsers = props.users;
    let index = updatedUsers.findIndex(obj => obj.email === updateEmail);
    updatedUsers[index].admin = !updatedUsers[index].admin;
    props.setUsers(updatedUsers);
  }

  return (
    <>
      {props.loggedIn ? (
        <div className="welcome-page">
          <h1 id="welcome-msg">
            Welcome to NOBROKER,{" "}
            {props.user.firstName + " " + props.user.lastName}
          </h1>

          <div id="btn-container">
            <button id="logout-btn" type="submit" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {props.user.admin ? (
            <div id="table-container">
              <table>
                <tbody>
                  <tr id="header">
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Add admin</th>
                  </tr>

                  {props.users.map((obj, index) => {
                    return (
                      <tr key={index}>
                        <td>{obj.firstName}</td>
                        <td>{obj.lastName}</td>
                        <td>{obj.email}</td>

                        <td>
                          {obj.admin ? (
                            <button
                              id="make-admin-btn"
                              value={obj.email}
                              onClick={handleAdminRemove}
                            >
                              remove
                            </button>
                          ) : (
                            <button
                              id="make-admin-btn"
                              value={obj.email}
                              onClick={handleAdminAdd}
                            >
                              add
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default Welcome;
