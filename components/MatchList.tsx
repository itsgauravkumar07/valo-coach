"use client";

import { useState } from "react";
import { Match } from "@/types/player";
import MatchCard from "./MatchCard";
import MatchModal from "./MatchModal";

interface Props {
  matches: Match[];
}

export default function MatchList({ matches }: Props) {
  const [filter, setFilter] = useState<"All" | "Won" | "Lost">("All");
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const filteredMatches =
    filter === "All"
      ? matches
      : matches.filter((m) => m.result === filter);

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex mb-4 flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2 className="text-lg font-bold uppercase tracking-wider">
          Recent Matches
        </h2>

        <div className="flex gap-2 bg-black/30 p-1 rounded-lg border border-white/10 w-fit">
          {["All", "Won", "Lost"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-1 text-sm rounded-md transition
                ${
                  filter === f
                    ? "bg-red-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Match list */}
      <div className="space-y-3">
        {filteredMatches.slice(0, 5).map((match, i) => (
          <MatchCard
            key={i}
            match={match}
            onClick={() => setSelectedMatch(match)}
          />
        ))}
      </div>

      <MatchModal
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
      />
    </section>
  );
}
