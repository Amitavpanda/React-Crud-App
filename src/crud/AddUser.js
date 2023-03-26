import React, { useState } from "react";
import { Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { addUser } from "./api";
import { Button } from "@mui/material";

const initialValue = {
  name: "",
  email: "",
  title: "",
  description: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email, title, description } = user;
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUserDetails = async (e) => {
    e.preventDefault();
    if (!name || !email || !title || !description) {
      toast.error("please fill all the input fields");
    }
    await addUser(user);
    toast.success("Added Successfully");
    setUser({ name: "", email: "", title: "", description: "" });
    navigate("/");
  };
  return (
    <div>
      <h1>add user</h1>

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
            onClick={(e) => addUserDetails(e)}
          >
            Submit
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

export default AddUser;
