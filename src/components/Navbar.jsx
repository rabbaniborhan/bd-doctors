import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import { assets } from "../assets/assets_frontend/assets";
import Button from "./Button";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 pt px-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1536px] mx-auto relative">
        {/* large device menu */}
        <div className="hidden lg:flex justify-between pb-1 items-center px-4">
          <NavLink to="/">
            <img className="w-[70px] h-[60px] ms-4" src={assets.logo} alt="" />
          </NavLink>
          <ul className="flex items-center text-lg gap-10 font-semibold text-primary-light hover:text-primary-deep justify-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                  }`
                }
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="relative cursor-pointer">
            <span
              onClick={() => setProfileMenu(!profileMenu)}
              className="flex items-center gap-1"
            >
              <img
                className="w-[44px] border-2 border-primary-deep h-[44px] rounded-full"
                src={assets.profile_pic}
                alt=""
              />
              {profileMenu ? (
                <FaChevronUp color="#0f9ab1" size={"18px"} />
              ) : (
                <FaAngleDown color="#0f9ab1" size={"18px"} />
              )}
            </span>
            {profileMenu && (
              <div className="w-48 rounded transition-all duration-500 ease-in-out h-60 bg-primary-light absolute right-0">
                <ul className="flex-col text-right mt-8 mx-4 items-center gap-10 font-semibold text-primary-light hover:text-primary-deep justify-center">
                  <li onClick={() => setProfileMenu(!profileMenu)}>
                    <NavLink to="/my-profile" className={"text-white mt-1"}>
                      My Profile
                    </NavLink>
                  </li>
                  <li
                    onClick={() => setProfileMenu(!profileMenu)}
                    className="mt-3"
                  >
                    <NavLink to="/my-appointments" className={"text-white"}>
                      My Appointment
                    </NavLink>
                  </li>
                  <li className="-mr-1 mt-4">
                    <button className="bg-white px-3 py-[5px] text-primary-light rounded">
                      LogOut
                    </button>
                  </li>
                  <li className="-mr-1 border-b-2 border-white mt-6">
                    <hr className="w-full text-white mx-auto" />
                  </li>
                </ul>
              </div>
            )}
            {/* <NavLink to={"/login"}>
            <Button name="Login"></Button>
          </NavLink> */}
          </div>
        </div>
        {/* mobile menu */}
        <div className="flex lg:hidden items-center justify-between px-4 pt-2">
          <NavLink to="/">
            <img className="w-[70px] h-[60px] ms-4" src={assets.logo} alt="" />
          </NavLink>
          <span
            className={`${
              menuOpen ? "opacity-0" : "opacity-100"
            } transition-all duration-700 ease-in-out`}
          >
            <IoMdMenu
              size={"24px"}
              color="#0f9ab1"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </span>
        </div>
        <div
          className={`absolute top-0 right-0 h-screen bg-gray-300 opacity-50 overflow-hidden ${
            menuOpen ? "w-[75%]" : "w-0"
          } transition-all duration-500 ease-in-out`}
        >
          <span className="w-8 h-8 transition-all duration-500 ease-in-out opacity-100 text-[#0f9ab1] rounded flex items-center justify-center">
            <IoClose size={"24px"} onClick={() => setMenuOpen(!menuOpen)} />
          </span>
          <div>
            <ul className="flex-col text-right mt-4 me-4 items-center text-lg gap-10 font-semibold text-primary-light hover:text-primary-deep justify-center">
              <li onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                    }`
                  }
                >
                  Doctors
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(!menuOpen)}>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-[3px] border-primary-deep" : "navbar"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="-mr-1">
                <NavLink to={"/login"}>
                  <Button name="Login"></Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
