export type BuildStatus = "live" | "iterated" | "candidate" | "future";

export interface BuildMeta {
  id: string;
  number: number;
  title: string;
  date: string;
  tagline: string;
  summary: string;
  principles: string[];
  status: BuildStatus;
  fieldNotes: {
    whyThisExists: string;
    whatChanged?: string[];
    artDirection?: string;
    nextMove?: string;
    promotionRead?: string;
  };
}

export const liveBuilds: BuildMeta[] = [
  {
    "id": "001",
    "number": 1,
    "title": "Signal Atlas",
    "date": "2026-03-07",
    "tagline": "Weak-signal capture before ideas fully form.",
    "summary": "A tiny tool for collecting and clustering early signals so combinatorial insight can happen sooner.",
    "principles": [
      "make invisible processes legible",
      "compress complexity while preserving essence",
      "extend human cognition without obscuring agency"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Most meaningful ideas begin as weak fragments. Signal Atlas gives them a visible shape before they disappear.",
      "whatChanged": [
        "Initial prototype built as a local single-page artifact"
      ],
      "artDirection": "Pre-art-direction era Night Lab build.",
      "nextMove": "Add persistence and relationships between signals.",
      "promotionRead": "Interesting, but not yet a promotion candidate."
    }
  },
  {
    "id": "002",
    "number": 2,
    "title": "Proof Thread",
    "date": "2026-03-08",
    "tagline": "Visible reasoning lineage for work that should remain inspectable.",
    "summary": "A lightweight proof-chain interface for linking decisions, artifacts, rationale, confidence, and relationships.",
    "principles": [
      "prefer verification over vague trust",
      "turn continuity into infrastructure",
      "make invisible processes legible",
      "compress complexity while preserving essence"
    ],
    "status": "candidate",
    "fieldNotes": {
      "whyThisExists": "Important work often loses its reasoning trail. Proof Thread keeps the chain visible without becoming heavy documentation.",
      "whatChanged": [
        "v1.1 added links, confidence, export, filters, and audit mode",
        "v1.2 added editing, relationship map, and comparison surface"
      ],
      "artDirection": "Default Night Lab art direction used \u2014 frontend-a2n inspired editorial systems minimalism with Geist + JetBrains Mono.",
      "nextMove": "Add persistence, multiple saved threads, and a stronger distinction between confidence and significance.",
      "promotionRead": "Strong promotion candidate."
    }
  },
  {
    "id": "003",
    "number": 3,
    "title": "Threshold Atlas",
    "date": "2026-03-09",
    "tagline": "A temporal instrument for watching uncertain signals approach commitment.",
    "summary": "Threshold Atlas maps recurrence, confidence, and threshold pressure before an idea becomes a full project. It treats emerging direction as something to inspect, not just feel.",
    "principles": [
      "Make invisible processes legible",
      "Extend human cognition without obscuring agency",
      "Compress complexity while preserving essence",
      "Turn continuity into infrastructure"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Important decisions are often made in the pre-commitment zone, when signals keep returning but have not yet become stable enough to justify a full move. This build makes that in-between state visible.",
      "whatChanged": [
        "Built an atlas view that positions signals by confidence and recurrence instead of defaulting to cards or dashboards.",
        "Added restrained state color to show threshold pressure, volatility, and stabilization without breaking the Night Lab visual language.",
        "Added a month scrubber so the map can be read as a temporal object across snapshots or as a full trace.",
        "v1.2 removed explanatory shell copy from the build itself and expanded the map into the primary experience so the artifact reads more like a real instrument."
      ],
      "artDirection": "Default Night Lab direction used, with muted earth-toned accents to mark temperature and commitment pressure. Color stays structural rather than decorative.",
      "nextMove": "Make signals editable, allow threshold movement, and test a stronger mathematical field treatment so the atlas becomes a real decision instrument rather than only a beautiful read surface.",
      "promotionRead": "Maybe. The concept still feels too close to earlier signal territory, but the actual artifact is now cleaner and more honest than the first published pass."
    }
  },
  {
    "id": "004",
    "number": 4,
    "title": "Handoff Note",
    "date": "2026-03-10",
    "tagline": "A tiny instrument for handing context from one mind to the next.",
    "summary": "Handoff Note captures the fragile transition moment when work passes between people, devices, or sessions. It turns continuity into a compact artifact instead of a vague memory.",
    "principles": [
      "Turn continuity into infrastructure",
      "Make invisible processes legible",
      "Extend human cognition without obscuring agency",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Important work often breaks not during the work itself, but during the handoff between one person, one session, or one device and the next. This build tries to make that transition legible and usable.",
      "whatChanged": [
        "Built a compact handoff-writing surface instead of another abstract map or atlas.",
        "Focused the artifact on one concrete human moment: leaving context behind without losing what matters.",
        "Used a restrained dark theme to give the handoff surface a calm, low-light operational feel.",
        "v1.1 removed explanatory concept copy from the product surface and added visible handoff actions and lifecycle states.",
        "v1.2 made handoffs editable and deletable, added receiver-side actions, simplified lifecycle understanding, and added an intention-vs-reality comparison layer."
      ],
      "artDirection": "Intentional dark theme used. It stays restrained, editorial, and high-contrast rather than drifting into glossy sci-fi styling.",
      "nextMove": "Add persistence, linked artifacts, scoped handoff types, and sharper missing-context indicators so the product becomes more operational and less note-like.",
      "promotionRead": "Maybe. Now much more believable as an actual tool, but persistence and stronger differentiation are still needed before promotion is justified."
    }
  }
];

export const totalBuildSlots = 365;

export interface BuildSlot {
  number: number;
  id: string;
  live: boolean;
  status: BuildStatus;
  title: string;
  latest: boolean;
}

export function getBuildById(id: string) {
  return liveBuilds.find((build) => build.id === id);
}

export function getLatestBuild() {
  return [...liveBuilds].sort((a, b) => b.number - a.number)[0];
}

export function getAllBuildSlots(): BuildSlot[] {
  const liveMap = new Map(liveBuilds.map((build) => [build.number, build]));
  const latestBuildNumber = getLatestBuild()?.number;

  return Array.from({ length: totalBuildSlots }, (_, index) => {
    const number = index + 1;
    const build = liveMap.get(number);
    return {
      number,
      id: String(number).padStart(3, "0"),
      live: Boolean(build),
      status: build?.status ?? "future",
      title: build?.title ?? "Future build",
      latest: number === latestBuildNumber,
    };
  });
}
