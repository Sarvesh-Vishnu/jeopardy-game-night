export const LLM_PROMPT_TEMPLATE = `Create a Jeopardy game JSON about [YOUR TOPIC] following this exact schema:

{
  "id": "unique-lowercase-id",
  "title": "Game Title",
  "description": "One sentence description",
  "tags": ["Tag1", "Tag2"],
  "categories": [
    {
      "id": "category-id",
      "title": "CATEGORY TITLE",
      "clues": [
        {
          "id": "cat-200",
          "value": 200,
          "answer": "The clue shown on the board (a statement or description)",
          "question": "What is the correct response? (in question form)"
        },
        { "id": "cat-400", "value": 400, "answer": "...", "question": "..." },
        { "id": "cat-600", "value": 600, "answer": "...", "question": "..." },
        { "id": "cat-800", "value": 800, "answer": "...", "question": "..." },
        { "id": "cat-1000", "value": 1000, "answer": "...", "question": "..." }
      ]
    }
  ]
}

Rules:
- Include EXACTLY 6 categories
- Each category has EXACTLY 5 clues at values 200, 400, 600, 800, 1000
- The "answer" is the Jeopardy clue (what players read) — a statement or description
- The "question" is the correct response — traditionally phrased as "What is..." or "Who is..."
- Difficulty should increase with dollar value (200 = easiest, 1000 = hardest)
- Make clues specific and unambiguous
- Return ONLY valid JSON, no explanation text`;

export const LLM_SITES = [
  { name: "ChatGPT", url: "https://chat.openai.com", icon: "🤖" },
  { name: "Claude", url: "https://claude.ai", icon: "✦" },
  { name: "Gemini", url: "https://gemini.google.com", icon: "♊" },
  { name: "Perplexity", url: "https://perplexity.ai", icon: "🔍" },
  { name: "Grok", url: "https://grok.x.ai", icon: "⚡" },
];
