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
  },
  {
    "id": "005",
    "number": 5,
    "title": "Drift Ledger",
    "date": "2026-03-11",
    "tagline": "Track when a thing quietly stops matching what it said it would be.",
    "summary": "Drift Ledger records mismatch between an original statement and present reality. It treats quiet divergence as something to inspect directly instead of letting it dissolve into vague discomfort.",
    "principles": [
      "Preserve identity under transformation",
      "Make invisible processes legible",
      "Turn continuity into infrastructure",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Creative systems, products, and agents rarely fail all at once. More often, they drift. This build exists to make that quiet loss of alignment visible before it becomes normal.",
      "whatChanged": [
        "Built a direct statement-versus-reality comparison instrument instead of another abstract map or continuity log.",
        "Used a simple drift entry structure: original statement, present reality, why it matters, and next correction.",
        "Chose a warmer paper-toned editorial surface to make the ledger feel inspectable and calm rather than alarmist."
      ],
      "artDirection": "Default Night Lab direction used, but in a warm paper-toned light theme instead of dark mode. Still restrained, editorial, sparse, and system-led.",
      "nextMove": "Add persistence, linked artifacts, and a temporal mode that shows whether drift is stabilizing, widening, or being corrected over time.",
      "promotionRead": "Maybe. The mechanism is clear and distinct, but it needs persistence and stronger comparison over time before it can be considered a strong promotion candidate."
    }
  },
  {
    "id": "006",
    "number": 6,
    "title": "Seen State",
    "date": "2026-03-12",
    "tagline": "A shared surface for things that need recent seeing, not full proof.",
    "summary": "Seen State is a small interface for the missing social state between trust and verification. It tracks what was last seen, by whom, how fresh that seeing is, and when the state starts slipping back into uncertainty.",
    "principles": [
      "Make invisible processes legible",
      "Prefer verification over vague trust",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "A lot of real coordination depends on a thin status layer that most tools ignore: not proven truth, not vague trust, but recent human seeing. Doors, medicine, packages, handoffs, objects, care tasks, and household state often live in that gap.",
      "whatChanged": [
        "Built the concept as a three-state surface: fresh, aging, and stale.",
        "Made witness identity, confidence, and observation note native parts of the artifact instead of hidden metadata.",
        "Kept the first version intentionally small to test whether the primitive itself holds without extra product structure."
      ],
      "artDirection": "Default Night Lab editorial direction with a restrained dark theme. The darker surface helps the freshness decay read clearly while staying calm, precise, and minimal.",
      "nextMove": "Add time decay, witness renewal, and second-person acknowledgment to test whether seen state becomes a durable collaboration primitive instead of a one-screen concept.",
      "promotionRead": "Maybe. More distinct than several recent builds, but it still needs evidence that the primitive holds under real repeated use."
    }
  },
  {
    "id": "007",
    "number": 7,
    "title": "Interrupt Budget",
    "date": "2026-03-13",
    "tagline": "A small surface for deciding what is still worth breaking flow for.",
    "summary": "Interrupt Budget is a compact interface for assigning incoming interruptions a real cost instead of treating everything as equally urgent. It keeps a visible remaining budget so focus can be defended with more clarity and less guilt.",
    "principles": [
      "Make invisible processes legible",
      "Extend human cognition without obscuring agency",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Overload often makes every interruption feel equally urgent, which destroys judgment before it destroys time. This build creates a small operating surface for deciding what is truly worth breaking flow for right now and what can safely wait.",
      "whatChanged": [
        "Built the concept around a finite interrupt budget instead of generic prioritization.",
        "Made interruption decisions native through three states: yes now, only if blocked, and can wait.",
        "Kept the first version intentionally small so the budget mechanic could be judged without extra product scaffolding."
      ],
      "artDirection": "Default Night Lab editorial direction with a warm paper-toned surface. The lighter system helps the artifact feel practical, calm, and grounded rather than dashboard-like.",
      "nextMove": "Add block-based reset, team negotiation, and stronger separation between interruption cost and interruption importance to test whether the budget model becomes a durable daily coordination primitive.",
      "promotionRead": "Maybe. The mechanism feels grounded and behavior-shaping, but it needs repeated use to prove that the budget framing stays genuinely useful instead of just elegant."
    }
  },
  {
    "id": "008",
    "number": 8,
    "title": "Escalation Shape",
    "date": "2026-03-14",
    "tagline": "A compact surface for improving how work gets escalated.",
    "summary": "Escalation Shape is a small operational interface for reshaping noisy requests before they are passed to another person or agent. It makes escalation quality visible by showing what was tried, what is blocked, what kind of intervention is needed, and whether a request is actually ready to send.",
    "principles": [
      "Make invisible processes legible",
      "Extend human cognition without obscuring agency",
      "Push familiar primitives forward instead of inventing novelty for novelty\u2019s sake"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "A large amount of collaboration friction comes from badly shaped escalation: requests arrive too vague, too emotional, too early, or without enough evidence to help the next person act well. This build treats escalation quality as a real product surface instead of leaving it buried inside chat and email habits.",
      "whatChanged": [
        "Built the first version around three native collaboration states: needs shaping, ready to send, and in motion.",
        "Made request quality legible through fields for what was tried, what is blocked, and what kind of intervention is needed.",
        "Kept the artifact intentionally small so the escalation-shaping mechanic could be judged without extra workflow scaffolding."
      ],
      "artDirection": "Default Night Lab editorial direction with dark mode. The darker surface helps the artifact read as an operational inspection board rather than a generic admin form.",
      "nextMove": "Add recipient-aware escalation modes, lightweight evidence attachments, and sharper distinction between decision requests, unblock requests, and takeover requests to test whether the artifact improves real collaboration quality under pressure.",
      "promotionRead": "Maybe. The core mechanism is stronger than a normal escalation template, but it still needs real repeated use to prove that it changes collaboration rather than simply cleaning up presentation."
    }
  },
  {
    "id": "009",
    "number": 9,
    "title": "Presence Lease",
    "date": "2026-03-15",
    "tagline": "A small surface for scoped collaboration validity.",
    "summary": "Presence Lease is a compact interface for declaring that a person, agent, or session is valid for a specific kind of work for a bounded span of time. It replaces flat online/offline presence with a more useful primitive: temporary collaboration validity.",
    "principles": [
      "Make invisible processes legible",
      "Turn continuity into infrastructure",
      "Extend human cognition without obscuring agency"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Presence is usually treated as binary or vague: online, active, away, reachable. That is too weak for real collaboration. What often matters is whether a person, agent, or session is currently valid for a specific kind of work. This build explores that missing primitive.",
      "whatChanged": [
        "Built the first version around scoped collaboration leases instead of generic presence status.",
        "Made lease validity legible through scope, duration, backing, confidence, and freshness.",
        "Kept the initial artifact intentionally small so the lease primitive could be judged on its own."
      ],
      "artDirection": "Default Night Lab editorial direction with a warm paper-toned surface. The lighter system helps the artifact read as a calm operational object rather than a dashboard.",
      "nextMove": "Add automatic expiry, recipient-side acceptance, and direct collaboration actions tied to each lease so the primitive becomes something people work through, not just look at.",
      "promotionRead": "Maybe. The concept feels fertile and more path-opening than some recent builds, but it still needs evidence that the lease model holds under real use and is not just elegant language."
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
