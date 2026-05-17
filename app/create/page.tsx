"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { JeopardyGame } from "@/lib/types";
import { LLM_PROMPT_TEMPLATE, LLM_SITES } from "@/lib/llmPromptTemplate";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink, Play } from "lucide-react";

type Step = "prompt" | "paste" | "preview";

function validateGame(obj: unknown): obj is JeopardyGame {
  if (typeof obj !== "object" || obj === null) return false;
  const g = obj as Record<string, unknown>;
  if (typeof g.id !== "string") return false;
  if (typeof g.title !== "string") return false;
  if (!Array.isArray(g.categories)) return false;
  for (const cat of g.categories as unknown[]) {
    if (typeof cat !== "object" || cat === null) return false;
    const c = cat as Record<string, unknown>;
    if (typeof c.id !== "string") return false;
    if (typeof c.title !== "string") return false;
    if (!Array.isArray(c.clues)) return false;
    for (const clue of c.clues as unknown[]) {
      if (typeof clue !== "object" || clue === null) return false;
      const cl = clue as Record<string, unknown>;
      if (typeof cl.id !== "string") return false;
      if (typeof cl.value !== "number") return false;
      if (typeof cl.answer !== "string") return false;
      if (typeof cl.question !== "string") return false;
    }
  }
  return true;
}

export default function CreatePage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("prompt");
  const [copied, setCopied] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");
  const [parsedGame, setParsedGame] = useState<JeopardyGame | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(LLM_PROMPT_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleParse = () => {
    setError("");
    try {
      const parsed = JSON.parse(jsonInput);
      if (!validateGame(parsed)) {
        setError("JSON structure is invalid. Make sure it matches the schema — all required fields must be present.");
        return;
      }
      setParsedGame(parsed);
      setStep("preview");
    } catch {
      setError("Invalid JSON. Check for syntax errors — missing commas, unclosed brackets, etc.");
    }
  };

  const handlePlay = () => {
    if (!parsedGame) return;
    sessionStorage.setItem("customGame", JSON.stringify(parsedGame));
    router.push("/play/custom");
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back */}
        <Link href="/" className="text-blue-400 hover:text-white text-sm transition-colors mb-8 inline-block">
          ← Back to Library
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="jeopardy-font text-4xl gold-text mb-2">CREATE YOUR GAME</h1>
          <p className="text-blue-300 mb-8">
            Use any AI assistant to generate a custom Jeopardy game, then paste the JSON here to play.
          </p>

          {/* Step tabs */}
          <div className="flex gap-2 mb-8">
            {(["prompt", "paste", "preview"] as Step[]).map((s, i) => (
              <button
                key={s}
                onClick={() => { if (s !== "preview" || parsedGame) setStep(s); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  step === s
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-900/40 text-blue-300 hover:text-white"
                } ${s === "preview" && !parsedGame ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">{i + 1}</span>
                {s === "prompt" ? "Get Prompt" : s === "paste" ? "Paste JSON" : "Preview"}
              </button>
            ))}
          </div>

          {/* Step 1: Prompt template */}
          {step === "prompt" && (
            <div className="space-y-6">
              <div className="bg-[#000080] border border-blue-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-blue-800">
                  <span className="text-blue-300 text-sm font-medium">LLM Prompt Template</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="p-4 text-blue-200 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {LLM_PROMPT_TEMPLATE}
                </pre>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Open in your favorite AI →</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {LLM_SITES.map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#060CE9]/30 border border-blue-800 hover:border-yellow-400 rounded-xl p-3 flex items-center gap-2 transition-all group"
                    >
                      <span className="text-2xl">{site.icon}</span>
                      <span className="text-white text-sm font-medium">{site.name}</span>
                      <ExternalLink size={12} className="text-blue-400 ml-auto group-hover:text-yellow-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep("paste")}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-colors"
              >
                I have my JSON → Paste it
              </button>
            </div>
          )}

          {/* Step 2: Paste JSON */}
          {step === "paste" && (
            <div className="space-y-4">
              <p className="text-blue-300 text-sm">
                Paste the JSON your AI generated. It should match the schema from Step 1.
              </p>
              <textarea
                value={jsonInput}
                onChange={(e) => { setJsonInput(e.target.value); setError(""); }}
                placeholder='{"id": "my-game", "title": "My Game", "categories": [...] }'
                className="w-full h-64 bg-[#000080] border border-blue-700 focus:border-yellow-400 rounded-xl p-4 text-blue-100 text-sm font-mono resize-none focus:outline-none"
              />
              {error && (
                <div className="bg-red-900/40 border border-red-700 rounded-lg px-4 py-3 text-red-300 text-sm">
                  {error}
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("prompt")}
                  className="flex-1 border border-blue-700 text-blue-300 hover:text-white py-3 rounded-xl transition-colors text-sm"
                >
                  ← Back
                </button>
                <button
                  onClick={handleParse}
                  disabled={!jsonInput.trim()}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Validate & Preview
                </button>
              </div>

              <details className="bg-[#060CE9]/20 border border-blue-900 rounded-xl p-4">
                <summary className="text-blue-300 text-sm cursor-pointer hover:text-white transition-colors">
                  Schema reference
                </summary>
                <pre className="mt-3 text-blue-400 text-xs leading-relaxed overflow-x-auto">
{`{
  "id": "string",
  "title": "string",
  "description": "string",
  "tags": ["string"],
  "categories": [
    {
      "id": "string",
      "title": "string",
      "clues": [
        {
          "id": "string",
          "value": 200 | 400 | 600 | 800 | 1000,
          "answer": "string",
          "question": "string"
        }
      ]
    }
  ]
}`}
                </pre>
              </details>
            </div>
          )}

          {/* Step 3: Preview & Play */}
          {step === "preview" && parsedGame && (
            <div className="space-y-6">
              <div className="bg-[#000080] border border-yellow-400 rounded-xl p-5">
                <h2 className="jeopardy-font text-2xl text-yellow-400 mb-1">{parsedGame.title}</h2>
                {parsedGame.description && (
                  <p className="text-blue-300 text-sm mb-4">{parsedGame.description}</p>
                )}
                <div className="grid grid-cols-2 gap-3">
                  {parsedGame.categories.map((cat) => (
                    <div key={cat.id} className="bg-[#060CE9]/40 rounded-lg p-3">
                      <p className="text-white text-xs font-semibold mb-1">{cat.title}</p>
                      <p className="text-blue-400 text-xs">{cat.clues.length} clues</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-blue-800 flex items-center justify-between text-sm text-blue-400">
                  <span>{parsedGame.categories.length} categories</span>
                  <span>
                    {parsedGame.categories.reduce((a, c) => a + c.clues.length, 0)} total clues
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("paste")}
                  className="flex-1 border border-blue-700 text-blue-300 hover:text-white py-3 rounded-xl transition-colors text-sm"
                >
                  ← Edit JSON
                </button>
                <button
                  onClick={handlePlay}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={18} /> Play This Game
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
