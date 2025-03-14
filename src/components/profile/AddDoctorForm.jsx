import React, { useState } from "react";

const AddDoctorForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMultiSelect, setIsMultiSelect] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    registrationNumber: "",
    pin: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    degree: "",
    experience: "",
    expertise: "",
    doctorInfo: "",
    selectedDays: [],
    startTime: "",
    endTime: "",
  });
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelect = (day) => {
    setFormData((prev) => {
      if (isMultiSelect) {
        return {
          ...prev,
          selectedDays: prev.selectedDays.includes(day)
            ? prev.selectedDays.filter((d) => d !== day)
            : [...prev.selectedDays, day],
        };
      } else {
        return { ...prev, selectedDays: [day] };
      }
    });
    if (!isMultiSelect) setIsOpen(false);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", formData);
  };
  return (
    <div className="w-full border p-4">
      <p className="text-sm font-semibold">ADD NEW DOCTOR</p>
      <form action="" className="my-4 w-3/4 flex flex-col gap-4">
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
          <div className="w-1/2 relative">
            <label htmlFor="name">Phone*</label>
            <input
              type="tel"
              className="h-12 pl-2 pr-12 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
            <div className="absolute bottom-0 right-0 text-xs rounded-r-md bg-blue-500 h-12 flex justify-center items-center px-2 text-white">
              Visible
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2 relative">
            <label htmlFor="name">
              Email <small>(Optional)</small>
            </label>
            <input
              type="email"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
            <div className="absolute bottom-0 right-0 text-xs rounded-r-md bg-blue-500 h-12 flex justify-center items-center px-2 text-white">
              Visible
            </div>
          </div>
          <div className="w-1/2 relative">
            <label htmlFor="name">Registration Number*</label>
            <input
              type="text"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Address Information</p>
          <div className="w-auto bg-slate-400 rounded-lg px-2 text-white cursor-pointer">
            <small>Hide</small>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2">
            <label htmlFor="pin">PIN Code*</label>
            <input
              id="pin"
              type="text"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
          <div className="w-1/2 relative">
            <label htmlFor="locality">Locality*</label>
            <input
              id="locality"
              type="text"
              className="h-12 pl-2 pr-12 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">
            Address <small>(Area/Street)*</small>
          </label>
          <textarea
            id="pin"
            type="text"
            className="p-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
          />
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2">
            <label htmlFor="city">City*</label>
            <input
              id="city"
              type="text"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
          <div className="w-1/2 relative">
            <label htmlFor="state">State*</label>
            <input
              id="state"
              type="text"
              className="h-12 pl-2 pr-12 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="degree">Degree*</label>
          <textarea
            id="degree"
            type="text"
            className="p-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
          />
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="w-1/2">
            <label htmlFor="experience">
              Experience <small>(Optional)</small>
            </label>
            <input
              id="experience"
              type="text"
              className="h-12 px-4 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
          </div>
          <div className="w-1/2 relative">
            <label htmlFor="expertise">
              Expertise <small>(Optional)</small>
            </label>
            <input
              id="expertise"
              type="tel"
              className="h-12 pl-2 pr-12 w-full border-2 rounded-md border-slate-500 outline-blue-500"
            />
            <div className="absolute bottom-0 right-0 text-xs rounded-r-md bg-blue-500 h-12 flex justify-center items-center px-2 text-white">
              Hide
            </div>
          </div>
        </div>
        <p className="font-bold">Appointment schedule</p>
        <div className="bg-blue-50 p-4 rounded-md border">
          <div>
            <label htmlFor="degree">Doctor's Information*</label>
            <textarea
              id="degree"
              type="text"
              className="p-4 w-full border rounded-md outline-blue-500"
            />
          </div>
          <div className="flex flex-row w-full gap-4">
            <div className="w-1/2">
              <label>Select Days*</label>
              <div
                className="w-full px-4 py-2 border rounded-md cursor-pointer bg-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {formData.selectedDays.length > 0
                  ? formData.selectedDays.join(", ")
                  : "Select Days"}
              </div>

              {isOpen && (
                <div className=" bg-white border rounded-md shadow-lg z-10">
                  {days.map((day) => (
                    <div
                      key={day}
                      className={`p-2 cursor-pointer hover:bg-blue-100 ${
                        formData.selectedDays.includes(day) ? "bg-blue-200" : ""
                      }`}
                      onClick={() => handleSelect(day)}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  checked={isMultiSelect}
                  onChange={() => setIsMultiSelect(!isMultiSelect)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">
                  Enable Multi-Select
                </span>
              </div>
            </div>
            <div className="w-1/2 flex gap-2">
              <div className="w-full">
                <label htmlFor="time">Start Time*</label>
                <input
                  id="time"
                  type="time"
                  className="h-10 w-full border rounded-md outline-blue-500"
                />
              </div>
              <div className="w-full">
                <label htmlFor="time">End Time*</label>
                <input
                  id="time"
                  type="time"
                  className="h-10 w-full border rounded-md outline-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctorForm;
