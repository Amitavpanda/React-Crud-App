import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "./api";
import { Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
const initialValue = {
  name: "",
  email: "",
  text: "",
  description: "",
};
const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email, title, description } = user;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    // console.log(response.data);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const editUserDetails = async () => {
    await editUser(id, user);
    toast.success("Updated successfully");
    navigate("/");
  };
  return (
    <div>
      <h1>Edit User</h1>
      <form>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            required
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            required
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <Input
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            required
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <Input
            type="text"
            placeholder="Enter description"
            name="description"
            value={description}
            required
            onChange={(e) => onValueChange(e)}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "0px 20px" }}
            onClick={() => editUserDetails()}
          >
            Update User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "0px 20px" }}
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
