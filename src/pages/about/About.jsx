import { assets } from "./../../assets/assets_frontend/assets";
const About = () => {
  return (
    <div className="mt-16">
      <p className="text-center my-24  text-gray-600 text-lg font-medium">
        ABOUT <span className="font-bold text-black">US</span>{" "}
      </p>

      <div className="flex px-20 py-10 gap-16">
        <div className=" h-[550px]">
          <img src={assets.about_image} className=" h-full" alt="" />
        </div>

        <div className="w-1/2 ">
          <p className="leading-8 tracking-widest">
            Welcome To BD Doctor Your Trusted Partner in Managing Your
            HealthCare Needs Converiently And Efficiently At BD Doctor We
            Understand The Challenges Individuals Face When It Comes To
            Scheduling Doctor Appointment And Managing Their Health Records
          </p>
          <p className="leading-8 mt-8 tracking-widest">
            BD Doctor is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you are booking your first appointment or managing
            ongoing care, BD Doctor is here to support you every step of the wa
          </p>
          <h5 className="mt-10 font-semibold text-lg">Our Vision</h5>
          <p className="leading-8 mt-8 tracking-widest">
            Our vision at BD Doctor is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div>
        <div className=" my-10 w-11/12 mx-auto ">
          <p className=" mt-20 mb-14 text-lg font-medium ms-4">WHY CHOOSE US</p>
          <div className="border-2 flex ">
            <div className="w-1/3 p-12">
              <p className="text-lg font-medium mb-4">Efficiency:</p>
              <p className="leading-7">
                Streamlined appointment scheduling <br /> That fits into your
                busy lifestyle.
              </p>
            </div>
            <div className="w-1/3 border-l-2 p-12">
              <p className="text-lg font-medium mb-4">Convenience:</p>
              <p className="leading-7">
                Access to a network of trusted <br /> Healthcare professionals
                in your area.
              </p>
            </div>
            <div className="w-1/3 p-12 border-l-2">
              <p className="text-lg font-medium mb-4">Personalization:</p>
              <p className="leading-7">
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
