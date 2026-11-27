// Every game on the site lives here. Add a game by adding an entry:
// it gets a card on the home page, a page at /games/<slug>/, and a press kit
// at /presskit/<slug>/ (unless `pressKitHref` points somewhere else).

export const DISCORD_URL = "https://discord.gg/N72e47Etac";
/** Set this to show a press email on every press kit. */
export const PRESS_EMAIL: string | null = null;
/** Shown on the press kits' seal. */
export const PRESS_UPDATED = "November 2026";

/** Heraldic tinctures. Metals (or, argent) go on colours (sable, gules, azure, vert), never metal on metal. */
export const TINCTURES = {
  or: "#e8ac1c",
  argent: "#fffaf0",
  sable: "#15110e",
  gules: "#c8161d",
  azure: "#2a45a8",
  vert: "#2f7d3b",
} as const;
export type Tincture = keyof typeof TINCTURES;

export type Arms = {
  /** One tincture fills the shield; two split it "per bend" (diagonally). */
  field: [Tincture] | [Tincture, Tincture];
  charge: "cursor" | "bezants" | "tankard";
  chargeTincture: Tincture;
  /** The arms described in heraldic language. */
  blazon: string;
};

export type Fact = { label: string; value: string; href?: string };
export type Feature = { title: string; text: string };
export type Download = { label: string; detail: string; preview: string; file: string };

export type Game = {
  slug: string;
  name: string;
  status: string;
  /** Page accent; also the card's hover shadow. */
  accent: string;
  arms: Arms;
  /** One line for cards and press kits. */
  tagline: string;
  /** Paragraphs for the game page and press kit. */
  description: string[];
  tags: string[];
  art?: { src: string; alt: string; fit: "cover" | "contain"; background: string; showsTitle?: boolean };
  primaryLink: { label: string; href: string };
  facts: Fact[];
  featuresHeading: string;
  features: Feature[];
  pressPoints?: { heading: string; items: string[] };
  downloads?: Download[];
  /** A zip in public/assets/press/, built from the folder of the same name. */
  pressZip?: string;
  /** Set when the press kit is a standalone page in /public. */
  pressKitHref?: string;
};

const SPARK_STEAM = "https://store.steampowered.com/app/601130/Spark/";
const CQ_STEAM = "https://store.steampowered.com/app/5297900/Cursor_Quest/";
const LC4A_SITE = "https://www.lc4a.com/";

