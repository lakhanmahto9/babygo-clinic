import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    clinicWithdrawApi,
    fetchUPiWithdrawApi,

} from "../apis/api";

export const clinicWithdrawAmount = createAsyncThunk(
    "clinicUpiwithdraw/withdraw",
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
export const ClinicFetchUpiWithdraw = createAsyncThunk(
    "clinicUpiwithdraw/fetch",
    async (_, thunkAPI) => {
        try {
            const data = await fetchUPiWithdrawApi();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || { message: "Withdraw failed" }
            );
        }
    }
);


const clinicWithdrawByUPISlice = createSlice({
    name: "clinicUpiwithdraw",
    initialState: {
        upi: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(clinicWithdrawAmount.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(clinicWithdrawAmount.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.upi.push(action.payload.data.data);
            })
            .addCase(clinicWithdrawAmount.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            //fetch
            .addCase(ClinicFetchUpiWithdraw.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(ClinicFetchUpiWithdraw.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.upi = (action.payload.data.data);
            })
            .addCase(ClinicFetchUpiWithdraw.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    },
});

export default clinicWithdrawByUPISlice.reducer;
