import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Appointment from "./pages/appointment/Appointment";
import Contact from "./pages/contact/Contact";
import Doctors from "./pages/doctors/Doctors";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MyAppointments from "./pages/myAppointments/MyAppointments";
import MyProfile from "./pages/myProfile/MyProfile";
import Register from "./pages/register/Register";

export const App = () => {
  return (
    <div className="max-w-screen-2xl  2xl:mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="doctors/:speciality" element={<Doctors />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
      <Footer />
    </div>
  );
};
