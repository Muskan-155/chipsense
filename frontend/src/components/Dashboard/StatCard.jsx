function StatCard({ icon, title, value, subtitle, color }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-lg font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-3">
            {subtitle}
          </p>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;