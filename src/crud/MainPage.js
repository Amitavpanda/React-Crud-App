import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser, getUsers } from "./api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Loading from "./Loading";
const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await deleteUser(id);
      getUserDetails();
    }
  };
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <Loading />
            ) : (
              <>
                {users &&
                  users.map((user) => (
                    <TableRow>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.title}</TableCell>
                      <TableCell>{user.description}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ margin: "0px 20px" }}
                          component={Link}
                          to={`/edit/${user.id}`}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ margin: "0px 20px" }}
                          onClick={() => deleteData(user.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        style={{ margin: "0px 20px" }}
        component={Link}
        to={`/addUser/`}
      >
        Add User
      </Button>
    </div>
  );
};

export default MainPage;
