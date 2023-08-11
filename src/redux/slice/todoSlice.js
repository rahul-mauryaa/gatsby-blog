import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const insertapi = createAsyncThunk("insertapi", async (data) => {
  try {
    const response = await fetch(
      "https://64d47344b592423e469421af.mockapi.io/api/todo",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to insert data");
    }
    const result = response.json();
    return result;
  } catch (error) {
    throw new Error("Failed to insert data");
  }
});
export const fetchdata = createAsyncThunk("fetchdata", async () => {
  const response = await fetch(
    "https://64d47344b592423e469421af.mockapi.io/api/todo"
  );
  const result = await response.json();

  return result;
});

export const fetchdatabyid = createAsyncThunk("fetchdatabyid", async (id) => {
  const response = await fetch(
    `https://64d47344b592423e469421af.mockapi.io/api/todo/${id}`
  );
  const result = await response.json();
  // console.log("result==>", result);
  return result;
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  try {
    const response = await fetch(
      `https://64d47344b592423e469421af.mockapi.io/api/todo/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
    return id;
  } catch (error) {
    throw new Error("Failed to delete data");
  }
});
export const editData = createAsyncThunk("editData", async ({ values, id }) => {
  try {
    const response = await fetch(
      `https://64d47344b592423e469421af.mockapi.io/api/todo/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Failed to edit data");
  }
});
const initialState = {
  data: [],
  ediData: {},
  isFetching: false,
  isInserting: false,
  isDeleting: false,
  isEditing: false,
  isError: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: (state) => {
      state.ediData = {};
      return state;
    },
  },
  extraReducers: {
    //---------Insert code->
    [insertapi.pending]: (state) => {
      state.isInserting = true;
    },
    [insertapi.fulfilled]: (state) => {
      state.isInserting = false;
    },
    [insertapi.rejected]: (state, action) => {
      state.isInserting = false;

      state.isError = true;
    },
    // ****************
    // ----Fetch start->
    [fetchdata.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchdata.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    [fetchdata.rejected]: (state) => {
      state.isFetching = false;
    },
    // ****************

    // ****************
    // ----Fetchbyid start->
    [fetchdatabyid.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchdatabyid.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.ediData = action.payload;
    },
    [fetchdatabyid.rejected]: (state) => {
      state.isFetching = false;
    },
    // ****************

    // ----Delete start->
    [deleteData.pending]: (state) => {
      state.isDeleting = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.isDeleting = false;
      const deletedId = action.payload;
      delete state.data[deletedId];
      // console.log("Data deleted with ID:", deletedId);
    },
    [deleteData.rejected]: (state, action) => {
      state.isDeleting = false;
      state.isError = true;
    },
    // ****************
    // ----Edit start->
    [editData.pending]: (state) => {
      state.isEditing = true;
    },
    [editData.fulfilled]: (state, action) => {
      state.isEditing = false;
      const editData = action.payload;
      state.data = {
        ...state.data,
        [editData.id]: editData,
      };
      // console.log("Data edit with ID:", editData);
    },
    [editData.rejected]: (state, action) => {
      state.isEditing = false;
      // console.log("Erorr", action.payload);
      state.isError = true;
    },
    // **************
  },
});
export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
