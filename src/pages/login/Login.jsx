import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[400px] rounded-md h-[400-px]  mx-auto mt-28 shadow-md border p-8">
      <h4 className="text-xl font-bold text-center mb-4">Login </h4>
      <p className="text-center text-gray-600 mb-6">
        Please login to book appointment.
      </p>
      <form>
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
          Login
        </button>
        <p className=" gap-1 flex mt-4">
          <p>Don&apos;t have an account? </p>
          <Link className="text-blue-600 hover:underline" to={"/register"}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
