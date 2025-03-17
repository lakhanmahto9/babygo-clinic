import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clinicWithdrawApi, fetchBankWithdrawApi } from "../apis/api";

export const ClinicWithdrawBankAmount = createAsyncThunk(
  "clinicWithdrawbank/withdrawbank",
  async (payload, thunkAPI) => {
    try {
      const data = await clinicWithdrawApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Withdraw failed" }
      );
    }
  }
);

export const ClinicFetchBankAmount = createAsyncThunk(
  "clinicWithdrawbank/fetch",
  async (payload, thunkAPI) => {
    try {
      const data = await fetchBankWithdrawApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Withdraw failed" }
      );
    }
  }
);

const clinicWithdrawByBankSlice = createSlice({
  name: "clinicWithdrawbank",
  initialState: {
    bank: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ClinicWithdrawBankAmount.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(ClinicWithdrawBankAmount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bank.push(action.payload.data.data);
      })
      .addCase(ClinicWithdrawBankAmount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // fetch
      .addCase(ClinicFetchBankAmount.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(ClinicFetchBankAmount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bank = action.payload.data.data;
      })
      .addCase(ClinicFetchBankAmount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default clinicWithdrawByBankSlice.reducer;
