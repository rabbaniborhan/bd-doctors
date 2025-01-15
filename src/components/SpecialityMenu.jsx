import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const SpecialityMenu = () => {
  const { specialityData } = useContext(AppContext);
  return (
    <div className="flex items-center mt-20 justify-center">
      <div>
        <h1 className="text-center text-[28px] font-bold font-sans">
          Filter by Specialization
        </h1>
        <p className="text-center text-[12px] mt-2 font-sans  font-medium ">
          Search through our network of trusted doctors and arrange your
          <br />
          consultation easily.
        </p>
        <div className="my-10 flex items-center justify-center gap-10">
          {specialityData?.map((speciality, index) => (
            <div
              key={index}
              className="flex-col cursor-pointer hover:-mt-4 transition-all duration-500  items-center justify-center"
            >
              <Link to={`/doctors/${speciality?.speciality}`}>
                <img
                  className="w-[80px] h-[80px]"
                  src={speciality?.image}
                  alt=""
                />
                <p className=" mt-2 text-sm  ">{speciality?.speciality}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
