import AppointmentHome from "../../components/AppointmentHome";
import Header from "../../components/Header";
import SpecialityMenu from "../../components/SpecialityMenu";
import TopDoctors from "../../components/TopDoctors";

const Home = () => {
  return (
    <div className="mt-16">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <AppointmentHome />
    </div>
  );
};

export default Home;
