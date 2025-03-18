import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clinicWithSaveDoctorApi, fetchDoctorApi } from "../apis/api";

export const AddDoctor = createAsyncThunk(
  "doctor/adddoctor",
  async (payload, thunkAPI) => {
    try {
      const data = await clinicWithSaveDoctorApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Doctor added failed" }
      );
    }
  }
);

export const GetDoctor = createAsyncThunk(
  "doctor/getdoctor",
  async (_, thunkAPI) => {
    try {
      const data = await fetchDoctorApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Address fetch failed" }
      );
    }
  }
);

const addDoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch doctor
      .addCase(GetDoctor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload.data.data);
        state.doctor = action.payload.data.data;
      })
      .addCase(GetDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // add address
      .addCase(AddDoctor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddDoctor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.doctor.push(action.payload.data.data);
      })
      .addCase(AddDoctor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default addDoctorSlice.reducer;
