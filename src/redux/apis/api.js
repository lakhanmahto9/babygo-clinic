import { BASE_URL } from "../../../baseUrl";
import axios from "axios";

export const clinicRegister = (payload) => {
  return axios.post(`${BASE_URL}/clinic/clinic-register`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const clinicLogin = (payload) => {
  return axios.post(`${BASE_URL}/clinic/clinic-login`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const getClinicApi = () => {
  return axios.get(`${BASE_URL}/clinic/fetch-clinic-data`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const updateProfileInformationApi = (payload) => {
  return axios.post(`${BASE_URL}/clinic/clinic-prodile-update`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const addClinicInfoApi = (payload) => {
  return axios.post(`${BASE_URL}/clinic/add-clinic-info`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const getDoctorMultipleAddressApi = () => {
  return axios.get(`${BASE_URL}/doctor/get-doctor-apointment-address`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const editDoctorMultipleAddressApi = (payload) => {
  return axios.post(
    `${BASE_URL}/doctor/edit-doctor-apointment-address/${payload.id}`,
    payload.item,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getBookApointmentApi = () => {
  return axios.get(`${BASE_URL}/doctor/get-book-apointment`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const changeStatusApointmentApi = (payload) => {
  return axios.post(
    `${BASE_URL}/doctor/change-apointment-status/${payload.id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addAndUpdateCertificateApi = (payload) => {
  return axios.post(`${BASE_URL}/doctor/degree-certificate`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const fetchCertificateApi = () => {
  return axios.get(`${BASE_URL}/doctor/fetch-doctor-degree`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const addBankDetailsApi = (payload) => {
  return axios.post(`${BASE_URL}/doctor/add-bank-details`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const editBankDetailsApi = (payload) => {
  console.log(payload);
  return axios.post(
    `${BASE_URL}/doctor/edit-bank-details/${payload.id}`,
    payload.value,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const fetchBankDetailsApi = () => {
  return axios.get(`${BASE_URL}/doctor/fetch-bank-details`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const addUpiDetailsApi = (payload) => {
  return axios.post(`${BASE_URL}/doctor/add-upi-details`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const editUpiDetailsApi = (payload) => {
  console.log(payload);
  return axios.post(
    `${BASE_URL}/doctor/edit-upi-details/${payload.id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const fetchUpiDetailsApi = () => {
  return axios.get(`${BASE_URL}/doctor/fetch-upi-details`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const deleteBankApi = (id) => {
  return axios.delete(`${BASE_URL}/doctor/delete-bank/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const deleteUpiApi = (id) => {
  return axios.delete(`${BASE_URL}/doctor/delete-upi/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const clinicWithdrawApi = (payload) => {
  console.log(payload)
  return axios.post(`${BASE_URL}/clinic/clinic-withdraw/${payload.id}`,payload.value, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const fetchUPiWithdrawApi = () => {
  return axios.get(`${BASE_URL}/doctor/fetch-upi-withdraw-history`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const fetchBankWithdrawApi = () => {
  return axios.get(`${BASE_URL}/doctor/fetch-bank-withdraw-history`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};


