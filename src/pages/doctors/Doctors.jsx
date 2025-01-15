import { useContext, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const Doctors = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { specialityData, doctors } = useContext(AppContext);

  const filterDataFunc = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) => doctor?.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    filterDataFunc();
  }, [speciality, doctors]);

  return (
    <div className="mt-20 px-4">
      <p className="text-center text-xl font-semibold">
        Browse through the <span className="text-primary-light">DOCTORS</span>{" "}
        specialist.
      </p>
      <div className="flex gap-4 mt-16">
        <div className="w-1/5 ">
          {specialityData?.map((item, index) => (
            <p
              onClick={() => navigate(`/doctors/${item?.speciality}`)}
              key={index}
              className="py-2 px-3 cursor-pointer rounded border mb-6 hover:bg-primary-light hover:text-white transition-all duration-300"
            >
              {item.speciality}
            </p>
          ))}
        </div>
        <div className="w-4/5">
          <div className="grid grid-cols-4 gap-6 px-6   transition-all duration-500 items-center justify-between">
            {filterDoc?.map((doctor, index) => (
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
                  <h3 className="text-xl font-semibold py-1">
                    {" "}
                    {doctor?.name}
                  </h3>
                  <p className="text-sm text-gray-500">{doctor?.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
