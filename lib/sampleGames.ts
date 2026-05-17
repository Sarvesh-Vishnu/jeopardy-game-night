import { JeopardyGame } from "./types";

export const sampleGames: JeopardyGame[] = [
  {
    id: "ai-tech-2025",
    title: "AI & Tech 2025",
    description: "From LLMs to autonomous agents — how well do you know the AI revolution?",
    tags: ["Technology", "AI", "Trending"],
    categories: [
      {
        id: "llms",
        title: "Large Language Models",
        clues: [
          { id: "llms-200", value: 200, answer: "This OpenAI model family, released in 2024-2025, introduced 'reasoning' with chain-of-thought at inference time.", question: "What is o1 / o3?" },
          { id: "llms-400", value: 400, answer: "Google's flagship multimodal model family, competing with GPT-4o, announced at Google I/O 2024.", question: "What is Gemini?" },
          { id: "llms-600", value: 600, answer: "Anthropic's model series that powers Claude Code and the Claude API, named after a musical instrument.", question: "What is Sonnet / the Claude model family?" },
          { id: "llms-800", value: 800, answer: "This technique feeds a model examples of desired input-output pairs directly in the prompt without updating weights.", question: "What is few-shot prompting?" },
          { id: "llms-1000", value: 1000, answer: "The maximum number of tokens a model can process in one request — its short-term memory.", question: "What is the context window?" },
        ],
      },
      {
        id: "ai-companies",
        title: "AI Companies",
        clues: [
          { id: "aic-200", value: 200, answer: "Elon Musk co-founded this AI company, home to the Grok chatbot.", question: "What is xAI?" },
          { id: "aic-400", value: 400, answer: "This French AI startup behind the Mistral and Mixtral models raised over a billion dollars in 2024.", question: "What is Mistral AI?" },
          { id: "aic-600", value: 600, answer: "Meta's open-weight model family, available for download and fine-tuning.", question: "What is Llama?" },
          { id: "aic-800", value: 800, answer: "This safety-focused AI lab, founded by ex-OpenAI researchers, created the Constitutional AI training method.", question: "What is Anthropic?" },
          { id: "aic-1000", value: 1000, answer: "This startup's 'world model' AI was designed for autonomous vehicle simulation before pivoting to general AI.", question: "What is Wayve / World Labs?" },
        ],
      },
      {
        id: "ai-tools",
        title: "AI-Powered Tools",
        clues: [
          { id: "ait-200", value: 200, answer: "GitHub's AI pair programmer that autocompletes code inside your editor.", question: "What is GitHub Copilot?" },
          { id: "ait-400", value: 400, answer: "This text-to-image model from Stability AI lets you generate artwork from a description.", question: "What is Stable Diffusion?" },
          { id: "ait-600", value: 600, answer: "Anthropic's terminal-based coding agent, usable from the command line.", question: "What is Claude Code?" },
          { id: "ait-800", value: 800, answer: "OpenAI's tool that generates photorealistic images and videos from text prompts, successor to DALL-E.", question: "What is Sora / DALL-E 3?" },
          { id: "ait-1000", value: 1000, answer: "This open protocol lets AI models call external tools and data sources in a standardized way.", question: "What is MCP (Model Context Protocol)?" },
        ],
      },
      {
        id: "ai-concepts",
        title: "AI Concepts",
        clues: [
          { id: "aicc-200", value: 200, answer: "The process of updating a pre-trained model on a smaller, task-specific dataset.", question: "What is fine-tuning?" },
          { id: "aicc-400", value: 400, answer: "This alignment technique uses human preferences to train a reward model and improve outputs.", question: "What is RLHF (Reinforcement Learning from Human Feedback)?" },
          { id: "aicc-600", value: 600, answer: "Giving an LLM access to external memory or documents to improve accuracy beyond its training cutoff.", question: "What is RAG (Retrieval-Augmented Generation)?" },
          { id: "aicc-800", value: 800, answer: "An AI system that perceives its environment, takes actions, and pursues goals — often powered by an LLM.", question: "What is an AI agent?" },
          { id: "aicc-1000", value: 1000, answer: "This interpretability finding shows that individual neurons in LLMs don't correspond to single concepts — they're shared.", question: "What is superposition / polysemanticity?" },
        ],
      },
      {
        id: "ai-history",
        title: "AI Milestones",
        clues: [
          { id: "aim-200", value: 200, answer: "ChatGPT reached 100 million users in this many months — the fastest app to do so.", question: "What is 2 months?" },
          { id: "aim-400", value: 400, answer: "DeepMind's AlphaFold solved this decades-old grand challenge in biology in 2020.", question: "What is protein structure prediction?" },
          { id: "aim-600", value: 600, answer: "The 2017 Google paper that introduced the Transformer architecture and the phrase 'Attention is all you need'.", question: "What is 'Attention Is All You Need'?" },
          { id: "aim-800", value: 800, answer: "In 2023, Geoffrey Hinton left Google and warned about risks of AI — earning this nickname in the press.", question: "Who is the 'Godfather of AI'?" },
          { id: "aim-1000", value: 1000, answer: "This is the computational hardware bottleneck for training large AI models — demand for it caused a global shortage.", question: "What is GPUs (specifically NVIDIA H100s)?" },
        ],
      },
      {
        id: "ai-pop",
        title: "AI in Pop Culture",
        clues: [
          { id: "aip-200", value: 200, answer: "This 2013 Spike Jonze film featured a man falling in love with an AI operating system voiced by Scarlett Johansson.", question: "What is Her?" },
          { id: "aip-400", value: 400, answer: "The viral AI image filter that turned your photo into a Studio Ghibli-style animation, released spring 2025.", question: "What is the Ghibli / ChatGPT image filter?" },
          { id: "aip-600", value: 600, answer: "Sam Altman's word for the moment AI surpasses the smartest human at most tasks.", question: "What is AGI (Artificial General Intelligence)?" },
          { id: "aip-800", value: 800, answer: "The New York Times filed a high-profile lawsuit against this AI company for copyright infringement in late 2023.", question: "What is OpenAI?" },
          { id: "aip-1000", value: 1000, answer: "This comedian used an AI voice clone of himself in a Netflix special and opened a public debate about consent.", question: "Who is David Letterman / various (accept: any comedian who did this)?" },
        ],
      },
    ],
  },
  {
    id: "pop-culture-2025",
    title: "Pop Culture 2024–25",
    description: "Memes, movies, music, and moments everyone was talking about.",
    tags: ["Pop Culture", "Entertainment", "Trending"],
    categories: [
      {
        id: "music-2025",
        title: "Music Hits",
        clues: [
          { id: "mus-200", value: 200, answer: "This Sabrina Carpenter album spawned the mega-hit 'Espresso' and dominated 2024 summer playlists.", question: "What is Short n' Sweet?" },
          { id: "mus-400", value: 400, answer: "Kendrick Lamar headlined the 2025 Super Bowl halftime show and featured this fellow rapper's hit during the set.", question: "Who is SZA (or other featured artist)?" },
          { id: "mus-600", value: 600, answer: "Chappell Roan's breakout 2024 anthem urged you to call her by this royal title.", question: "What is 'Good Luck, Babe' / Pink Pony Club?" },
          { id: "mus-800", value: 800, answer: "Taylor Swift's record-breaking 2023-2024 tour, the highest-grossing concert tour of all time.", question: "What is the Eras Tour?" },
          { id: "mus-1000", value: 1000, answer: "This British duo released 'Guess' in 2024 — a track sampling Aaliyah that was instantly TikTok-viral.", question: "Who are Charli XCX and Billie Eilish?" },
        ],
      },
      {
        id: "movies-2024",
        title: "At the Movies",
        clues: [
          { id: "mov-200", value: 200, answer: "Dune: Part Two and this other blockbuster sequel dominated box offices in early 2024.", question: "What is Ghostbusters: Frozen Empire / Kung Fu Panda 4?" },
          { id: "mov-400", value: 400, answer: "Ariana Grande and Cynthia Erivo starred in the long-awaited film adaptation of this Broadway musical.", question: "What is Wicked?" },
          { id: "mov-600", value: 600, answer: "This Ryan Gosling / Emily Blunt action comedy riffed on classic stunt work and dominated early 2024.", question: "What is The Fall Guy?" },
          { id: "mov-800", value: 800, answer: "Joaquin Phoenix returned as this comic-book villain in a musical sequel that was a critical disappointment.", question: "What is Joker: Folie à Deux?" },
          { id: "mov-1000", value: 1000, answer: "Brady Corbet's 3.5-hour epic about a Hungarian Jewish architect won multiple Oscars in 2025.", question: "What is The Brutalist?" },
        ],
      },
      {
        id: "viral-moments",
        title: "Viral Moments",
        clues: [
          { id: "vir-200", value: 200, answer: "This 'demure and mindful' TikTok creator inspired the 2024 phrase 'very demure, very mindful'.", question: "Who is Jools Lebron?" },
          { id: "vir-400", value: 400, answer: "The social media platform launched by Jack Dorsey after leaving Twitter, aiming to be decentralized.", question: "What is Bluesky?" },
          { id: "vir-600", value: 600, answer: "Italy's parliament famously passed a resolution to call this popular dish by its Italian name, not a French loanword.", question: "What is carbonara? (or: amatriciana)" },
          { id: "vir-800", value: 800, answer: "This tech CEO's courtroom fashion — a turtleneck and blazer — became a meme during a 2024 fraud trial.", question: "Who is Sam Bankman-Fried?" },
          { id: "vir-1000", value: 1000, answer: "The 2024 internet phrase for when someone does a mental 180 and suddenly agrees with what they criticized.", question: "What is 'the lore' / 'eating their words'?" },
        ],
      },
      {
        id: "streaming-tv",
        title: "Streaming & TV",
        clues: [
          { id: "str-200", value: 200, answer: "Shōgun, the FX/Hulu series set in feudal Japan, swept the 2024 Emmy Awards with this record-breaking win count.", question: "What is 18 Emmys (accept: most Emmys ever for a drama)?" },
          { id: "str-400", value: 400, answer: "This Netflix docuseries about the couple's royal exit dominated 2022 conversation and led to their memoir 'Spare'.", question: "What is Harry & Meghan?" },
          { id: "str-600", value: 600, answer: "The Bear, Only Murders in the Building, and Abbott Elementary all compete in this Emmy category — confusingly.", question: "What is Outstanding Comedy Series?" },
          { id: "str-800", value: 800, answer: "Amazon Prime's The Boys spin-off focused on college-aged supes at a university.", question: "What is Gen V?" },
          { id: "str-1000", value: 1000, answer: "This HBO mini-series about a family business transition, not Succession, won Outstanding Limited Series in 2024.", question: "What is True Detective: Night Country?" },
        ],
      },
      {
        id: "social-media",
        title: "Social Media",
        clues: [
          { id: "soc-200", value: 200, answer: "Elon Musk rebranded Twitter to this single letter in 2023.", question: "What is X?" },
          { id: "soc-400", value: 400, answer: "Meta's text-based Twitter alternative launched in July 2023 and hit 100M users in record time.", question: "What is Threads?" },
          { id: "soc-600", value: 600, answer: "This short-form video app faced a US ban threat in 2024-2025, with Congress passing legislation targeting it.", question: "What is TikTok?" },
          { id: "soc-800", value: 800, answer: "The creator economy term for when an influencer's sponsor deal drives a massive, measurable sales spike.", question: "What is the 'Stanley cup effect' / influencer-driven demand?" },
          { id: "soc-1000", value: 1000, answer: "BeReal, the no-filter photo app, was acquired by this French media company in 2024.", question: "What is Voodoo?" },
        ],
      },
      {
        id: "sports-2024",
        title: "Sports Headlines",
        clues: [
          { id: "spo-200", value: 200, answer: "The 2024 Paris Olympics featured this sport's Olympic debut — breaking (breakdancing).", question: "What is breaking / breakdancing?" },
          { id: "spo-400", value: 400, answer: "Caitlin Clark's WNBA debut with this team shattered league viewership records in 2024.", question: "What is the Indiana Fever?" },
          { id: "spo-600", value: 600, answer: "Spain won the 2024 Euro Championship, but this player's unwanted kiss dominated post-final headlines.", question: "Who is Luis Rubiales?" },
          { id: "spo-800", value: 800, answer: "At 40 years old, this tennis player retired in 2024 after a doubles loss at Roland Garros.", question: "Who is Rafael Nadal?" },
          { id: "spo-1000", value: 1000, answer: "The Kansas City Chiefs won Super Bowl LVIII in 2024, with their relationship to this pop star dominating coverage.", question: "Who is Taylor Swift (Travis Kelce's girlfriend)?" },
        ],
      },
    ],
  },
  {
    id: "space-science",
    title: "Space & Science",
    description: "Black holes, Mars rovers, quantum leaps, and the universe's greatest mysteries.",
    tags: ["Science", "Space", "STEM"],
    categories: [
      {
        id: "space-missions",
        title: "Space Missions",
        clues: [
          { id: "sm-200", value: 200, answer: "NASA's Artemis program aims to return humans to this celestial body for the first time since 1972.", question: "What is the Moon?" },
          { id: "sm-400", value: 400, answer: "SpaceX's fully reusable launch system, with a 'Super Heavy' booster and 'Starship' upper stage.", question: "What is Starship?" },
          { id: "sm-600", value: 600, answer: "This Mars rover, active since 2021, is collecting rock samples for a future return mission to Earth.", question: "What is Perseverance?" },
          { id: "sm-800", value: 800, answer: "The James Webb Space Telescope orbits at this special gravitational point 1.5 million km from Earth.", question: "What is L2 (Lagrange Point 2)?" },
          { id: "sm-1000", value: 1000, answer: "India became the 4th country to land on the Moon in 2023 with this mission, landing near the south pole.", question: "What is Chandrayaan-3?" },
        ],
      },
      {
        id: "physics",
        title: "Physics & Quantum",
        clues: [
          { id: "phy-200", value: 200, answer: "Einstein's famous equation equating mass and energy.", question: "What is E=mc²?" },
          { id: "phy-400", value: 400, answer: "Google's 2024 quantum chip, 'Willow,' solved a benchmark computation that would take this many years on a classical supercomputer.", question: "What is 10 septillion years (accept: any astronomically large number)?" },
          { id: "phy-600", value: 600, answer: "The quantum phenomenon where two particles share state instantaneously regardless of distance.", question: "What is quantum entanglement?" },
          { id: "phy-800", value: 800, answer: "Scientists at the LHC detected this long-sought particle in 2012, filling the last gap in the Standard Model.", question: "What is the Higgs boson?" },
          { id: "phy-1000", value: 1000, answer: "This star type is the densest object that isn't a black hole — a teaspoon would weigh a billion tons.", question: "What is a neutron star?" },
        ],
      },
      {
        id: "biology",
        title: "Biology & Medicine",
        clues: [
          { id: "bio-200", value: 200, answer: "The CRISPR-Cas9 tool earned its inventors the 2020 Nobel Prize — it's used to do this to DNA.", question: "What is gene editing?" },
          { id: "bio-400", value: 400, answer: "These mRNA vaccines for COVID-19 were the first of their type approved for human use.", question: "What are Pfizer-BioNTech / Moderna vaccines?" },
          { id: "bio-600", value: 600, answer: "Ozempic, Wegovy, and Mounjaro all target this hormone receptor pathway for weight loss.", question: "What is GLP-1 (glucagon-like peptide-1)?" },
          { id: "bio-800", value: 800, answer: "AlphaFold 3, released in 2024, extended its protein-prediction capability to also model these molecules.", question: "What are DNA and RNA (nucleic acids)?" },
          { id: "bio-1000", value: 1000, answer: "The first pig-to-human kidney transplant in a living patient was performed at this US hospital in 2024.", question: "What is Massachusetts General Hospital?" },
        ],
      },
      {
        id: "astronomy",
        title: "Astronomy",
        clues: [
          { id: "ast-200", value: 200, answer: "The closest star to our Sun, about 4.24 light-years away.", question: "What is Proxima Centauri?" },
          { id: "ast-400", value: 400, answer: "The first photograph of a black hole's event horizon was captured in 2019 — it was the black hole at the center of this galaxy.", question: "What is M87?" },
          { id: "ast-600", value: 600, answer: "Astronomers spotted a 2024 solar event visible to the naked eye for the first time in 20 years — a recurring nova in this constellation.", question: "What is Corona Borealis (T CrB)?" },
          { id: "ast-800", value: 800, answer: "The Great Red Spot on Jupiter is this type of atmospheric feature, and it has been shrinking for decades.", question: "What is an anticyclonic storm?" },
          { id: "ast-1000", value: 1000, answer: "Discovered in 2023, this faint dwarf galaxy near the Milky Way has almost no dark matter — challenging cosmological models.", question: "What is NGC 1277 / AGC 114905 (accept: any dark-matter-free galaxy)?" },
        ],
      },
      {
        id: "climate-science",
        title: "Climate & Earth",
        clues: [
          { id: "cli-200", value: 200, answer: "2024 was officially declared this, breaking the global temperature record again.", question: "What is the hottest year on record?" },
          { id: "cli-400", value: 400, answer: "The 'tipping point' concept warns that passing certain thresholds in the climate system could trigger irreversible these.", question: "What are feedback loops / cascades?" },
          { id: "cli-600", value: 600, answer: "Lithium, used in EV batteries, is mined in large quantities in this South American 'triangle' of countries.", question: "What is Chile, Argentina, and Bolivia?" },
          { id: "cli-800", value: 800, answer: "The 2015 Paris Agreement set this maximum temperature rise target above pre-industrial levels.", question: "What is 1.5°C (with 2°C as a limit)?" },
          { id: "cli-1000", value: 1000, answer: "This volcanic eruption in Tonga in 2022 sent a shockwave around Earth and temporarily boosted stratospheric water vapor.", question: "What is Hunga Tonga-Hunga Ha'apai?" },
        ],
      },
      {
        id: "tech-inventions",
        title: "Inventions & Breakthroughs",
        clues: [
          { id: "inv-200", value: 200, answer: "Nuclear power plants that use hydrogen as fuel and emit only water — heavily funded and nearly commercial as of 2025.", question: "What is nuclear fusion? (accept: hydrogen fuel cells)" },
          { id: "inv-400", value: 400, answer: "Amazon's Project Kuiper and SpaceX's Starlink are both this type of internet infrastructure.", question: "What is a low-Earth orbit satellite constellation?" },
          { id: "inv-600", value: 600, answer: "Neuralink's first human patient, revealed in 2024, used the brain-computer interface to do this task with his mind.", question: "What is control a computer cursor / play chess?" },
          { id: "inv-800", value: 800, answer: "This battery chemistry, using sodium instead of lithium, promises lower cost and greater abundance.", question: "What is sodium-ion batteries?" },
          { id: "inv-1000", value: 1000, answer: "This 2024 Nobel Prize in Physics honored two scientists for their foundational work enabling the entire deep learning revolution.", question: "Who are Geoffrey Hinton and John Hopfield?" },
        ],
      },
    ],
  },
  {
    id: "world-geography",
    title: "World Geography",
    description: "Capitals, rivers, mountains, and the political map of our planet.",
    tags: ["Geography", "Education", "World"],
    categories: [
      {
        id: "capitals",
        title: "World Capitals",
        clues: [
          { id: "cap-200", value: 200, answer: "The capital of Australia — not Sydney.", question: "What is Canberra?" },
          { id: "cap-400", value: 400, answer: "This city became Brazil's capital in 1960, built from scratch in the interior of the country.", question: "What is Brasília?" },
          { id: "cap-600", value: 600, answer: "Astana is the capital of this large Central Asian nation.", question: "What is Kazakhstan?" },
          { id: "cap-800", value: 800, answer: "This tiny nation within Rome is the world's smallest country by area.", question: "What is Vatican City?" },
          { id: "cap-1000", value: 1000, answer: "Indonesia moved its capital from Jakarta to this newly built city on the island of Borneo in 2024.", question: "What is Nusantara?" },
        ],
      },
      {
        id: "mountains",
        title: "Mountains & Peaks",
        clues: [
          { id: "mnt-200", value: 200, answer: "The tallest mountain on Earth, measured from sea level.", question: "What is Mount Everest?" },
          { id: "mnt-400", value: 400, answer: "The Andes mountain range runs along the western coast of this continent.", question: "What is South America?" },
          { id: "mnt-600", value: 600, answer: "K2, the second-highest mountain, sits on the border of Pakistan and this region.", question: "What is China (Xinjiang)?" },
          { id: "mnt-800", value: 800, answer: "Mauna Kea in Hawaii is technically taller than Everest when measured from this starting point.", question: "What is the ocean floor / sea bed?" },
          { id: "mnt-1000", value: 1000, answer: "This active volcano in Iceland erupted repeatedly in 2023-2024, forcing evacuations of the town of Grindavík.", question: "What is Fagradalsfjall / Sundhnúksgígar?" },
        ],
      },
      {
        id: "rivers-oceans",
        title: "Rivers & Oceans",
        clues: [
          { id: "riv-200", value: 200, answer: "The world's longest river, flowing through Egypt.", question: "What is the Nile?" },
          { id: "riv-400", value: 400, answer: "The Amazon River flows through the rainforest and empties into this ocean.", question: "What is the Atlantic Ocean?" },
          { id: "riv-600", value: 600, answer: "The Danube River flows through 10 countries — more than any other river in the world — and empties into this sea.", question: "What is the Black Sea?" },
          { id: "riv-800", value: 800, answer: "The Mariana Trench, the deepest point on Earth's ocean floor, is located in this ocean.", question: "What is the Pacific Ocean?" },
          { id: "riv-1000", value: 1000, answer: "This river forms the border between the US states of Arizona and California.", question: "What is the Colorado River?" },
        ],
      },
      {
        id: "countries",
        title: "Countries & Borders",
        clues: [
          { id: "cou-200", value: 200, answer: "The country with the most land borders in the world, sharing borders with 14 nations.", question: "What is China (or Russia, tied at 14)?" },
          { id: "cou-400", value: 400, answer: "This island nation in the Indian Ocean, known for its beaches, was the first country to sink below sea level due to rising seas.", question: "What is Maldives / Kiribati?" },
          { id: "cou-600", value: 600, answer: "Landlocked and surrounded entirely by South Africa, this small monarchy is home to Maseru.", question: "What is Lesotho?" },
          { id: "cou-800", value: 800, answer: "The only country whose name in English begins and ends with the same letter — A.", question: "What is Argentina?" },
          { id: "cou-1000", value: 1000, answer: "This country has the most time zones of any nation in the world, spanning 11.", question: "What is Russia?" },
        ],
      },
      {
        id: "landmarks",
        title: "Landmarks",
        clues: [
          { id: "lmk-200", value: 200, answer: "The ancient wonder located in Giza, Egypt — the only one of the 7 Wonders of the Ancient World still standing.", question: "What is the Great Pyramid?" },
          { id: "lmk-400", value: 400, answer: "Machu Picchu, the Incan citadel, is located in the mountains of this country.", question: "What is Peru?" },
          { id: "lmk-600", value: 600, answer: "This 'floating' temple in Myanmar sits on top of a golden rock on the edge of a cliff.", question: "What is Kyaiktiyo Pagoda / Golden Rock?" },
          { id: "lmk-800", value: 800, answer: "Petra, the 'Rose City' carved into red rock, is the most-visited tourist attraction of this Middle Eastern country.", question: "What is Jordan?" },
          { id: "lmk-1000", value: 1000, answer: "The Church of the Holy Sepulchre, believed to mark the site of Jesus's crucifixion, is located in this city.", question: "What is Jerusalem?" },
        ],
      },
      {
        id: "geo-facts",
        title: "Geographic Records",
        clues: [
          { id: "gf-200", value: 200, answer: "The world's largest country by land area.", question: "What is Russia?" },
          { id: "gf-400", value: 400, answer: "The world's most populous country as of 2023, surpassing China.", question: "What is India?" },
          { id: "gf-600", value: 600, answer: "The Sahara Desert stretches across how many countries — 10, 11, or 12?", question: "What is 11 countries?" },
          { id: "gf-800", value: 800, answer: "This is the driest non-polar desert on Earth, located in South America.", question: "What is the Atacama Desert?" },
          { id: "gf-1000", value: 1000, answer: "The smallest country in the world by population is this Pacific island nation with around 1,500 people.", question: "What is Nauru?" },
        ],
      },
    ],
  },
  {
    id: "movies-streaming",
    title: "Movies & Streaming",
    description: "Oscars, box office, streaming wars, and cinematic history.",
    tags: ["Movies", "Entertainment", "Streaming"],
    categories: [
      {
        id: "oscar-winners",
        title: "Oscar Winners",
        clues: [
          { id: "osc-200", value: 200, answer: "This film about the Manhattan Project won Best Picture at the 2024 Oscars.", question: "What is Oppenheimer?" },
          { id: "osc-400", value: 400, answer: "Cillian Murphy won Best Actor for playing this physicist in 2024.", question: "Who is J. Robert Oppenheimer?" },
          { id: "osc-600", value: 600, answer: "The first animated film to win the Academy Award for Best Picture.", question: "What is… (none yet — no animated film has won Best Picture)?" },
          { id: "osc-800", value: 800, answer: "This South Korean film made history in 2020 as the first non-English-language Best Picture winner.", question: "What is Parasite?" },
          { id: "osc-1000", value: 1000, answer: "Held the record for most Oscars won by a single film (11) — shared by three movies including Titanic.", question: "What is Ben-Hur / Titanic / The Lord of the Rings: Return of the King?" },
        ],
      },
      {
        id: "streaming-wars",
        title: "Streaming Wars",
        clues: [
          { id: "stw-200", value: 200, answer: "Netflix's most-watched series of all time as of 2024, a South Korean survival drama.", question: "What is Squid Game?" },
          { id: "stw-400", value: 400, answer: "This Amazon Prime Video show based on a dark comic book hit its Season 4 in 2024.", question: "What is The Boys?" },
          { id: "stw-600", value: 600, answer: "Disney+, Hulu, and this sport-focused service were bundled together in a 2024 package deal.", question: "What is ESPN+?" },
          { id: "stw-800", value: 800, answer: "HBO rebranded its streaming service to this name in 2023.", question: "What is Max?" },
          { id: "stw-1000", value: 1000, answer: "This service, launched by NBCUniversal, merged with Discovery+ in 2024.", question: "What is Peacock? (or: Max — accept either for the merger question)" },
        ],
      },
      {
        id: "franchise",
        title: "Franchises & Sequels",
        clues: [
          { id: "fra-200", value: 200, answer: "The Marvel movie that officially kicked off Phase 4 of the MCU after Endgame.", question: "What is Black Widow / Shang-Chi (accept either)?" },
          { id: "fra-400", value: 400, answer: "Tom Cruise's best-reviewed film, a long-delayed sequel about fighter pilots, became a 2022 blockbuster.", question: "What is Top Gun: Maverick?" },
          { id: "fra-600", value: 600, answer: "This 2023 film, based on a toy brand, became the highest-grossing film ever directed by a woman.", question: "What is Barbie?" },
          { id: "fra-800", value: 800, answer: "Alien: Romulus (2024) was a standalone entry in the franchise set between the events of these two films.", question: "What is Alien and Aliens?" },
          { id: "fra-1000", value: 1000, answer: "This 2024 film — part of a franchise — overtook Avengers: Endgame as the highest-grossing film of the year.", question: "What is Inside Out 2?" },
        ],
      },
      {
        id: "directors",
        title: "Directors",
        clues: [
          { id: "dir-200", value: 200, answer: "Director of Oppenheimer, The Dark Knight, and Inception — known for practical effects and nonlinear storytelling.", question: "Who is Christopher Nolan?" },
          { id: "dir-400", value: 400, answer: "Greta Gerwig directed this 2023 blockbuster after her indie films Lady Bird and Little Women.", question: "What is Barbie?" },
          { id: "dir-600", value: 600, answer: "This Japanese director, known for Spirited Away and Princess Mononoke, came out of retirement to direct The Boy and the Heron.", question: "Who is Hayao Miyazaki?" },
          { id: "dir-800", value: 800, answer: "Denis Villeneuve directed both parts of Dune and is known for his adaptation of this short sci-fi story into the film Arrival.", question: "What is 'Story of Your Life' by Ted Chiang?" },
          { id: "dir-1000", value: 1000, answer: "This auteur's first studio film was The Power of the Dog (2021), which led to her Oscar win — the first for a woman of color.", question: "Who is Jane Campion?" },
        ],
      },
      {
        id: "classic-films",
        title: "Cinema Classics",
        clues: [
          { id: "clf-200", value: 200, answer: "Stanley Kubrick's film adaptation of Stephen King's novel about a haunted hotel.", question: "What is The Shining?" },
          { id: "clf-400", value: 400, answer: "The 1994 film featuring Tom Hanks as a man on a bench saying 'Life is like a box of chocolates.'", question: "What is Forrest Gump?" },
          { id: "clf-600", value: 600, answer: "Steven Spielberg's 1993 film about bringing dinosaurs back to life through cloning.", question: "What is Jurassic Park?" },
          { id: "clf-800", value: 800, answer: "The Godfather was based on the novel by this author, published in 1969.", question: "Who is Mario Puzo?" },
          { id: "clf-1000", value: 1000, answer: "Akira Kurosawa's 1954 samurai epic that was the basis for The Magnificent Seven and A Bug's Life.", question: "What is Seven Samurai?" },
        ],
      },
      {
        id: "box-office",
        title: "Box Office Records",
        clues: [
          { id: "box-200", value: 200, answer: "The highest-grossing film of all time (not adjusted for inflation).", question: "What is Avatar (2009, re-releases) / Avengers: Endgame?" },
          { id: "box-400", value: 400, answer: "The 2023 film that famously had a '$1 billion opening weekend' and debuted on the same day as Oppenheimer, spawning 'Barbenheimer'.", question: "What is Barbie?" },
          { id: "box-600", value: 600, answer: "The lowest-budget film to ever hit $1 billion at the worldwide box office was this 1999 horror mock-doc.", question: "What is The Blair Witch Project? (accept: no — it didn't hit $1B; Paranormal Activity comes close)" },
          { id: "box-800", value: 800, answer: "The highest-grossing R-rated film of all time as of 2025.", question: "What is Deadpool & Wolverine?" },
          { id: "box-1000", value: 1000, answer: "This 2024 animated film sequel from Pixar overtook Frozen II as the highest-grossing animated film ever.", question: "What is Inside Out 2?" },
        ],
      },
    ],
  },
];
