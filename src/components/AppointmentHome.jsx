import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const AppointmentHome = () => {
  return (
    <div className="flex mx-8 rounded-md items-center justify-between px-10 my-10 bg-primary-light h-80">
      <div className="w-1/2 ">
        <p className="text-white text-5xl font-bold">
          Book Appointment <br /> 100+ trusted Doctors
        </p>
        <button className=" px-6 py-2 bg-white rounded-3xl text-primary-light hover:text-primary-deep mt-12 font-medium ms-8 hover:bg-gray-300 duration-200 transition-all ">
          <Link to={"/register"}>Create Account </Link>
        </button>
      </div>
      <div className="w-1/2 ">
        <img
          src={assets.appointment_img}
          className="h-[341px] ms-16 -mt-[20px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default AppointmentHome;
