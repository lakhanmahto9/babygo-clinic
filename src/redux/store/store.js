import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "../slice/darkModeSlice";
import authReducer from "../slice/authSlice";
import multipleClinicInfoSlice from "../slice/addMultipleAddressSlice";
import getBookApointmentSlice from "../slice/getBookApointmentSlice";
import uploadCertificateSlice from "../slice/addAndUpdateCertificateSlice";
import multipleBankSlice from "../slice/addBankDetailSlice";
import multipleUpiSlice from "../slice/addUpiDetailSlice";
import clinicWithdrawByUPISlice from "../slice/clinicWithdrawSlice";
import clinicWithdrawByBankSlice from "../slice/clinicWithdrawBankSlice";
import addDoctorSlice from "../slice/doctorSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedDarkModeReducer = persistReducer(persistConfig, darkModeReducer);
const persistAuth = persistReducer(
  { ...persistConfig, key: "auth" },
  authReducer
);
const persistClinicInfo = persistReducer(
  { ...persistConfig, key: "clinicinfo" },
  multipleClinicInfoSlice
);
const persistBookApointment = persistReducer(
  { ...persistConfig, key: "apointment" },
  getBookApointmentSlice
);
const persistCertificate = persistReducer(
  { ...persistConfig, key: "certificate" },
  uploadCertificateSlice
);
const persistBankDetails = persistReducer(
  { ...persistConfig, key: "bank" },
  multipleBankSlice
);
const persistUpiDetails = persistReducer(
  { ...persistConfig, key: "upi" },
  multipleUpiSlice
);
const persistUpiWithdraw = persistReducer(
  { ...persistConfig, key: "clinicUpiwithdraw" },
  clinicWithdrawByUPISlice
);
const persistBankWithdraw = persistReducer(
  { ...persistConfig, key: "clinicWithdrawbank" },
  clinicWithdrawByBankSlice
);
const persistAddDoctor = persistReducer(
  { ...persistConfig, key: "doctor" },
  addDoctorSlice
);
const store = configureStore({
  reducer: {
    darkmode: persistedDarkModeReducer,
    auth: persistAuth,
    clinicinfo: persistClinicInfo,
    apointment: persistBookApointment,
    certificate: persistCertificate,
    bank: persistBankDetails,
    upi: persistUpiDetails,
    clinicUpiwithdraw:persistUpiWithdraw,
    clinicWithdrawbank:persistBankWithdraw,
    doctor:persistAddDoctor,
  },
});

const persistor = persistStore(store);

export { store, persistor };