export const games: Game[] = [
  {
    slug: "cursor-quest",
    name: "Cursor Quest",
    status: "Coming 2027",
    accent: TINCTURES.vert,
    arms: { field: ["or", "vert"], charge: "cursor", chargeTincture: "sable", blazon: "Per bend Or and Vert, a cursor Sable fimbriated Argent" },
    tagline: "A single-player action RPG where you play as your mouse cursor.",
    description: [
      "Your mouse cursor has spent enough time just clicking on things. It wants to do more. It wants to adventure!",
      "Cursor Quest is a single-player action RPG where you play as your cursor. Swing weapons, defeat monsters, gather resources, craft gear, find epic and rare equipment, and work your way through dozens of handcrafted regions.",
    ],
    tags: ["Action RPG", "PC, Mac, Linux"],
    art: { src: "/assets/img/cursor-quest/capsule-wide.jpg", alt: "Cursor Quest key art", fit: "cover", background: "#bfe3a5", showsTitle: true },
    primaryLink: { label: "Wishlist on Steam", href: CQ_STEAM },
    facts: [
      { label: "Genre", value: "Action RPG" },
      { label: "Players", value: "Single-player" },
      { label: "Platforms", value: "Windows, macOS (Apple Silicon), Linux" },
      { label: "Input", value: "Mouse and keyboard" },
      { label: "Release", value: "2027" },
      { label: "Store", value: "Steam", href: CQ_STEAM },
    ],
    featuresHeading: "Features",
    features: [
      { title: "Your cursor is the hero", text: "You don't steer a hero with your mouse. Your cursor is the hero: it holds the sword, takes the hits, and earns the levels." },
      { title: "Put your mouse skills to the test", text: "Your cursor movement drives positioning and weapons. Build momentum for a strike, dodge clear, and cast spells with a flick of the wrist." },
      { title: "Build your cursor", text: "Sword and shield, two-handers, or spells. Mix in capes, prayers, pets, and rare gear to find a loadout that fits." },
      { title: "Real skill progression", text: "Chop trees, mine ore, and fish with real cursor movement. Skills grow as you use them and unlock better resources and gear." },
      { title: "Find your next adventure", text: "Dungeons, bosses, rare discoveries, and a living world that changes over time." },
    ],
    pressKitHref: "/presskit/cursor-quest/index.html",
  },
  {
    slug: "spark",
    name: "Spark",
    status: "Free on Steam",
    accent: TINCTURES.or,
    arms: { field: ["sable"], charge: "bezants", chargeTincture: "or", blazon: "Sable, four bezants in cross" },
    tagline: "A free, combo-driven shoot 'em up with three arcade modes and Steam leaderboards.",
    description: [
      "Spark is a creative, combo-centric shoot 'em up: three arcade games in one, built around climbing the leaderboards.",
      "Four bullet types, each with its own power and speed, feed a combo system that every mode is built on. Learn them, chain them, and push your score up the boards.",
    ],
    tags: ["Shoot 'em up", "Windows, Mac"],
    primaryLink: { label: "Play free on Steam", href: SPARK_STEAM },
    facts: [
      { label: "Developer", value: "Knightmare Games, Limited" },
      { label: "Genre", value: "Shoot 'em up, arcade" },
      { label: "Released", value: "November 10, 2017" },
      { label: "Platforms", value: "Windows, macOS" },
      { label: "Price", value: "Free to play" },
      { label: "Extras", value: "Steam leaderboards, 11 achievements" },
      { label: "Store", value: "Steam", href: SPARK_STEAM },
    ],
    featuresHeading: "Three modes, four bullets",
    features: [
      { title: "Conquest", text: "Shoot down enemies with complex bullet patterns and coordinated movement, then take on the boss." },
      { title: "Survival", text: "Stay alive as long as you can. Chain combos to clear the screen, grab powerups, and dodge dense bullet patterns." },
      { title: "Puzzles", text: "Solve as many timed puzzles as you can with precision and timing." },
      { title: "Four bullet types", text: "Each bullet type trades power for speed. Mastering combos between them is the key to every mode." },
    ],
  },
  {
    slug: "last-call-for-alcohol",
    name: "Last Call for Alcohol",
    status: "Released",
    accent: TINCTURES.azure,
    arms: { field: ["azure"], charge: "tankard", chargeTincture: "or", blazon: "Azure, a tankard Or" },
    tagline: "A fast drinking card game for 3 to 12 players where you only know your own card.",
    description: [
      "Tired of beer pong and kings? Last Call for Alcohol is a new-school drinking card game that is just as fun sober as when you can barely read the cards.",
      "Three actions are all you need: Swap, Shift, or Skip to collect the lowest-value card on the table. The catch is that you only know the value of your own card, so you'll need to read your friends to work out theirs. The first player to go over 20 points, or to turn over the X card, ends the game, and the lowest score wins.",
    ],
    tags: ["Tabletop", "3 to 12 players", "21+"],
    art: { src: "/assets/img/lc4a/deck-and-box.webp", alt: "Last Call for Alcohol deck and box", fit: "contain", background: "#e8ac1c" },
    primaryLink: { label: "Visit lc4a.com", href: LC4A_SITE },
    facts: [
      { label: "Publisher", value: "Knightmare Games, Limited" },
      { label: "Type", value: "Tabletop card game" },
      { label: "Players", value: "3 to 12" },
      { label: "Age", value: "21+" },
      { label: "Play time", value: "About 10 minutes" },
      { label: "Graphic art", value: "WizardPistol" },
      { label: "Web", value: "lc4a.com", href: LC4A_SITE },
    ],
    featuresHeading: "How it plays",
    features: [
      { title: "Three actions", text: "Swap, Shift, or Skip to end up holding the lowest card on the table. The higher your card, the more you drink." },
      { title: "Know only your own card", text: "You only know the value of your own card. Read your friends and work out everyone else's." },
      { title: "Fast rounds", text: "First player to go over 20 points, or to turn over the X card, ends the game. Lowest score wins." },
      { title: "Any group size", text: "Quick to learn for new players, with enough strategy that veterans still have an edge. Plays 3 to 12." },
    ],
    pressPoints: {
      heading: "Selling points",
      items: [
        "Smooth gameplay with large groups.",
        "Approachable mechanics and quick play times let new players jump in.",
        "A fresh take on classic 52-card drinking games.",
        "A balance of skill and luck lets beginners take big wins off veterans.",
      ],
    },
    downloads: [
      { label: "Deck and box", detail: "PNG, 875 x 814, transparent", preview: "/assets/img/lc4a/deck-and-box.webp", file: "/assets/press/last-call-for-alcohol/deck-and-box.png" },
      { label: "Cards", detail: "PNG, 2000 x 1613, transparent", preview: "/assets/img/lc4a/floating-cards.webp", file: "/assets/press/last-call-for-alcohol/cards.png" },
      { label: "Logo", detail: "PNG, 385 x 157, transparent", preview: "/assets/img/lc4a/logo.png", file: "/assets/press/last-call-for-alcohol/logo.png" },
      { label: "Sell sheet", detail: "PDF, 1 page", preview: "/assets/img/lc4a/sell-sheet.jpg", file: "/assets/press/last-call-for-alcohol/sell-sheet.pdf" },
    ],
    pressZip: "/assets/press/last-call-for-alcohol.zip",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function pressKitHref(game: Game): string {
  return game.pressKitHref ?? `/presskit/${game.slug}/`;
}

/** The fact sheet as plain text, for the copy button. */
export function factsAsText(game: Game): string {
  return [game.name, ...game.facts.map((f) => `${f.label}: ${f.value}${f.href ? ` (${f.href})` : ""}`)].join("\n");
}
