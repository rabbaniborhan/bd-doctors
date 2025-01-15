import { MdArrowRightAlt } from "react-icons/md";
import { assets } from "./../assets/assets_frontend/assets";
const Header = () => {
  return (
    <div className="bg-primary-deep flex  px-4 pt-4 ">
      <div className="w-1/2 ps-4">
        <h1 className="text-[44px] mt-16 font-serif text-white font-bold">
          Plan your visit with <br />
          trusted and certified doctors.
        </h1>
        <span className="flex mt-6 items-center ms-2">
          <img className="w-[115px]" src={assets.group_profiles} alt="" />
          <p className=" text-white ms-4 font-serif">
            Discover top-rated medical professionals and secure your appointment
            without any hassle.
          </p>
        </span>
        <button className="flex items-center mt-8 ms-2 gap-[6px] font-serif hover:bg-gray-300 transition-all duration-500 text-primary-light hover:text-primary-deep cursor-pointer font-semibold bg-white px-4 py-2 rounded-3xl">
          Lock Booking{" "}
          <span className="mt-[5px]">
            <MdArrowRightAlt size={"24px"} />
          </span>
        </button>
      </div>
      <div className="w-1/2">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
