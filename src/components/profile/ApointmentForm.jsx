import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddClinicInfo } from "../../redux/slice/addMultipleAddressSlice";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useThemeColors } from "../../utils/useThemeColor";
import { LocationIcon } from "../../assets/icons/Icons";

const ApointmentForm = ({ closeAddressForm }) => {
  const dispatch = useDispatch();
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);
  const [inputValue, setInputValue] = useState({
    email: "",
    clinicReg: "",
    phone: "",
    clinicName: "",
    zipCode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
  });
  const [spin, setSpin] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const hadleSubmitForm = async (e) => {
    e.preventDefault();
    setSpin(true);
    try {
      const result = await dispatch(AddClinicInfo(inputValue));
      console.log(result.payload);
      if (result?.payload?.data?.success) {
        setSpin(false);
        toast.success(result.payload.data.message);
        closeAddressForm();
      } else {
        setSpin(false);
        toast.warning(result.payload.message);
      }
    } catch (error) {
      setSpin(false);
      console.log(error);
    }
  };
  return (
    <div
      className={`w-full h-auto p-4 border ${
        isDarkEnabled ? "border-gray-600" : ""
      }`}
    >
      <p className="font-semibold text-sm">ADD NEW CLINIC</p>
      <form
        onSubmit={hadleSubmitForm}
        className="w-full lg:w-2/3 flex flex-col gap-2"
      >
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="clinic" className="text-slate-400 text-sm">
              Clinic Name*
            </label>
            <input
              id="clinic"
              type="text"
              name="clinicName"
              value={inputValue.clinicName}
              onChange={handleInputChange}
              placeholder="Enter your clinic name"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="phone" className="text-slate-400 text-sm">
              Phone Number*
            </label>
            <input
              id="phone"
              name="phone"
              value={inputValue.phone}
              onChange={handleInputChange}
              type="text"
              placeholder="10 digit phone number"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="clinic" className="text-slate-400 text-sm">
              Email <small>(Optional)</small>
            </label>
            <input
              id="clinic"
              type="email"
              name="email"
              value={inputValue.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="reg" className="text-slate-400 text-sm">
              Clinic Registration Link <small>(Optional)</small>
            </label>
            <input
              id="reg"
              type="text"
              name="clinicReg"
              value={inputValue.clinicReg}
              onChange={handleInputChange}
              placeholder="Enter link"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="pin" className="text-slate-400 text-sm">
              PIN Code*
            </label>
            <input
              id="pin"
              name="zipCode"
              value={inputValue.zipCode}
              onChange={handleInputChange}
              type="text"
              placeholder="PIN Code"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="locality" className="text-slate-400 text-sm">
              Locality*
            </label>
            <input
              id="locality"
              name="locality"
              value={inputValue.locality}
              onChange={handleInputChange}
              type="text"
              placeholder="Locality"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="address" className="text-slate-400 text-sm">
            Address (Area and Street)*
          </label>
          <textarea
            name="address"
            value={inputValue.address}
            onChange={handleInputChange}
            id="address"
            className={`w-full outline-none  rounded-md p-4 ${
              isDarkEnabled
                ? "border border-gray-600"
                : "border-2 border-slate-400"
            }`}
            style={{ background: colors.background }}
            required
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="dist" className="text-slate-400 text-sm">
              City/District/Town*
            </label>
            <input
              id="dist"
              name="city"
              value={inputValue.city}
              onChange={handleInputChange}
              type="text"
              placeholder="City/District/Town"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <label htmlFor="state" className="text-slate-400 text-sm">
              State*
            </label>
            <input
              id="state"
              name="state"
              value={inputValue.state}
              onChange={handleInputChange}
              type="text"
              placeholder="State Name"
              className={`outline-none h-12 w-full rounded-md px-2  ${
                isDarkEnabled
                  ? "border border-gray-600"
                  : "border-2 border-slate-400"
              }`}
              style={{ background: colors.background }}
              required
            />
          </div>
        </div>
        <div className="w-1/2 rounded-md h-12 bg-blue-500 flex justify-center items-center gap-2">
          <LocationIcon color="white" width="18" hieght="18" />{" "}
          <p className="text-white"> Use current location</p>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="px-8 rounded-md py-2 bg-[#006afe] text-white"
          >
            {spin ? <CircularProgress color="white" size={18} /> : "SUBMIT"}
          </button>
          <button className="px-4 text-[#006afe]" onClick={closeAddressForm}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApointmentForm;
