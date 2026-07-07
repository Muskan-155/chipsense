import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import StatCard from "../../components/Dashboard/StatCard";
import AITipCard from "../../components/Dashboard/AITipCard";

import {
  FaFilePdf,
  FaRobot,
  FaStar,
  FaFolderOpen,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F7F5FF]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-80 p-8">

        {/* Navbar */}
        <div className="p-6 pb-0">
          <Navbar />
        </div>

        {/* Dashboard Content */}
        <div className="p-8">

          {/* Welcome */}
          <div className="mb-10">

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-300 bg-clip-text text-transparent">
              Welcome Back, Tun-Tun! 💜
            </h1>

            <p className="text-xl text-gray-600 mt-5 leading-9">
              Everything you need for smarter electronics,
              <br />
              all in one place.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Datasheets"
              value="0"
              subtitle="Available Files"
              icon={<FaFilePdf />}
              color="bg-purple-600"
            />

            <StatCard
              title="AI Queries"
              value="0"
              subtitle="Questions Asked"
              icon={<FaRobot />}
              color="bg-green-500"
            />

            <StatCard
              title="Favorites"
              value="0"
              subtitle="Saved Components"
              icon={<FaStar />}
              color="bg-yellow-500"
            />

            <StatCard
              title="Projects"
              value="0"
              subtitle="Active Projects"
              icon={<FaFolderOpen />}
              color="bg-blue-500"
            />

          </div>

          {/* Quick Actions + AI Tip */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

            {/* Left */}
            <div className="lg:col-span-2">

              <h2 className="text-3xl font-bold text-purple-700 mb-5">
                Quick Actions
              </h2>

              <div className="flex flex-wrap gap-5">

                <button className="bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-2xl shadow-lg transition hover:scale-105">
                  📤 Upload Datasheet
                </button>

                <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl shadow-lg transition hover:scale-105">
                  🤖 Ask AI
                </button>

              </div>

            </div>

            {/* Right */}
            <AITipCard />

          </div>

          {/* Recent Activity */}
          <div className="mt-14">

            <h2 className="text-3xl font-bold text-purple-700 mb-5">
              Recent Activity
            </h2>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <p className="text-gray-500 text-lg">
                No recent activity yet.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;