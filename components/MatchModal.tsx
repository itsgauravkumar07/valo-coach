"use client";

import { Match } from "@/types/player";

interface Props {
  match: Match | null;
  onClose: () => void;
}

export default function MatchModal({ match, onClose }: Props) {
  if (!match) return null;

  const isWin = match.result === "Won";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-4xl rounded-2xl m-10
        bg-linear-to-br from-[#281414] via-[#1a0f0f] to-[#271b3a]
        border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 hover:text-white text-lg bg-white/10 px-2 py-0.5 rounded-lg "
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="px-8 pr-15 py-8 border-b border-white/10 flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 hidden md:block">
              Match Summary
            </p>
            <h2 className="text-3xl font-extrabold tracking-wide mt-1">
              {match.map}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {match.date_and_time}
            </p>

            <p
              className={`text-3xl font-extrabold tracking-wide pt-3 md:hidden block
              ${isWin ? "text-emerald-400" : "text-red-400"}`}
            >
              {match.result === "Won" ? "VICTORY" : "DEFEAT"}
            </p>

            <p className="text-sm text-gray-500 md:hidden block">
              {match.result === "Won" ? "You are the winner" : "Better luck next time"}
            </p>
          </div>

          {/* this element is for md screens */}
          <div className="text-right pr-5 hidden md:block">
            <p
              className={`text-5xl font-extrabold tracking-wide pt-3
              ${isWin ? "text-emerald-400" : "text-red-400"}`}
            >
              {match.result === "Won" ? "VICTORY" : "DEFEAT"}
            </p>

            <p className="text-md text-gray-500">
              {match.result === "Won" ? "You are the winner" : "Better luck next time"}
            </p>
           
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
          <Stat label="K / D / A">
            {match.kills} / {match.deaths} / {match.assists}
          </Stat>

          <Stat label="KD Ratio">
            {match.kd_ratio.toFixed(2)}
            <span className="text-emerald-400 text-sm ml-2">
              +0.22
            </span>
          </Stat>

          <Stat label="Headshot %">
            <div className="flex items-center gap-3">
              <span>{match.headshot_percentage}%</span>
              <div className="w-24 h-1 bg-white/10 rounded hidden md:block">
                <div
                  className="h-1 bg-red-400 rounded "
                  style={{ width: `${match.headshot_percentage}%` }}
                />
              </div>
            </div>
          </Stat>

          <Stat label="ACS">{match.ACS}</Stat>

          <Stat label="Damage">
            {match.damage_made.toLocaleString()}
          </Stat>

          <Stat label="Agent">
            <span className="uppercase">{match.agent}</span>
          </Stat>
        </div>
      </div>
    </div>
  );
}

/* Reusable stat block */
function Stat({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-400 ">
        {label}
      </p>
      <p className="mt-2 md:text-2xl font-bold text-white sm:text-lg">
        {children}
      </p>
    </div>
  );
}
