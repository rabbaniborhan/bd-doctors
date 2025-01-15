import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex mt-32 px-10  ">
        <div className="w-2/4 pe-4">
          <img src={assets.logo} className="w-48 h-32" alt="" />
          <p className="mt-6 pe-10 text-gray-6cd00 leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum
            vero delectus dicta molestiae perspiciatis ipsum nam sequi dolores
            accusantium sit iure eveniet eaque pariatur, deserunt lorem is more
            impotent in developer
          </p>
        </div>
        <div className="w-1/4 mt-10 ms-16">
          <ul>
            <li className="text-lg font-medium">Company</li>
            <li className="hover:underline mt-1">
              <Link onClick={() => scrollTo(0, 0)} to={"/"}>
                Home
              </Link>
            </li>
            <li className="hover:underline mt-1">
              <Link onClick={() => scrollTo(0, 0)} to={"/about"}>
                About us
              </Link>
            </li>
            <li className="hover:underline mt-1">
              <Link onClick={() => scrollTo(0, 0)} to={"/contacts"}>
                Contact us
              </Link>
            </li>
            <li className="hover:underline mt-1">
              <Link to={"/"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 mt-16">
          <ul>
            <li className="text-lg font-medium">GET IN TOUCH</li>
            <li className="hover:underline mt-1">+8801704267876</li>
            <li className="hover:underline mt-1">brborhan70@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mx-auto h-1 mt-8" />
      <div>
        <p className="text-center pt-2 pb-4">
          Copyright Dev BORHAN - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
