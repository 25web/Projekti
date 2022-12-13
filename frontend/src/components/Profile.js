import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let url = `http://localhost:3001/user/delete`;

  let body = JSON.stringify({
    username: username,
  });

  var authOptions = {
    method: "post",
    url: url,
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  const deleteUser = () => {
    axios(authOptions)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
          window.location.reload(true);
        }
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <p>{message}</p>
      <div className="container">
        <button
          type="button"
          class="btn btn-danger"
          onClick={deleteUser}
          data="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
