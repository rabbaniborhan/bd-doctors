import { assets } from "./../../assets/assets_frontend/assets";
const Contact = () => {
  return (
    <div className="mt-16 px-10">
      <p className="text-center text-gray-600 my-20 text-lg font-medium">
        CONTACT <span className="font-bold text-black">US</span>{" "}
      </p>

      <div className="flex items-center justify-center gap-10">
        <div className="w-1/2">
          <img
            className="w-full rounded-md"
            src={assets.contact_image}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-lg  font-semibold mb-8">Our OFFICE</h4>
          <address className="mb-8 text-gray-600">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </address>
          <p className="mb-10 text-gray-600">
            Tel: (415) 555‑0132 <br /> Email: greatstackdev@gmail.com
          </p>
          <h4 className="text-lg  font-semibold mb-4">Careers at PRESCRIPTO</h4>
          <p className="text-gray-600 mb-5">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-gray-900 px-4 py-3">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
