import playerData from "@/data/player.json";
import Header from "@/components/Header";
import { Player } from "@/types/player";

import PlayerProfile from "@/components/PlayerProfile";
import MatchList from "@/components/MatchList";

export default function Home() {
  const player = playerData as Player;

  return (
    <>
      <Header
        playerName={player.player_name}
        rank={player.current_rank}
        avatar={player.player_card_link}
      />

      <main className="min-h-screen bg-[#0f0f1a] text-white p-6">
      <PlayerProfile player={player} />
      
      <MatchList matches={player.matches} />
    </main>
    </>
    
  );
}
