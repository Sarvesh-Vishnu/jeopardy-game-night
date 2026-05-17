"use client";

import { JeopardyGame, Clue, Player } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import ClueModal from "./ClueModal";

interface Props {
  game: JeopardyGame;
  players: Player[];
  onScoreChange: (playerId: string, delta: number) => void;
  onExit: () => void;
}

export default function GameBoard({ game, players, onScoreChange, onExit }: Props) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [activeClue, setActiveClue] = useState<{ clue: Clue; categoryTitle: string } | null>(null);

  const handleClueClick = useCallback((clue: Clue, categoryTitle: string) => {
    if (revealed.has(clue.id)) return;
    setActiveClue({ clue, categoryTitle });
  }, [revealed]);

  const handleClueClose = useCallback((awarded: boolean, playerId?: string, correct?: boolean) => {
    if (activeClue) {
      setRevealed(prev => new Set(prev).add(activeClue.clue.id));
      if (awarded && playerId) {
        const delta = correct ? activeClue.clue.value : -activeClue.clue.value;
        onScoreChange(playerId, delta);
      }
    }
    setActiveClue(null);
  }, [activeClue, onScoreChange]);

  const allRevealed = game.categories.every(cat =>
    cat.clues.every(clue => revealed.has(clue.id))
  );

  const PLAYER_COLORS = [
    "bg-purple-600", "bg-pink-600", "bg-green-600",
    "bg-orange-600", "bg-red-600", "bg-cyan-600"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-blue-900">
        <button
          onClick={onExit}
          className="text-blue-400 hover:text-white text-sm transition-colors"
        >
          ← Exit Game
        </button>
        <h1 className="jeopardy-font text-xl gold-text">{game.title}</h1>
        <div className="text-sm text-blue-300">
          {revealed.size}/{game.categories.reduce((acc, c) => acc + c.clues.length, 0)} clues
        </div>
      </div>

      {/* Scoreboard */}
      <div className="flex justify-center gap-3 px-4 py-3 flex-wrap">
        {players.map((player, i) => (
          <div
            key={player.id}
            className={`${PLAYER_COLORS[i % PLAYER_COLORS.length]} rounded-lg px-4 py-2 text-center min-w-[100px]`}
          >
            <div className="text-xs font-medium opacity-80 truncate max-w-[100px]">{player.name}</div>
            <div className="text-lg font-bold">
              {player.score < 0 ? `-$${Math.abs(player.score).toLocaleString()}` : `$${player.score.toLocaleString()}`}
            </div>
          </div>
        ))}
      </div>

      {/* Game board */}
      <div className="flex-1 flex items-start justify-center px-2 pb-6">
        <div className="w-full max-w-7xl board-shadow rounded-xl overflow-hidden">
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${game.categories.length}, 1fr)` }}
          >
            {/* Category headers */}
            {game.categories.map(cat => (
              <div
                key={cat.id}
                className="bg-[#060CE9] p-3 text-center min-h-[80px] flex items-center justify-center border-b-2 border-[#3030FF]"
              >
                <span className="jeopardy-font text-white text-sm md:text-base leading-tight">
                  {cat.title.toUpperCase()}
                </span>
              </div>
            ))}

            {/* Clue cells */}
            {[200, 400, 600, 800, 1000].map(value =>
              game.categories.map(cat => {
                const clue = cat.clues.find(c => c.value === value);
                if (!clue) return <div key={`${cat.id}-${value}`} className="bg-[#0606CC] min-h-[80px]" />;
                const isRevealed = revealed.has(clue.id);

                return (
                  <motion.button
                    key={clue.id}
                    whileHover={!isRevealed ? { scale: 1.03, zIndex: 10 } : {}}
                    whileTap={!isRevealed ? { scale: 0.97 } : {}}
                    onClick={() => handleClueClick(clue, cat.title)}
                    className={`relative min-h-[80px] flex items-center justify-center border border-blue-900 transition-all duration-200 ${
                      isRevealed
                        ? "bg-[#020266] cursor-default"
                        : "bg-[#0606CC] hover:bg-[#1a1aFF] cursor-pointer"
                    }`}
                  >
                    {!isRevealed ? (
                      <span className="jeopardy-font text-[#FFD700] text-xl md:text-2xl font-bold"
                        style={{ textShadow: "0 0 10px rgba(255,215,0,0.4)" }}>
                        ${value.toLocaleString()}
                      </span>
                    ) : (
                      <div className="w-full h-full bg-[#020266]" />
                    )}
                    {clue.isDailyDouble && !isRevealed && (
                      <span className="absolute top-1 right-1 text-xs bg-yellow-500 text-black px-1 rounded font-bold">DD</span>
                    )}
                  </motion.button>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Final scores overlay */}
      <AnimatePresence>
        {allRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#000080] border-2 border-yellow-400 rounded-2xl p-8 text-center max-w-md w-full mx-4"
            >
              <h2 className="jeopardy-font text-3xl gold-text mb-2">FINAL SCORES</h2>
              <p className="text-blue-300 text-sm mb-6">Game complete!</p>
              {[...players]
                .sort((a, b) => b.score - a.score)
                .map((p, i) => (
                  <div key={p.id} className={`flex items-center justify-between py-2 border-b border-blue-800 ${i === 0 ? "text-yellow-400 text-xl font-bold" : "text-white"}`}>
                    <span>{i === 0 ? "🏆 " : `${i + 1}. `}{p.name}</span>
                    <span>${p.score.toLocaleString()}</span>
                  </div>
                ))}
              <button
                onClick={onExit}
                className="mt-6 bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeClue && (
          <ClueModal
            clue={activeClue.clue}
            categoryTitle={activeClue.categoryTitle}
            players={players}
            onClose={handleClueClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
