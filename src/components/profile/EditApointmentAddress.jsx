import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useThemeColors } from "../../utils/useThemeColor";
import { LocationIcon } from "../../assets/icons/Icons";
import ConfirmModal from "./confirm/ConfirmModal";

const EditApointmentAddress = ({ id, editaddress, closeEditAddressForm }) => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState({
    email: editaddress.email || "",
    clinicReg: editaddress.clinicReg || "",
    phone: editaddress.phone || "",
    clinicName: editaddress.clinicName || "",
    zipCode: editaddress.zipCode || "",
    locality: editaddress.locality || "",
    address: editaddress.address || "",
    city: editaddress.city || "",
    state: editaddress.state || "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hadleSubmitForm = async (e) => {
    e.preventDefault();
    let updatedData = {
      id: id,
      item: inputValue,
    };
    setData(updatedData)
    setOpen(true);
    
  };
  const handleClose = ()=>{
    setOpen(false);
    closeEditAddressForm();
  }
  return (
    <div
      className={`w-full h-auto sm:p-4  ${isDarkEnabled ? "" : "sm:border"}`}
    >
      <p className="font-semibold text-sm">EDIT ADDRESS</p>
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
        <div className="w-full sm:w-1/2 rounded-md h-12 bg-blue-500 flex justify-center items-center gap-2">
          <LocationIcon color="white" width="18" hieght="18" />{" "}
          <p className="text-white"> Use current location</p>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="px-8 rounded-md py-2 bg-[#006afe] text-white"
          >
            SUBMIT
          </button>
          <button
            className="px-4 text-[#006afe]"
            onClick={closeEditAddressForm}
          >
            CANCEL
          </button>
        </div>
      </form>
      <ConfirmModal
        open={open}
        data={data}
        handleClose={handleClose}
      />
    </div>
  );
};

export default EditApointmentAddress;
