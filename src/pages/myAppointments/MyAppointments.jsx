import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="mt-28 mx-auto w-4/5">
      {" "}
      <p className="text-2xl front-bold mb-10">My Appintments</p>
      <div>
        {doctors.slice(0, 3).map((doc) => (
          <div
            key={doc._id}
            className="flex items-center   border mb-8 justify-between rounded-md"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary-light h-48">
                <img className=" h-48" src={doc.image} alt="" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">{doc.name}</h4>
                <p className="text-gray-500">{doc.speciality}</p>
                <p className="text-lg font-medium mt-2">Address:</p>
                <address>
                  {doc?.address.line1} <br />
                  {doc?.address.line2}
                </address>
                <p className="mt-3">
                  <span className="font-medium">Date and Time:</span> 25, July,
                  2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className=" flex gap-3 flex-col mr-4 mt-6">
              <button className=" bg-primary-light text-white hover:bg-primary-deep transition-colors duration-300 px-8 py-2 rounded">
                Pay Here
              </button>
              <button className=" border hover:bg-gray-300 transition-colors duration-300 px-8 py-2 rounded">
                cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
