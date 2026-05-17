"use client";

import { Clue, Player } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, Check, Minus } from "lucide-react";

interface Props {
  clue: Clue;
  categoryTitle: string;
  players: Player[];
  onClose: (awarded: boolean, playerId?: string, correct?: boolean) => void;
}

type Phase = "clue" | "answer" | "scoring";

export default function ClueModal({ clue, categoryTitle, players, onClose }: Props) {
  const [phase, setPhase] = useState<Phase>("clue");
  const [buzzedPlayer, setBuzzedPlayer] = useState<string | null>(null);

  const PLAYER_COLORS = [
    "bg-purple-600 border-purple-400",
    "bg-pink-600 border-pink-400",
    "bg-green-600 border-green-400",
    "bg-orange-600 border-orange-400",
    "bg-red-600 border-red-400",
    "bg-cyan-600 border-cyan-400",
  ];

  const handleBuzz = (playerId: string) => {
    setBuzzedPlayer(playerId);
    setPhase("answer");
  };

  const handleCorrect = () => {
    onClose(true, buzzedPlayer!, true);
  };

  const handleWrong = () => {
    setBuzzedPlayer(null);
    setPhase("scoring");
  };

  const handleNoAnswer = () => {
    onClose(false);
  };

  const buzzedPlayerObj = players.find(p => p.id === buzzedPlayer);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && phase === "clue") onClose(false);
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-[#060CE9] border-2 border-yellow-400 rounded-2xl max-w-2xl w-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#000080] px-6 py-3 flex items-center justify-between">
          <span className="jeopardy-font text-sm text-blue-300 uppercase tracking-widest">
            {categoryTitle}
          </span>
          <span className="jeopardy-font text-xl gold-text font-bold">
            ${clue.value.toLocaleString()}
          </span>
        </div>

        {/* Clue */}
        <div className="px-8 py-10 text-center min-h-[200px] flex items-center justify-center">
          <p className="jeopardy-font text-white text-2xl md:text-3xl leading-relaxed">
            {clue.answer}
          </p>
        </div>

        {/* Phase: buzzer */}
        {phase === "clue" && (
          <div className="px-6 pb-6 space-y-3">
            <p className="text-center text-blue-300 text-sm mb-3">Who buzzes in?</p>
            <div className="grid grid-cols-2 gap-2">
              {players.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleBuzz(p.id)}
                  className={`${PLAYER_COLORS[i % PLAYER_COLORS.length]} border-2 rounded-lg py-3 font-bold text-white hover:opacity-90 transition-opacity`}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <button
              onClick={handleNoAnswer}
              className="w-full py-2 text-blue-400 hover:text-white text-sm transition-colors flex items-center justify-center gap-2"
            >
              <X size={14} /> No one / Skip
            </button>
          </div>
        )}

        {/* Phase: show answer + correct/wrong */}
        {phase === "answer" && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-[#000080] rounded-xl p-4 text-center border border-blue-700">
              <p className="text-blue-400 text-xs uppercase tracking-wider mb-1">Correct Response</p>
              <p className="text-white font-semibold text-lg">{clue.question}</p>
            </div>
            {buzzedPlayerObj && (
              <p className="text-center text-blue-300 text-sm">
                Did <span className="text-white font-bold">{buzzedPlayerObj.name}</span> get it right?
              </p>
            )}
            <div className="flex gap-3">
              <button
                onClick={handleCorrect}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Check size={18} /> Correct +${clue.value.toLocaleString()}
              </button>
              <button
                onClick={handleWrong}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Minus size={18} /> Wrong −${clue.value.toLocaleString()}
              </button>
            </div>
            <button
              onClick={handleNoAnswer}
              className="w-full py-2 text-blue-400 hover:text-white text-sm transition-colors"
            >
              Cancel / No score change
            </button>
          </div>
        )}

        {/* Phase: scoring after wrong — let others answer */}
        {phase === "scoring" && (
          <div className="px-6 pb-6 space-y-3">
            <div className="bg-[#000080] rounded-xl p-4 text-center border border-blue-700">
              <p className="text-blue-400 text-xs uppercase tracking-wider mb-1">Correct Response</p>
              <p className="text-white font-semibold text-lg">{clue.question}</p>
            </div>
            <p className="text-center text-blue-300 text-sm">Another player can answer:</p>
            <div className="grid grid-cols-2 gap-2">
              {players
                .filter(p => p.id !== buzzedPlayer)
                .map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => { setBuzzedPlayer(p.id); setPhase("answer"); }}
                    className={`${PLAYER_COLORS[i % PLAYER_COLORS.length]} border-2 rounded-lg py-3 font-bold text-white hover:opacity-90 transition-opacity`}
                  >
                    {p.name}
                  </button>
                ))}
            </div>
            <button
              onClick={handleNoAnswer}
              className="w-full py-2 text-blue-400 hover:text-white text-sm transition-colors"
            >
              End clue (no more answers)
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
