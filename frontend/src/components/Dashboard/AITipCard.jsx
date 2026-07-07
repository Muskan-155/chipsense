import { FaRobot, FaLightbulb } from "react-icons/fa";

function AITipCard() {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 rounded-3xl shadow-xl p-6 text-white">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
          <FaRobot />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Today's AI Tip
          </h2>

          <p className="text-sm text-purple-100">
            Learn something new every day
          </p>
        </div>

      </div>

      <div className="bg-white/10 rounded-2xl p-5">

        <div className="flex gap-3">

          <FaLightbulb className="text-yellow-300 text-2xl mt-1" />

          <p className="leading-7 text-sm">
            Use keywords like
            <span className="font-semibold"> LM358</span>,
            <span className="font-semibold"> ESP32</span> or
            <span className="font-semibold"> ATmega328P</span>
            while searching to quickly find the correct datasheet.
          </p>

        </div>

      </div>

      <button className="mt-6 w-full bg-green-500 hover:bg-green-600 transition duration-300 rounded-2xl py-3 font-semibold shadow-lg">
        ✨ Learn More
      </button>

    </div>
  );
}

export default AITipCard;