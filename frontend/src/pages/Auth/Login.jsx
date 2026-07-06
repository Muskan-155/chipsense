import { Link } from "react-router-dom";
import ChipSenseLogo from "../../assets/logo/ChipSenseLogo";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center px-16">

        {/* Background Blur Circles */}
        <div className="absolute top-10 left-10 w-52 h-52 bg-purple-300 rounded-full blur-3xl opacity-20"></div>

        <div className="absolute bottom-16 right-16 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10">

          {/* Temporary Tree */}
          <div className="text-9xl mb-8 animate-bounce">
            🌳
          </div>

          <h1 className="text-6xl font-extrabold text-purple-700 leading-tight">
            Hello, Tun-Tun! 🍃
          </h1>

          <p className="mt-6 text-2xl text-gray-700">
            Welcome back to
            <span className="font-bold text-purple-700">
              {" "}ChipSense
            </span>
          </p>

          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-8">
            AI-powered Datasheet Intelligence Platform.
            <br />
            Understand components faster,
            compare smarter,
            and build better electronics.
          </p>

          <div className="flex gap-3 text-3xl mt-10">
            🍃 🌿 🍀
          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">

        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white">

          <div className="flex justify-center mb-8">
            <ChipSenseLogo />
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to continue exploring ChipSense.
          </p>

          {/* Email */}

          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 mb-5 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password */}

          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex justify-end mt-3">

            <button className="text-purple-700 text-sm hover:underline">
              Forgot Password?
            </button>

          </div>

          <button className="w-full mt-8 bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-purple-300">

            Login

          </button>

          <p className="text-center text-gray-500 mt-8">

            Don't have an account?

            <Link
              to="/register"
              className="text-purple-700 font-semibold hover:underline"
            >
              {" "}
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;