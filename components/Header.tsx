import Image from "next/image";

interface Props {
  playerName: string;
  rank: string;
  avatar: string;
}

export default function Header({ playerName, rank, avatar }: Props) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/40 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: App Name */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-wide text-white">
            Valo<span className="text-red-500">Coach</span>
          </span>
        </div>

        {/* Right: Player HUD */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-gray-400">Player</p>
            <p className="text-sm font-semibold">{playerName}</p>
          </div>

          <div className="w-9 h-9 rounded-md overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition">
            <Image
              src={avatar}
              alt="avatar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </header>
  );
}
