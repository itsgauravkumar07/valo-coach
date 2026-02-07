import { Match } from "@/types/player";

interface Props {
  match: Match;
  onClick?: () => void;
}

export default function MatchCard({ match, onClick }: Props) {
  const isWin = match.result === "Won";
  const isDraw = match.result === "Draw";

  return (
    <div
      className={`relative flex items-center justify-between
      rounded-2xl px-6 py-4
      border border-white/5
      transition-all duration-300
      ${
        isWin
          ? "bg-linear-to-r from-emerald-900/20 to-black"
          : isDraw
          ? "bg-linear-to-r from-gray-700/20 to-black"
          : "bg-linear-to-r from-red-900/20 to-black"
      }`}
    >
      {/* LEFT: Map box */}
      <div className="flex items-center gap-4 min-w-55">
        <div className="w-20 h-14 rounded-md bg-gray-500/40 flex items-center justify-center">
          <span className="text-sm font-bold tracking-wide uppercase text-white">
            {match.map}
          </span>
        </div>

        <div>
          <p
            className={`text-sm font-bold uppercase tracking-wide
            ${isWin ? "text-emerald-400" : isDraw ? "text-gray-300" : "text-red-400"}`}
          >
            {match.result}
          </p>
         
          <p className="text-xs text-gray-400">
            Ranked · {match.date_and_time}
          </p>
        </div>
      </div>

      {/* CENTER STATS */}
      <div className="hidden md:flex items-center gap-12 text-sm">
        <Stat label="K / D / A">
          {match.kills}
          <span className="text-red-400">/{match.deaths}</span>/
          {match.assists}
        </Stat>

        <Stat label="Score / Round">
          {match.ACS}
        </Stat>

        <Stat label="HS %">
          <span className="text-cyan-400">
            {match.headshot_percentage}%
          </span>
        </Stat>
      </div>

      {/* RIGHT: Details */}
      <button
        onClick={onClick}
        className={`ml-6 px-5 py-2 rounded-lg text-sm font-semibold
        transition cursor-pointer
        ${
          isWin
            ? "bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30"
            : isDraw
            ? "bg-gray-600/20 text-gray-300 hover:bg-gray-600/30"
            : "bg-red-600/20 text-red-400 hover:bg-red-600/30"
        }`}
      >
        DETAILS →
      </button>
    </div>
  );
}

/* Small stat block */
function Stat({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-white">
        {children}
      </p>
    </div>
  );
}
