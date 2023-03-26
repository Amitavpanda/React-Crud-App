import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { ToastContainer } from "react-toastify";
import "antd/dist/reset.css";
import "./App.css";
import MainPage from "./crud/MainPage";
import AddUser from "./crud/AddUser";
import EditUser from "./crud/EditUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
