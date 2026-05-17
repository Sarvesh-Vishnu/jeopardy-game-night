"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JeopardyGame, Player } from "@/lib/types";
import GameBoard from "@/components/GameBoard";
import PlayerSetup from "@/components/PlayerSetup";

type Phase = "setup" | "playing";

export default function CustomPlayPage() {
  const router = useRouter();
  const [game, setGame] = useState<JeopardyGame | null>(null);
  const [phase, setPhase] = useState<Phase>("setup");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("customGame");
    if (!stored) {
      router.push("/create");
      return;
    }
    try {
      setGame(JSON.parse(stored));
    } catch {
      router.push("/create");
    }
  }, [router]);

  const handleScoreChange = (playerId: string, delta: number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, score: p.score + delta } : p))
    );
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-blue-400">Loading...</div>
      </div>
    );
  }

  if (phase === "setup") {
    return (
      <PlayerSetup
        onBack={() => router.push("/create")}
        onStart={(ps) => {
          setPlayers(ps);
          setPhase("playing");
        }}
      />
    );
  }

  return (
    <GameBoard
      game={game}
      players={players}
      onScoreChange={handleScoreChange}
      onExit={() => router.push("/")}
    />
  );
}
