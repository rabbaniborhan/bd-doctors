import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-[410px] rounded-md h-[480px]  mx-auto mt-28 shadow-md border p-8">
      <h4 className="text-xl font-bold text-center mb-4">Register</h4>
      <p className="text-center text-gray-600 mb-6">
        Please fill in the form to create an account.
      </p>
      <form>
        <div className="form-group mb-4">
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Enter your full name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-light"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-light"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-light"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md bg-primary-light hover:bg-primary-deep transition duration-200"
        >
          Register
        </button>
        <p className=" mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600 hover:underline" to={"/Login"}>
            {" "}
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
