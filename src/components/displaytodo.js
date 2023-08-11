import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, deleteData, fetchdatabyid } from "../redux/slice/todoSlice";
import { TiDeleteOutline } from "react-icons/ti";
import { LuEdit } from "react-icons/lu";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
function DisplayTodo() {
  const dispatch = useDispatch();
  const [dataa, setData] = useState([]);
  const data = useSelector((state) => state.todos.data);
  const handelete = async (id) => {
    const res = await dispatch(deleteData(id));
    if (res.type === "deleteData/fulfilled") {
      dispatch(fetchdata());
    }
  };

  const handleEdit = async (id, e) => {
    e.preventDefault();
    const res = await dispatch(fetchdatabyid(id));
  };

  useEffect(() => {
    if (data.length > 0) {
      setData(data);
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchdata());
    }
    fetchData();
  }, [dispatch]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {dataa &&
          dataa?.map((item, index) => (
            <tr key={index}>
              <td>{item?.title}</td>
              <td>{item?.description}</td>
              <td style={{ textAlign: "center" }}>
                <OverlayTrigger
                  placement={"top"}
                  overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
                >
                  <span style={{ cursor: "pointer" }}>
                    <TiDeleteOutline
                      color="red"
                      size={25}
                      onClick={() => handelete(item.id)}
                    />
                  </span>
                </OverlayTrigger>
              </td>
              <td style={{ textAlign: "center" }}>
                <OverlayTrigger
                  placement={"top"}
                  overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}
                >
                  <span style={{ cursor: "pointer" }}>
                    <LuEdit
                      color="red"
                      size={25}
                      onClick={(e) => handleEdit(item.id, e)}
                    />
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DisplayTodo;
