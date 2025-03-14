import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addClinicInfoApi,
  editClinicInfoApi,
  getMultipleClinicInfo,
} from "../apis/api";

export const AddClinicInfo = createAsyncThunk(
  "apointmentaddress/addclincinfo",
  async (payload, thunkAPI) => {
    try {
      const data = await addClinicInfoApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Address added failed" }
      );
    }
  }
);

export const GetClinicInfo = createAsyncThunk(
  "apointmentaddress/getapointmentaddress",
  async (_, thunkAPI) => {
    try {
      const data = await getMultipleClinicInfo();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Address fetch failed" }
      );
    }
  }
);

export const EditClinicInfo = createAsyncThunk(
  "apointmentaddress/editapointmentaddress",
  async (payload, thunkAPI) => {
    try {
      const data = await editClinicInfoApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Clinic update failed" }
      );
    }
  }
);
const multipleAddressSlice = createSlice({
  name: "apointmentaddress",
  initialState: {
    address: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch
      .addCase(GetClinicInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetClinicInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.data.data);
        state.address = action.payload.data.data;
      })
      .addCase(GetClinicInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // add address
      .addCase(AddClinicInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddClinicInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.address.push(action.payload.data.data);
      })
      .addCase(AddClinicInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      //update
      .addCase(EditClinicInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(EditClinicInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.address.findIndex(
          (item) => item._id === action.payload.data.data._id
        );

        if (index !== -1) {
          state.address[index] = action.payload.data.data;
        }
      })
      .addCase(EditClinicInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default multipleAddressSlice.reducer;
