import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useThemeColors } from "../../utils/useThemeColor";
import { AddIcon } from "../../assets/icons/Icons";
import AddDoctorForm from "./AddDoctorForm";

const Doctor = () => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const dispatch = useDispatch();
  const [openForm, setOpenform] = useState(false);
  const closeForm = () => {
    setOpenform(false);
  };

  return (
    <Profile>
      <div
        className={`w-full rounded-md border ${
          isDarkEnabled ? "border-gray-600" : ""
        }`}
        style={{ background: colors.background }}
      >
        <div className="p-4">
          <p className="text-sm font-semibold"> Manage Doctor Information</p>
        </div>
        {/* <hr /> */}
        <div
          className={`border ${isDarkEnabled ? "border-gray-600" : ""}`}
        ></div>
        <div className="p-4 w-full">
          {!openForm ? (
            <div
              onClick={() => setOpenform(true)}
              className={`w-full border flex justify-start items-center p-4 gap-4 cursor-pointer ${
                isDarkEnabled ? "border-gray-600" : ""
              }`}
            >
              <AddIcon color="#2892FC" width="20" height="20" />
              <p className="text-[#2892FC]">ADD NEW DOCTOR</p>
            </div>
          ) : (
            <AddDoctorForm closeDoctorForm={closeForm} />
          )}
        </div>
      </div>
    </Profile>
  );
};

export default Doctor;
