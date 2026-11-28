// Every game on the site lives here. Add a game by adding an entry:
// it gets a card on the home page, a page at /games/<slug>/, and a press kit
// at /presskit/<slug>/.

export const PRESS_EMAIL = "contact@knightmare.games";
export const DISCORD_URL = "https://discord.gg/KHKPuXfq6S";
export const SOCIALS = [
  { label: "Discord", href: DISCORD_URL },
  { label: "X", href: "https://x.com/Knightmare_ES" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCzAYSSMF095XRlV1PKJGkmw" },
];
/** The studio boilerplate on every game's press kit. */
export const STUDIO_BLURB =
  "Knightmare Games is a small independent studio in Denver, Colorado, making video games and tabletop games. Its games are Cursor Quest, an action RPG you play as your mouse cursor; Spark, a free arcade shooter on Steam; and Last Call for Alcohol, a drinking card game.";

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
export type Screenshot = { caption?: string; detail: string; preview: string; file: string };
export type Trailer = { title: string; detail: string; poster: string; file: string };

export type Game = {
  slug: string;
  name: string;
  status: string;
  /** Page accent; also the card's hover shadow. */
  accent: string;
  arms: Arms;
  /** One line for cards. */
  tagline: string;
  /** The store page's short description, when it differs from the tagline. */
  shortDescription?: string;
  /** Paragraphs for the game page and press kit. */
  description: string[];
  tags: string[];
  art: { src: string; alt: string; fit: "cover" | "contain"; background: string };
  primaryLink: { label: string; href: string };
  facts: Fact[];
  featuresHeading: string;
  features: Feature[];
  pressPoints?: { heading: string; items: string[] };
  trailer?: Trailer;
  screenshots?: Screenshot[];
  downloads?: Download[];
  /** A zip in public/assets/press/, built from the folder of the same name. */
  pressZip?: string;
};

const SPARK_STEAM = "https://store.steampowered.com/app/601130/Spark/";
const CQ_STEAM = "https://store.steampowered.com/app/5297900/Cursor_Quest/";
const LC4A_SITE = "https://www.lc4a.com/";

const CQ_PRESS = "/assets/press/cursor-quest";
const CQ_IMG = "/assets/img/cursor-quest";
const cqShot = (file: string, caption: string): Screenshot => ({
  caption,
  detail: "PNG, 1920 × 1080",
  preview: `${CQ_IMG}/shots/${file}.webp`,
  file: `${CQ_PRESS}/screenshots/cursor-quest-${file}.png`,
});

export const games: Game[] = [
  {
    slug: "cursor-quest",
    name: "Cursor Quest",
    status: "Coming 2027",
    accent: TINCTURES.vert,
    arms: { field: ["or", "vert"], charge: "cursor", chargeTincture: "sable", blazon: "Per bend Or and Vert, a cursor Sable fimbriated Argent" },
    tagline: "An action RPG where your mouse cursor is the character.",
    shortDescription:
      "Cursor Quest is an action RPG where your mouse cursor is the character. Swing weapons with your movement, dodge attacks, gather resources, train skills, craft gear, explore dungeons, and grow your cursor into a fantasy hero.",
    description: [
      "Your mouse cursor has spent enough time just clicking on things. It wants to do more. It wants to adventure!",
      "Cursor Quest is a single-player action RPG where you play as your cursor. Swing weapons, defeat monsters, gather resources, craft gear, find epic and rare equipment, and work your way through dozens of handcrafted regions.",
    ],
    tags: ["Action RPG", "PC, Mac, Linux"],
    art: { src: "/assets/img/cursor-quest/capsule-wide.jpg", alt: "Cursor Quest key art", fit: "cover", background: "#bfe3a5" },
    primaryLink: { label: "Wishlist on Steam", href: CQ_STEAM },
    facts: [
      { label: "Developer", value: "Knightmare Games, Limited" },
      { label: "Publisher", value: "Knightmare Games, Limited" },
      { label: "Release", value: "2027" },
      { label: "Platforms", value: "Windows, macOS (Apple Silicon), Linux" },
      { label: "Genre", value: "Action, Adventure, Casual, Indie, RPG" },
      { label: "Tags", value: "Action RPG, Exploration, Hack and Slash, Character Customization, Loot, Magic" },
      { label: "Players", value: "Single-player" },
      { label: "Languages", value: "English" },
      { label: "Controls", value: "Mouse and keyboard" },
      { label: "Price", value: "To be announced" },
      { label: "Store", value: "Steam", href: CQ_STEAM },
    ],
    featuresHeading: "Features",
    features: [
      {
        title: "Put your mouse skills to the test",
        text: "Your cursor movements drive your positioning and your weapons. Build momentum for a strike, move clear of an incoming attack, and cast powerful spells and incantations. All with a little flick of the wrist.",
      },
      {
        title: "Build your cursor",
        text: "Your cursor has two hands? Yeah. Don't think too hard about that. But you've got a ridiculous number of ways to put them to work. Go sword and shield, swing a heavy two-handed weapon, or start throwing spells around. Mix in capes, prayers, pets, and rare gear to find combinations that fit your playstyle. Or let something you find on an expedition give you an excuse to try a completely different build. There's a loadout for everyone out there.",
      },
      {
        title: "Real skill progression",
        text: "But that's not all your cursor can do. Swing an axe to chop trees, mine ore with your pickaxe, and cast a line to catch fish. Cook your catch for the next fight and turn your ore into new gear. Your skills grow as you use them, unlocking better resources and equipment. There's always another upgrade to work toward.",
      },
      {
        title: "Find your next adventure",
        text: "Head into handcrafted regions full of monsters, resources, and things worth wandering off the path for. Find your favorite places to train, venture into dungeons, and take on bosses that put your build and your skills to the test. Explore a living, changing world full of rare discoveries and new reasons to revisit your favorite places.",
      },
    ],
    trailer: {
      title: "Announcement trailer",
      detail: "MP4, 1920 × 1080, 60 fps, 1:20",
      poster: `${CQ_IMG}/trailer-poster.jpg`,
      file: `${CQ_PRESS}/cursor-quest-announcement-trailer.mp4`,
    },
    screenshots: [
      cqShot("01-warden", "Fighting the Brimstone Warden"),
      cqShot("02-lightning", "Calling down lightning in a dungeon"),
      cqShot("03-mining", "Mining ore"),
      cqShot("04-fishing", "Fishing at the lake"),
      cqShot("05-broodmother", "The Broodmother appears"),
      cqShot("06-frost-wand", "A yeti frozen by the frost wand"),
    ],
    downloads: [
      { label: "Logo", detail: "SVG, vector", preview: `${CQ_IMG}/logo.svg`, file: `${CQ_PRESS}/logo.svg` },
      { label: "Logo", detail: "PNG, 1280 × 755, transparent", preview: `${CQ_IMG}/logo-1280.webp`, file: `${CQ_PRESS}/logo-1280.png` },
      { label: "Q icon", detail: "PNG, 1024 × 1024", preview: `${CQ_IMG}/icon.webp`, file: `${CQ_PRESS}/icon-1024.png` },
      { label: "Key art, wide", detail: "PNG, 2000 × 754", preview: `${CQ_IMG}/key-art-wide.webp`, file: `${CQ_PRESS}/key-art-wide.png` },
      { label: "Main capsule", detail: "PNG, 1232 × 706", preview: `${CQ_IMG}/capsule-main.webp`, file: `${CQ_PRESS}/capsule-main-1232x706.png` },
      { label: "Header capsule", detail: "PNG, 920 × 430", preview: `${CQ_IMG}/capsule-header.webp`, file: `${CQ_PRESS}/capsule-header-920x430.png` },
      { label: "Vertical capsule", detail: "PNG, 748 × 896", preview: `${CQ_IMG}/capsule-vertical.webp`, file: `${CQ_PRESS}/capsule-vertical-748x896.png` },
      { label: "Hero art, no logo", detail: "PNG, 3840 × 1240", preview: `${CQ_IMG}/hero.webp`, file: `${CQ_PRESS}/hero-3840x1240.png` },
    ],
    pressZip: "/assets/press/cursor-quest.zip",
  },
  {
    slug: "spark",
    name: "Spark",
    status: "Free on Steam",
    accent: TINCTURES.or,
    arms: { field: ["sable"], charge: "bezants", chargeTincture: "or", blazon: "Sable, four bezants in cross" },
    tagline: "A free, combo-driven shoot 'em up with three arcade modes and Steam leaderboards.",
    description: [
      "Spark is a free shoot 'em up with three arcade modes, built on four bullet types and the combos between them.",
      "Learn the bullets, chain the combos, and push your score up the Steam leaderboards.",
    ],
    tags: ["Shoot 'em up", "Windows, Mac"],
    art: { src: "/assets/img/spark/capsule.jpg", alt: "Spark key art", fit: "cover", background: "#15110e" },
    primaryLink: { label: "Play free on Steam", href: SPARK_STEAM },
    screenshots: [1, 2, 3, 4, 5, 6].map((n) => ({
      detail: "JPG, 920 × 459",
      preview: `/assets/img/spark/shots/0${n}.webp`,
      file: `/assets/press/spark/screenshots/spark-0${n}.jpg`,
    })),
    downloads: [
      { label: "Capsule art", detail: "JPG, 616 × 353", preview: "/assets/img/spark/capsule.jpg", file: "/assets/press/spark/spark-capsule-616x353.jpg" },
      { label: "Header", detail: "JPG, 460 × 215", preview: "/assets/press/spark/spark-header-460x215.jpg", file: "/assets/press/spark/spark-header-460x215.jpg" },
    ],
    pressZip: "/assets/press/spark.zip",
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
      { title: "Know only your own card", text: "Read your friends and work out everyone else's." },
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
      { label: "Deck and box", detail: "PNG, 875 × 814, transparent", preview: "/assets/img/lc4a/deck-and-box.webp", file: "/assets/press/last-call-for-alcohol/deck-and-box.png" },
      { label: "Cards", detail: "PNG, 2000 × 1613, transparent", preview: "/assets/img/lc4a/floating-cards.webp", file: "/assets/press/last-call-for-alcohol/cards.png" },
      { label: "Logo", detail: "PNG, 385 × 157, transparent", preview: "/assets/img/lc4a/logo.png", file: "/assets/press/last-call-for-alcohol/logo.png" },
      { label: "Sell sheet", detail: "PDF, 1 page", preview: "/assets/img/lc4a/sell-sheet.jpg", file: "/assets/press/last-call-for-alcohol/sell-sheet.pdf" },
    ],
    pressZip: "/assets/press/last-call-for-alcohol.zip",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function pressKitHref(game: Game): string {
  return `/presskit/${game.slug}/`;
}

/** The fact sheet as plain text, for the copy button. */
export function factsAsText(game: Game): string {
  return [game.name, ...game.facts.map((f) => `${f.label}: ${f.value}${f.href ? ` (${f.href})` : ""}`)].join("\n");
}
