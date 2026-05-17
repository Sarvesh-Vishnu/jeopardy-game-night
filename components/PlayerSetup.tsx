"use client";

import { Player } from "@/lib/types";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onStart: (players: Player[]) => void;
  onBack: () => void;
}

const PLAYER_COLORS = [
  "purple", "pink", "green", "orange", "red", "cyan"
];

export default function PlayerSetup({ onStart, onBack }: Props) {
  const [playerNames, setPlayerNames] = useState<string[]>(["Player 1", "Player 2"]);
  const [newName, setNewName] = useState("");

  const addPlayer = () => {
    const name = newName.trim() || `Player ${playerNames.length + 1}`;
    if (playerNames.length < 6) {
      setPlayerNames(prev => [...prev, name]);
      setNewName("");
    }
  };

  const removePlayer = (i: number) => {
    if (playerNames.length > 1) {
      setPlayerNames(prev => prev.filter((_, idx) => idx !== i));
    }
  };

  const updatePlayer = (i: number, val: string) => {
    setPlayerNames(prev => prev.map((n, idx) => idx === i ? val : n));
  };

  const handleStart = () => {
    const players: Player[] = playerNames
      .filter(n => n.trim())
      .map((name, i) => ({
        id: `player-${i}`,
        name: name.trim(),
        score: 0,
        color: PLAYER_COLORS[i],
      }));
    if (players.length > 0) onStart(players);
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#000080] border border-blue-700 rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="jeopardy-font text-2xl gold-text text-center mb-2">PLAYERS</h2>
        <p className="text-blue-300 text-sm text-center mb-6">Add 1–6 players</p>

        <div className="space-y-2 mb-4">
          <AnimatePresence>
            {playerNames.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
                <input
                  value={name}
                  onChange={(e) => updatePlayer(i, e.target.value)}
                  className="flex-1 bg-[#0606CC] border border-blue-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-400"
                  placeholder={`Player ${i + 1}`}
                  maxLength={20}
                />
                {playerNames.length > 1 && (
                  <button
                    onClick={() => removePlayer(i)}
                    className="text-blue-400 hover:text-red-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {playerNames.length < 6 && (
          <div className="flex gap-2 mb-6">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPlayer()}
              placeholder="New player name..."
              className="flex-1 bg-[#0606CC] border border-blue-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-400"
              maxLength={20}
            />
            <button
              onClick={addPlayer}
              className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 border border-blue-700 text-blue-300 hover:text-white py-3 rounded-lg transition-colors text-sm"
          >
            Back
          </button>
          <button
            onClick={handleStart}
            disabled={playerNames.filter(n => n.trim()).length === 0}
            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Game →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
