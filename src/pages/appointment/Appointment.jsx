import { useParams } from "react-router-dom";

const Appointment = () => {
  const { docId } = useParams();
  console.log(docId);
  return <div>Appointment</div>;
};

export default Appointment;
