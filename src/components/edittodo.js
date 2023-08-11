import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData, fetchdata, reset } from "../redux/slice/todoSlice";
import { useFormik } from "formik";

const EditTodo = () => {
  const dispatch = useDispatch();
  const editdata = useSelector((state) => state.todos.ediData);

  const handlecancle = (e) => {
    e.preventDefault();
    formik.resetForm(initialValues);
    dispatch(reset());
  };

  const initialValues = {
    title: "",
    description: "",
  };

  const handleSubmit = async (values) => {
    if (!editdata) {
      return null;
    }
    const res = await dispatch(editData({ values, id: editdata.id }));
    if (res.type === "editData/fulfilled") {
      await dispatch(fetchdata());
    }

    dispatch(reset());
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setValues({
      title: editdata?.title,
      description: editdata?.description,
    });
  }, [editdata]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "300px", height: "auto" }}
      >
        <h4>Edit Todo</h4>
        <label htmlFor="title">Edit Title</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          style={{ padding: 15 }}
        />
        {formik.touched.title && formik.errors.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
        <label htmlFor="title"> Edit Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
          style={{ padding: 15, width: "270px" }}
        />
        <br />
        {formik.touched.description && formik.errors.description && (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        )}
        <button type="submit">Update</button>&nbsp;
        <button onClick={(e) => handlecancle(e)}>cancel</button>
      </form>
    </div>
  );
};

export default EditTodo;
