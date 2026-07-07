import {
  FaHome,
  FaFilePdf,
  FaRobot,
  FaBalanceScale,
  FaClipboardList,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    { icon: <FaHome />, text: "Dashboard" },
    { icon: <FaFilePdf />, text: "Datasheets" },
    { icon: <FaRobot />, text: "Ask AI" },
    { icon: <FaBalanceScale />, text: "Compare" },
    { icon: <FaClipboardList />, text: "BOM Builder" },
    { icon: <FaStar />, text: "Favorites" },
    { icon: <FaCog />, text: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 w-80 h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white flex flex-col justify-between shadow-2xl">

      {/* Logo */}
      <div>

        <div className="text-center py-10">

          <div className="text-6xl animate-pulse">
            🌳
          </div>

          <h1 className="text-5xl font-extrabold mt-4">
            ChipSense
          </h1>

          <p className="text-green-200 mt-3 text-base leading-7">
            Grow Smarter.
            <br />
            Build Faster.
          </p>

        </div>

        {/* Menu */}

        <nav className="px-4 space-y-3">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300
              ${
                index === 0
                  ? "bg-white text-purple-700 shadow-xl scale-105"
                  : "hover:bg-white/10 hover:translate-x-2 hover:shadow-lg"
              }`}
            >
              <span className="text-2xl">
                {item.icon}
              </span>

              <span className="text-lg font-semibold">
                {item.text}
              </span>

            </div>
          ))}

        </nav>

      </div>

      {/* Profile */}

      <div className="p-5 border-t border-purple-400">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <h2 className="text-2xl font-bold">
            Tun-Tun 🍃
          </h2>

          <p className="text-green-200 mt-1">
            AI Explorer
          </p>

          <button className="mt-5 flex items-center gap-3 hover:text-red-300 transition text-lg">

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;