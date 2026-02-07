import Image from "next/image";
import { Player } from "@/types/player";

interface Props {
  player: Player;
}

export default function PlayerProfile({ player }: Props) {
  return (
    <section
      className="
        relative rounded-2xl p-5 md:p-8
        bg-linear-to-br from-[#281414] via-[#1a0f0f] to-[#221b3a]
        border border-white/5 shadow-xl overflow-hidden
      "
    >
      {/* Glow accent */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%)]
        "
      />

      <div
        className="
          relative flex flex-col lg:flex-row
          gap-6 lg:gap-10
          items-center lg:items-start
          justify-between
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-4 sm:gap-5
            items-center sm:items-start
            text-center sm:text-left
          "
        >
          {/* Avatar */}
          <div
            className="
              relative
              w-24 h-24
              sm:w-32 sm:h-32
              md:w-40 md:h-40
              rounded-xl overflow-hidden
              border border-cyan-400/30
            "
          >
            <Image
              src={player.player_card_link}
              alt={player.player_name}
              fill
              className="object-cover"
            />
          </div>

          {/* Player Info */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
              {player.player_name}
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Level {player.player_account_level} · Competitive Player
            </p>

            <div
              className="
                flex flex-wrap justify-center sm:justify-start
                items-center gap-3 mt-3
              "
            >
              <span
                className="
                  px-3 py-1 text-xs font-semibold rounded-md
                  bg-red-500/10 border border-red-400/30 text-red-400
                "
              >
                {player.current_rank}
              </span>

              <span className="text-xs text-gray-500">
                Peak: {player.peak_rank}
              </span>
            </div>

            {/* Buttons */}
            <div
              className="
                flex flex-col sm:flex-row
                gap-3 mt-4
              "
            >
              <button
                className="
                  w-full sm:w-auto
                  px-4 py-2 text-sm font-semibold rounded-md
                  bg-red-600 hover:bg-red-500 transition
                "
              >
                Refresh Stats
              </button>

              <button
                className="
                  w-full sm:w-auto
                  px-4 py-2 text-sm font-semibold rounded-md
                  bg-white/5 border border-white/10 hover:bg-white/10 transition
                "
              >
                Share Profile
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – STATS */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-4
            gap-3 sm:gap-4
            w-full lg:w-auto
          "
        >
          <StatBox
            label="K/D Ratio"
            value={player.overall_kd_ratio.toFixed(2)}
            color="text-cyan-400"
          />
          <StatBox
            label="Win Rate"
            value={`${player.overall_win_percent}%`}
            color="text-indigo-400"
          />
          <StatBox
            label="Headshot %"
            value={`${player.overall_headshot_percentage}%`}
            color="text-red-400"
          />
          <StatBox
            label="ACS"
            value={player.overall_ACS.toFixed(0)}
            color="text-emerald-400"
          />
        </div>
      </div>
    </section>
  );
}

/* --- Stat Card --- */
function StatBox({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="
        rounded-xl
        px-4 py-3 sm:px-5 sm:py-4
        bg-black/30 border border-white/5
        text-center
      "
    >
      <p className="text-xs uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className={`mt-1 sm:mt-2 text-lg sm:text-xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}
