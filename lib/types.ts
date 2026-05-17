export interface Clue {
  id: string;
  value: number;
  answer: string; // The "answer" shown on the board (Jeopardy-style)
  question: string; // The correct "question" response
  isDailyDouble?: boolean;
}

export interface Category {
  id: string;
  title: string;
  clues: Clue[];
}

export interface JeopardyGame {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: Category[];
}

export interface Player {
  id: string;
  name: string;
  score: number;
  color: string;
}

export interface GameState {
  game: JeopardyGame;
  players: Player[];
  revealedClues: Set<string>;
  activeClue: Clue | null;
  activeCategory: string | null;
  phase: "setup" | "playing" | "finished";
  buzzedPlayer: string | null;
  showAnswer: boolean;
}
