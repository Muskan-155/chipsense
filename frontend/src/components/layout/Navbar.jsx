import { FaBell, FaSearch, FaLeaf } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center">

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 w-[420px]">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search datasheets..."
          className="bg-transparent outline-none ml-3 w-full"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-green-200 transition">
          <FaLeaf />
          Nature Mode
        </button>

        <button className="text-2xl hover:text-purple-700 transition">
          <FaBell />
        </button>

        <div className="flex items-center gap-3 bg-purple-100 px-4 py-2 rounded-xl">

          <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
            T
          </div>

          <div>
            <h2 className="font-semibold">
              Tun-Tun
            </h2>

            <p className="text-xs text-gray-500">
              AI Explorer
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;