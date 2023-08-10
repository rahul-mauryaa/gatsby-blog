import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertapi, fetchdata, reset } from "../redux/slice/todoSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const Todo = () => {
  const dispatch = useDispatch();
  const editdata = useSelector((state) => state.todos.ediData);
  console.log(editdata, "editData");
  const initialValues = {
    title: "",
    description: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await dispatch(insertapi(values));
      if (res.type === "insertapi/fulfilled") {
        await dispatch(fetchdata());
      }
      formik.resetForm();
    },
  });

  const handlecancle = (e) => {
    e.preventDefault();
    formik.resetForm(initialValues);
    dispatch(reset());
  };

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
        <h4>Add Todo</h4>
        {editdata?.title ? (
          <label htmlFor="title">Edit Title</label>
        ) : (
          <label htmlFor="title">Title</label>
        )}
        <br />
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title || editdata?.title}
          style={{ padding: 15 }}
        />

        {formik.touched.title && formik.errors.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
        {editdata?.description ? (
          <label htmlFor="title">Edit Description</label>
        ) : (
          <label htmlFor="title">Description</label>
        )}
        <br />
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description || editdata?.description}
          style={{ padding: 15, width: "270px" }}
        />
        <br />
        {formik.touched.description && formik.errors.description && (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        )}

        {editdata?.description ? (
          <>
            <button type="submit">update</button>&nbsp;
            <button onClick={(e) => handlecancle(e)}>cancel</button>
          </>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default Todo;
