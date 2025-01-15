import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className=" my-20">
      <div>
        <h1 className="text-center text-[28px] font-bold font-sans">
          Top Doctors to Book
        </h1>
        <p className="text-center text-[12px] mt-2 font-sans  font-medium ">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className="grid grid-cols-5 gap-8 px-6 mt-10   transition-all duration-500 items-center justify-between">
          {doctors?.map((doctor, index) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index}
              className=" group h-[330px] w-[220px] cursor-pointer  bg-white shadow-md rounded-lg hover:shadow-lg"
            >
              <div className="bg-secondary-light overflow-hidden w-full h-4/6">
                <img
                  src={doctor?.image}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className=" p-3">
                <p className="text-green-500 flex items-center gap-1 text-left">
                  <GoDotFill /> Available
                </p>
                <h3 className="text-xl font-semibold py-1"> {doctor?.name}</h3>
                <p className="text-sm text-gray-500">{doctor?.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-12 flex items-center justify-center">
          <Link to={"/doctors"}>
            <button className="bg-primary-light hover:bg-primary-deep px-6 py-[6px] rounded-md text-white">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
