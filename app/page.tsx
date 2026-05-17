"use client";

import { useState } from "react";
import { sampleGames } from "@/lib/sampleGames";
import { JeopardyGame, Player } from "@/lib/types";
import GameBoard from "@/components/GameBoard";
import PlayerSetup from "@/components/PlayerSetup";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Zap } from "lucide-react";

type AppState =
  | { view: "home" }
  | { view: "setup"; game: JeopardyGame }
  | { view: "playing"; game: JeopardyGame; players: Player[] };

const TAG_COLORS: Record<string, string> = {
  Technology: "bg-blue-800 text-blue-200",
  AI: "bg-purple-800 text-purple-200",
  Trending: "bg-red-800 text-red-200",
  "Pop Culture": "bg-pink-800 text-pink-200",
  Entertainment: "bg-orange-800 text-orange-200",
  Science: "bg-green-800 text-green-200",
  Space: "bg-indigo-800 text-indigo-200",
  STEM: "bg-teal-800 text-teal-200",
  Geography: "bg-yellow-800 text-yellow-200",
  Education: "bg-lime-800 text-lime-200",
  World: "bg-emerald-800 text-emerald-200",
  Movies: "bg-rose-800 text-rose-200",
  Streaming: "bg-violet-800 text-violet-200",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "bg-gray-800 text-gray-300";
}

export default function Home() {
  const [state, setState] = useState<AppState>({ view: "home" });

  const handleScoreChange = (playerId: string, delta: number) => {
    if (state.view !== "playing") return;
    const updated = state.players.map((p) =>
      p.id === playerId ? { ...p, score: p.score + delta } : p
    );
    setState({ ...state, players: updated });
  };

  if (state.view === "setup") {
    return (
      <PlayerSetup
        onBack={() => setState({ view: "home" })}
        onStart={(ps) => setState({ view: "playing", game: state.game, players: ps })}
      />
    );
  }

  if (state.view === "playing") {
    return (
      <GameBoard
        game={state.game}
        players={state.players}
        onScoreChange={handleScoreChange}
        onExit={() => setState({ view: "home" })}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-blue-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #060CE9 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3 font-medium">
              Game Night Edition
            </p>
            <h1 className="jeopardy-font text-6xl md:text-8xl gold-text animate-pulse-gold mb-4">
              JEOPARDY!
            </h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
              Play with friends using curated game packs — or generate your own
              with any AI.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/create"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Zap size={18} />
                Create with AI
              </Link>
              <a
                href="#games"
                className="flex items-center gap-2 border border-blue-600 text-blue-300 hover:text-white hover:border-blue-400 px-6 py-3 rounded-xl transition-colors"
              >
                Browse Games ↓
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Pick a game", desc: "Choose from trending topic packs below." },
            { step: "2", title: "Add players", desc: "Name up to 6 players — no accounts needed." },
            { step: "3", title: "Play!", desc: "Click a clue, buzz in, score points. Classic rules." },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[#060CE9]/20 border border-blue-900 rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-blue-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Game library */}
      <section id="games" className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="jeopardy-font text-2xl text-white">GAME LIBRARY</h2>
          <Link
            href="/create"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm transition-colors"
          >
            <Plus size={14} /> Add your own
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence>
            {sampleGames.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#000080] border border-blue-800 rounded-xl overflow-hidden hover:border-yellow-400 transition-all duration-200 group cursor-pointer"
                onClick={() => setState({ view: "setup", game })}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="jeopardy-font text-lg text-white group-hover:text-yellow-400 transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-blue-400 text-xs ml-2 mt-1 flex-shrink-0">
                      {game.categories.length} categories
                    </span>
                  </div>
                  <p className="text-blue-300 text-sm mb-3 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full ${tagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#060CE9]/30 px-5 py-2 flex items-center justify-between">
                  <span className="text-blue-400 text-xs">
                    {game.categories
                      .map((c) => c.title)
                      .slice(0, 3)
                      .join(" · ")}
                    {game.categories.length > 3
                      ? ` +${game.categories.length - 3} more`
                      : ""}
                  </span>
                  <span className="text-yellow-400 text-xs font-bold group-hover:translate-x-1 transition-transform inline-block">
                    Play →
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Custom game card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sampleGames.length * 0.08 }}
            >
              <Link
                href="/create"
                className="bg-[#000080]/50 border-2 border-dashed border-blue-700 rounded-xl p-5 flex flex-col items-center justify-center text-center min-h-[140px] hover:border-yellow-400 transition-all duration-200 group block"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400/20 transition-colors">
                  <Plus size={24} className="text-yellow-400" />
                </div>
                <h3 className="text-yellow-400 font-semibold mb-1">
                  Create Custom Game
                </h3>
                <p className="text-blue-400 text-sm">
                  Generate with ChatGPT, Claude, Gemini, or any LLM
                </p>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900 py-8 text-center text-blue-500 text-sm">
        <p>Open resource — generate any game pack with your favorite AI.</p>
        <p className="mt-1">
          <Link
            href="/create"
            className="text-blue-400 hover:text-yellow-400 transition-colors"
          >
            Get the prompt template →
          </Link>
        </p>
      </footer>
    </div>
  );
}
