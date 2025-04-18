import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { specialityData } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/lists`);
      console.log(data);
      if (data?.success) {
        setDoctors(data?.doctors);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getDoctorsData();
  }, []);

  const value = {
    doctors,
    specialityData,
    getDoctorsData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
