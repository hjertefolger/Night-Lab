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
  },
  {
    "id": "010",
    "number": 10,
    "title": "Recurrence Window",
    "date": "2026-03-16",
    "tagline": "A comparative viewer for failures hiding inside bad summaries.",
    "summary": "Recurrence Window is a forensic comparison surface for the moment an incident stops looking isolated and starts looking like part of a pattern. It helps viewers inspect recurring operational signals that stay hidden inside weak metadata and scattered attachments.",
    "principles": [
      "Make invisible processes legible",
      "Turn continuity into infrastructure",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "In deviation and incident work, repeat failures often stay invisible because summaries are weak, attachments are scattered, and metadata is inconsistent. People do not need another logging form. They need a way to see when a supposedly isolated incident is echoing older ones.",
      "whatChanged": [
        "Built the artifact as a comparative viewer instead of another entry-based workflow tool.",
        "Focused the first version on active incident versus prior echoes rather than broad reporting or dashboard metrics.",
        "Added a tighter signal-extraction pass so repeated patterns remain visible even when summary language changes."
      ],
      "artDirection": "Default Night Lab editorial direction with dark mode. The darker treatment supports a forensic, comparison-first reading of the artifact without becoming dashboard-heavy.",
      "nextMove": "Add attachment excerpts, recurrence confidence, and a trigger view that shows when a current incident should have surfaced earlier echoes automatically.",
      "promotionRead": "Maybe. More structurally distinct than the last few builds, and grounded in a real problem, but it still needs proof that the comparison model becomes operationally useful beyond a compelling first screen."
    }
  },
  {
    "id": "011",
    "number": 11,
    "title": "Access Window",
    "date": "2026-03-17",
    "tagline": "A timed coordination object for the fragile moment someone needs to get into a home.",
    "summary": "A Night Lab prototype for the operational mess around tenant access, contractor arrival, lockboxes, and missed time windows. It turns a vague appointment into a visible, time-bound access object with prep, arrival, and expiry.",
    "principles": [
      "native artifact form over renamed workflow software",
      "real operational friction made visible"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "People coordinating apartment and home access still rely on scattered texts, memory, phone calls, and social guesswork. The missing thing is not another work-order tracker. It is a durable object for the access window itself: who needs in, how entry works, what can break the visit, and when the waiting party is released if the window collapses.",
      "whatChanged": [
        "Built the concept as a timed access object instead of a maintenance board or dashboard.",
        "Added checkpoint moments so each visit reads like an operational ritual, not a vague appointment.",
        "Made expiry explicit so the core tension is visible: residents are often held hostage by soft arrival promises."
      ],
      "artDirection": "Default Night Lab direction was used: dark editorial systems minimalism with restrained monochrome surfaces, thin borders, and quiet operational emphasis.",
      "nextMove": "Test whether the access window becomes stronger as a live countdown object with proofs of entry, handoff survival across shift change, and explicit release conditions when the visit misses its slot.",
      "promotionRead": "Maybe. The problem is concrete and the form is more distinct than recent builds, but it still needs one sharper interaction mechanic before it feels like a true standalone primitive."
    }
  },
  {
    "id": "012",
    "number": 12,
    "title": "Inset Lab",
    "date": "2026-03-18",
    "tagline": "A spatial simulator for edge-to-edge inset problems.",
    "summary": "Inset Lab is a small spatial playground for understanding how bars, gestures, and keyboards change the usable geometry of a mobile screen. It reframes edge-to-edge breakage as a live inset-state problem instead of a collection of isolated component bugs.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence",
      "Convert deep technical structure into usable product leverage"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Forced edge-to-edge behavior keeps turning layout work into scattered one-off fixes. Developers patch individual screens, but the underlying problem is spatial: the usable screen changes under bars, gestures, and keyboards. This build makes that geometry visible.",
      "whatChanged": [
        "Built the concept as a spatial simulator instead of another workflow or diagnostic board.",
        "Focused the first version on top, bottom, and keyboard insets as live geometry rather than static tokens or rules.",
        "Added a stronger explanatory read so the artifact contrasts the wrong first assumption with the better spatial interpretation."
      ],
      "artDirection": "Default Night Lab editorial direction with dark mode. The darker treatment helps the inset simulator feel technical and tactile without becoming glossy or dashboard-like.",
      "nextMove": "Add multiple screen archetypes, safe-area overlays, and saved edge-case states so the simulator becomes more useful as a real design and debugging object.",
      "promotionRead": "Maybe. More form-distinct than the old repeated pattern and grounded in a real developer pain, but it still needs evidence that the simulator becomes operationally useful rather than mainly illustrative."
    }
  },
  {
    "id": "013",
    "number": 13,
    "title": "Link Mender",
    "date": "2026-03-19",
    "tagline": "A constrained repair instrument for broken migration links.",
    "summary": "Link Mender is a focused repair tool for the hidden continuity breaks left behind after Jira migrations. It treats dead legacy URLs not as generic cleanup tickets, but as repairable breaks in meaning that need scan, preview, and confidence-aware rewriting.",
    "principles": [
      "Make invisible processes legible",
      "Preserve continuity across transformation",
      "Prefer native repair actions over administrative tracking"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "After migrations, systems often look intact while their references quietly rot underneath. Broken legacy links in comments, descriptions, and remote fields turn continuity into a support ritual. This build makes that repair problem visible as a first-class artifact.",
      "whatChanged": [
        "Built the concept as a constrained repair instrument instead of another ticketing or dashboard surface.",
        "Focused the interaction on scan, preview, and rewrite confidence rather than issue management or reporting.",
        "Kept ambiguity visible through safe rewrite versus human review states rather than flattening every case into a binary fixed/broken result."
      ],
      "artDirection": "Default Night Lab editorial direction with dark mode. The darker palette helps the repair instrument feel forensic and precise without drifting into dashboard aesthetics.",
      "nextMove": "Add host rules, path transforms, and explicit downgrade states so the instrument can distinguish safe repair, ambiguous remap, and human review more rigorously.",
      "promotionRead": "Maybe. Tighter and more native than many recent builds, but it still needs a stronger real repair grammar to move beyond a clean first concept."
    }
  },
  {
    "id": "014",
    "number": 14,
    "title": "Refill Orbit",
    "date": "2026-03-21",
    "tagline": "A visual instrument for overlapping refill windows.",
    "summary": "Refill Orbit is a visual month instrument for people managing several ongoing prescriptions whose refill dates, travel plans, and authorization rules do not line up cleanly. It reframes the problem from isolated reminders into one overlapping constraint system, making the real blocker legible before the month collapses into calls, partial fills, or rationing.",
    "principles": [
      "Make invisible constraints legible",
      "Prefer problem-native instruments over administrative apps",
      "Show the true blocker instead of the full list"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "People with multiple recurring prescriptions often compensate with spreadsheets, pill organizers, calendar reminders, and repeated pharmacy calls, but the real problem is usually structural: one refill window quietly dictates the whole month. This build makes that hidden constraint visible.",
      "whatChanged": [
        "Built the concept as a circular alignment instrument instead of another medication tracker, reminder list, or planner surface.",
        "Made travel absence, refill eligibility, and runout pressure visible in the same artifact so the real blocker can surface immediately.",
        "Added a light v1.1 pass with direct line selection inside the orbit so the instrument stays primary instead of the side list becoming the real interaction."
      ],
      "artDirection": "Default Night Lab editorial direction with a warm light treatment. The lighter paper-toned surface fits the healthcare-adjacent subject while staying restrained, precise, and non-clinical.",
      "nextMove": "Add a live travel-drag and pull-forward mode so the instrument can test whether a vacation override, partial fill, or renewal nudge would actually resolve the month or only shift the pressure elsewhere.",
      "promotionRead": "Maybe. The artifact form feels more distinct than many recent builds and the problem is real, but it still needs evidence that the instrument becomes genuinely useful instead of mainly explanatory."
    }
  },
  {
    "id": "015",
    "number": 15,
    "title": "Set Field",
    "date": "2026-03-21",
    "tagline": "A harmonic flow instrument for live setlists.",
    "summary": "Set Field is a visual instrument for musicians building live setlists. Songs are placed on a circle of fifths according to their key, with the setlist path drawn through harmonic space. Transition quality \u2014 smooth, near, stretch, or jump \u2014 is immediately visible as physical distance on the circle. Node size encodes energy level. Sparklines show energy and tempo arcs. The instrument makes harmonic distance between songs newly visible, revealing problem transitions that a text list hides.",
    "principles": [
      "Make invisible harmonic relationships visible",
      "Use a form native to the problem \u2014 the circle of fifths is the actual structural framework",
      "Prefer spatial instruments over text lists for spatial problems"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Musicians planning setlists work from text lists that hide the harmonic and energy relationships between songs. Awkward key transitions and energy crashes are invisible until rehearsal or performance. This instrument makes the flow visible before it's too late.",
      "whatChanged": [
        "Built the concept as a circle-of-fifths spatial instrument instead of another setlist planner, song organizer, or music management surface.",
        "Made transition quality visible as path color and physical distance so problem zones announce themselves without labels.",
        "Added energy and tempo sparklines as secondary reads that complement the harmonic field without competing with it.",
        "Applied a v1.1 pass to reduce visual noise in crowded key areas by suppressing redundant key badges and widening node spread."
      ],
      "artDirection": "Dark editorial treatment with warm gold/sand nodes and restrained transition colors. The dark surface fits the performance domain while staying within the Night Lab editorial discipline.",
      "nextMove": "Add drag-to-reorder interaction so musicians can experiment with song order and watch the harmonic path redraw in real time.",
      "promotionRead": "Maybe. The form is genuinely native to the problem and the artifact makes something invisible newly visible, but it needs the interactive reorder to become operationally useful rather than only diagnostic."
    }
  },
  {
    "id": "016",
    "number": 16,
    "title": "Stage Ghost",
    "date": "2026-03-22",
    "tagline": "Scrub through a scene and see where everyone stands.",
    "summary": "Stage Ghost turns blocking notes into a spatial sequence you can scrub. Actor positions move through a stage diagram as you drag the timeline, with ghost trails tracing each path through the scene. Text annotations become spatial reading.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Stage blocking is spatial information trapped in text. Directors write 'X DSR on line 42' in margins, but the actual spatial relationships between actors at any moment are invisible. The only way to review blocking is to mentally simulate every position from abbreviations. Stage Ghost makes the spatial story of a scene directly readable.",
      "whatChanged": [
        "v1.1: Added play/auto-scrub for watching the scene flow continuously.",
        "v1.1: Added presence dot strip on timeline showing which actors are onstage at each cue.",
        "v1.1: Added spacebar support for play/pause."
      ],
      "artDirection": "Default Night Lab dark editorial direction. Near-black stage with extremely subtle grid and zone labels. Actors and ghost trails are the only elements that demand attention. Monochrome grayscale palette differentiates actors without color.",
      "nextMove": "Add drag-to-reposition actors on the stage diagram so directors can sketch blocking visually, not just review it.",
      "promotionRead": "Maybe. The form is genuinely native to the problem, and the ghost trail mechanic is a real discovery. Needs interactive editing to graduate from reading instrument to creative tool."
    }
  },
  {
    "id": "017",
    "number": 17,
    "title": "Mix Space",
    "date": "2026-03-23",
    "tagline": "A spatial color-gamut instrument for painters working with limited palettes.",
    "summary": "Three pigments form the vertices of a triangle. Every point inside is a mixture. The invisible territory of your palette becomes visible \u2014 hover to read recipes, pin to compare, set a target to find the nearest achievable mix.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Painters navigating a limited palette mix by trial and error because the achievable color territory is invisible. The triangle is the actual mathematical structure of three-component mixing \u2014 barycentric coordinates ARE mixing proportions. This instrument makes the gamut visible so you can see what your palette can reach before you waste paint.",
      "whatChanged": [
        "No iteration pass. The first version stayed true to the core move."
      ],
      "artDirection": "Deliberately light theme \u2014 colors need neutral backgrounds for accuracy. The rest stays restrained: monospace labels, thin borders, generous negative space. The triangle carries the visual weight.",
      "nextMove": "Add custom pigments via hex input or preset pigment database so painters can see their own palette's gamut, not just the three presets.",
      "promotionRead": "Maybe. Strong form-to-problem fit \u2014 the triangle is the native mathematical structure. Makes something real newly visible. But stays educational rather than transforming studio workflow."
    }
  },
  {
    "id": "018",
    "number": 18,
    "title": "Sling Force",
    "date": "2026-03-24",
    "tagline": "A force-geometry instrument that makes invisible sling angle tension visible.",
    "summary": "When riggers spread a two-leg sling wider, the tension in each leg grows non-linearly. At 120\u00b0 each leg carries the full load. At 145\u00b0 nearly 4\u00d7. This instrument draws the force vectors as live geometry so you can feel the spike, not just read a chart.",
    "principles": [
      "Make invisible processes legible",
      "Convert deep technical structure into usable product leverage"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "30% of rigging accidents involve incorrect sling usage. The non-linear relationship between sling angle and tension is invisible \u2014 lookup tables give numbers but not intuition. The force vector triangle IS the physics, so the right form for understanding it is geometric and interactive.",
      "whatChanged": [
        "No iterations. The first version hit the core move cleanly."
      ],
      "artDirection": "Dark editorial. Monochrome-first with structural color: gray (safe), amber (caution), red (danger). Geist + JetBrains Mono. Generous negative space reinforces the geometry \u2014 empty space below the rising load IS the danger signal.",
      "nextMove": "Add a sling rating overlay so users can input rated capacity and see the exact angle threshold where their specific sling exceeds its limit.",
      "promotionRead": "Maybe. The form-to-problem fit is mathematically native \u2014 the force vector triangle is the actual physics, not a visualization metaphor. But the audience is narrow and the instrument is diagnostic-only."
    }
  },
  {
    "id": "019",
    "number": 19,
    "title": "Recurrence",
    "date": "2026-03-25",
    "tagline": "A temporal grid that turns scattered incidents into visible patterns.",
    "summary": "People can't prove recurring disturbances because each incident looks isolated. This instrument maps incidents to a week-by-hour grid where cells glow with frequency \u2014 the rhythm becomes undeniable evidence, not just a feeling.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Recurring disturbances (noise, outages, pain episodes) are invisible as patterns because they're experienced one at a time. A log lists events linearly; this grid shows the rhythm at a glance. The accumulation of incidents in the same cells IS the proof.",
      "whatChanged": [
        "Fixed midnight wraparound in peak window display."
      ],
      "artDirection": "Dark editorial with warm amber accent for incident intensity. Cells glow brighter with frequency, creating emotional weight. Geist for readouts, JetBrains Mono for labels.",
      "nextMove": "Add week-over-week tracking so patterns emerge over time, not just in aggregate. Export as PDF evidence report.",
      "promotionRead": "Not yet. The core move is clean but needs temporal depth (week-by-week view) to graduate from snapshot to evidence timeline."
    }
  },
  {
    "id": "020",
    "number": 20,
    "title": "Say It Clear",
    "date": "2026-03-26",
    "tagline": "A constrained editor that turns difficult feedback into clear, structured messages.",
    "summary": "People can't structure hard conversations. The SBI framework (Situation \u2192 Behavior \u2192 Impact \u2192 Request) works but is invisible in the moment. This editor walks you through four prompts, one at a time, and composes a clear message from your answers.",
    "principles": [
      "Compress complexity while preserving essence",
      "Extend human cognition without obscuring agency"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Difficult feedback gets ruined by structure, not intent. People know what they want to say \u2014 they just can't organize it in the moment. The SBI sequence is well-established but invisible. This editor makes the structure visible by constraining the input order.",
      "whatChanged": [
        "No iterations. Deliberately minimal \u2014 the constraint is the feature."
      ],
      "artDirection": "Light editorial minimalism. White background, no decoration. The emptiness creates a calm space for uncomfortable thinking. JetBrains Mono for prompts, Geist for input text.",
      "nextMove": "Add tone preview \u2014 show how the message might land before composing. Assertive? Diplomatic? Aggressive?",
      "promotionRead": "Maybe. Genuinely different form for Night Lab \u2014 text-based constrained editor. Clean mechanic, but thin artifact. Needs operational depth to graduate."
    }
  },
  {
    "id": "021",
    "number": 21,
    "title": "Tank State",
    "date": "2026-03-27",
    "tagline": "A parameter-space instrument that reveals the invisible interaction between pH, temperature, and ammonia toxicity in aquarium water.",
    "summary": "Aquarium test kits measure total ammonia, but the fraction that's actually toxic depends on a chemical equilibrium governed by pH and temperature. The same ammonia reading can be safe or lethal depending on conditions the test kit doesn't measure together. Tank State renders this invisible parameter space as a navigable 2D field \u2014 pH on one axis, temperature on the other, toxicity as color \u2014 so you can see where your readings place you relative to danger.",
    "principles": [
      "Make the invisible visible through its native mathematical form",
      "The domain's own structure becomes the artifact form"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Aquarium hobbyists manage ammonia, pH, and temperature as three separate numbers. But the NH3/NH4+ equilibrium makes these parameters interdependent \u2014 high pH and high temperature amplify ammonia toxicity by 10-20x. Individual 'safe' readings can combine to be lethal. The phase diagram is the domain's native structure, and showing it makes the combined danger newly visible.",
      "whatChanged": [
        "First build. Canvas-rendered heat map with analytical contour lines derived from the Emerson et al. (1975) equilibrium equation."
      ],
      "artDirection": "Dark editorial. Canvas heat map transitions from near-black (safe) through warm amber (caution) to deep rust-red (danger). Dashed contour lines at toxicity thresholds. White position marker with glow. Generous negative space. JetBrains Mono for data, Geist for body text.",
      "nextMove": "Could add a 'water change simulator' \u2014 show how a 25% water change shifts your position on the map by diluting TAN. Would make the instrument actionable, not just diagnostic.",
      "promotionRead": "Strong form-to-problem fit. The 2D state space IS the domain's mathematical structure \u2014 showing it reveals a genuinely hidden interaction. The curved contour lines are the key insight: danger isn't a threshold on any single axis. Structurally distinct from recent builds (not a grid, text editor, or force diagram). Grounded in real chemistry with real consequences."
    }
  },
  {
    "id": "022",
    "number": 22,
    "title": "Sleep Debt",
    "date": "2026-03-28",
    "tagline": "The gap between how you feel and how you perform.",
    "summary": "A divergence instrument revealing the invisible blind spot of chronic sleep restriction. Two curves \u2014 perceived alertness and actual cognitive capacity \u2014 split apart over 14 days as sleep debt accumulates.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "After about a week of restricted sleep, subjective sleepiness plateaus \u2014 you stop feeling tired. But cognitive performance keeps declining. Research shows a 27-point gap between perceived and actual capacity after 14 days of 6-hour sleep. This dissociation is invisible. The instrument makes it visible.",
      "whatChanged": [],
      "artDirection": "Dark editorial, monochrome with restrained red accent for the divergence zone. Canvas-rendered. Follows default Night Lab direction.",
      "nextMove": "Add a what-if recovery mode showing how many days of 8+ hours it takes to close the gap.",
      "promotionRead": "Maybe. The insight is genuine and the form is native, but the artifact is an interactive model rather than a novel interaction mechanic."
    }
  },
  {
    "id": "023",
    "number": 23,
    "title": "Fire Timing",
    "date": "2026-03-27",
    "tagline": "Backward-schedule cook times from a shared plate moment. The expo's invisible coordination \u2014 made visible.",
    "summary": "A reverse-countdown timing instrument that externalizes the kitchen expediter's mental model. Dishes with different cook times are backward-scheduled from a shared plate moment on a converging timeline, making the staggered fire calls visible as spatial layout.",
    "principles": [
      "Make invisible processes legible",
      "Extend human cognition without obscuring agency"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "A kitchen expediter mentally juggles staggered fire calls across stations so dishes with different cook times all arrive at the pass together. This coordination lives entirely in the expo's head and crashes under pressure. This instrument externalizes that backward-scheduling model as a visible converging timeline.",
      "whatChanged": [
        "Initial build \u2014 no iterations."
      ],
      "artDirection": "Dark editorial. Station-colored accents (GRILL rust, SAUTE amber, FRY gold, GARDE green, PASTRY purple) are the only color. Monospace for technical labels and countdowns, Geist for dish names. Thin borders, generous negative space.",
      "nextMove": "Add multi-table stacking to show overlapping fire windows across 2-3 simultaneous tickets \u2014 where the real coordination pressure lives.",
      "promotionRead": "Not yet. The core move is genuine but the instrument currently handles only one ticket. Multi-table coordination is where this concept would earn promotion."
    }
  },
  {
    "id": "024",
    "number": 24,
    "title": "Dose Clock",
    "date": "2026-03-27",
    "tagline": "See what's active in your body right now \u2014 not just when you took it.",
    "summary": "A 24-hour radial clock showing medication concentration decay curves as concentric bands. Reveals when multiple drugs overlap at high concentration \u2014 the invisible temporal dimension of drug interaction that pill boxes and interaction checkers miss.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Patients on multiple medications have no visibility into what's simultaneously active in their body at any given hour. Pill organizers show when to take. Drug interaction checkers give binary answers. Nothing shows the temporal overlap \u2014 when during the day drug concentrations stack. This clock makes that invisible stacking visible.",
      "whatChanged": [],
      "artDirection": "Dark editorial direction with canvas-rendered radial clock. Restrained color \u2014 each drug gets a distinct hue, overlap ring uses warm amber-to-rust. Geist for interface text, JetBrains Mono for labels and data. Default Night Lab direction applied.",
      "nextMove": "Add drag-to-reschedule interaction so patients or pharmacists can see how moving a dose time shifts the overlap pattern.",
      "promotionRead": "Maybe. The form is native to the problem and the insight is genuine. But the pharmacokinetic model is simplified and the instrument is read-only. Needs dose-rescheduling interaction and real drug database to graduate."
    }
  },
  {
    "id": "025",
    "number": 25,
    "title": "Focus Field",
    "date": "2026-03-30",
    "tagline": "The shape of sharpness your camera sees but never shows you.",
    "summary": "A spatial depth-of-field instrument that makes the invisible zone of acceptable focus visible as a side-view diagram. Three interacting parameters \u2014 aperture, focal length, and subject distance \u2014 reshape the zone in real time, revealing what calculators hide behind numbers.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Photographers control depth of field through three interacting variables, but the resulting zone of sharpness is invisible. Calculators return numbers without spatial understanding. This instrument shows the shape \u2014 a side-view diagram where the zone of acceptable focus reshapes as parameters change, revealing non-linear interactions that tables cannot convey.",
      "whatChanged": [
        "v1.1: Added cone-of-light metaphor with blur regions flanking the sharp zone",
        "v1.1: Fixed label overlap at narrow DoF zones with adaptive positioning",
        "v1.1: Added focus point glow and refined camera icon"
      ],
      "artDirection": "Default Night Lab dark editorial direction. Monochrome canvas instrument with JetBrains Mono labels. The darkness makes subtle zone gradients legible. Canvas is the primary artifact \u2014 controls serve it.",
      "nextMove": "Add comparison mode: lock one configuration, change parameters, and see both zones overlaid to directly answer 'what if I stop down?' questions.",
      "promotionRead": "Maybe. Strong form-to-problem fit \u2014 spatial information shown spatially. Genuinely reveals something invisible. But stays within the parameter-space instrument family and is diagnostic-only."
    }
  },
  {
    "id": "026",
    "number": 26,
    "title": "Cue Pressure",
    "date": "2026-04-01",
    "tagline": "A calling bandwidth instrument for stage managers \u2014 revealing where cue density exceeds human vocal capacity.",
    "summary": "Stage managers call hundreds of cues per show through a single voice channel. When cues stack during transitions, the calling rate exceeds human bandwidth. This instrument makes that invisible bottleneck visible \u2014 showing temporal density across five production departments and computing where calling load becomes physically impossible.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Cue sheets are flat lists that hide temporal density. A lighting designer adding 15 cues to a transition can't see that sound and flies already have 10 more in the same window. The SM discovers the bottleneck during tech rehearsal \u2014 under pressure, with no time to fix it. This instrument reveals the bottleneck before it happens.",
      "whatChanged": [
        "v1.1: Refined bottleneck detection \u2014 threshold raised to 100%, nearby zones merged, sub-3s artifacts filtered. False positives dropped from 30+ to 9 meaningful zones."
      ],
      "artDirection": "Dark editorial. Monochrome with red overload accents. Canvas-rendered timeline as primary instrument. JetBrains Mono for technical data, Geist for headings. Minimal chrome.",
      "nextMove": "Drag-to-redistribute interaction \u2014 move cues in time and watch the bandwidth curve respond. Transforms the instrument from diagnostic to planning tool.",
      "promotionRead": "Maybe. Strong form-to-problem fit. The three-preset contrast tells a genuine story about production archetypes. Needs interactivity and real cue-sheet import to graduate."
    }
  },
  {
    "id": "027",
    "number": 27,
    "title": "Cure Line",
    "date": "2026-04-01",
    "tagline": "Making the invisible maturity state of curing concrete visible as a strength trajectory.",
    "summary": "Concrete looks hard within hours but actual strength depends on accumulated temperature and time. This instrument shows the Nurse-Saul maturity curve rising toward structural thresholds, revealing why fixed-time stripping rules fail in cold weather.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Contractors need to know when concrete is strong enough to strip formwork, apply loads, or open to traffic. But strength depends on the integral of temperature over time \u2014 the maturity index \u2014 which is invisible. Fixed-time rules ignore temperature. Cylinder break tests measure a separate specimen. The actual in-situ strength trajectory is never seen. This instrument makes the Nurse-Saul maturity curve legible as a single rising line approaching structural thresholds.",
      "whatChanged": [
        "No iterations. First version captured the core move."
      ],
      "artDirection": "Dark editorial direction. Canvas-rendered accumulation curve with restrained warm amber for the strength curve and threshold markers. Blue tint in the temperature strip for freezing hours. JetBrains Mono for data labels. Default Night Lab direction followed.",
      "nextMove": "Add a what-if blanket toggle that raises nighttime temperatures by 8-12\u00b0C and shows how the maturity curve shifts earlier \u2014 making the economic value of temperature protection visible in hours saved.",
      "promotionRead": "Maybe. Form-to-problem fit is native (maturity integral IS the curve). Preset contrast reveals genuine invisible structure. But diagnostic-only with preset profiles \u2014 needs real temperature input and what-if interaction to graduate."
    }
  },
  {
    "id": "028",
    "number": 28,
    "title": "Grain Warp",
    "date": "2026-04-01",
    "tagline": "A wood movement deformation instrument that makes invisible anisotropic expansion visible.",
    "summary": "Wood moves differently in different directions relative to the grain. This instrument shows a log cross-section deforming as moisture changes, and compares flat-sawn vs quarter-sawn boards side by side so you can see why one cups and the other stays flat.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Woodworkers know wood moves with humidity, but the directionality of that movement is invisible. Tangential expansion is 1.5x to 3x greater than radial, and this ratio varies by species. Online calculators return numbers, but numbers hide the spatial truth: the direction and differential that determines whether a board cups, a joint fails, or a panel cracks. This instrument makes the anisotropic movement visible as shape change.",
      "whatChanged": [
        "v1.1: Larger board cross-sections with more visible ring lines for clearer cupping contrast",
        "v1.1: Added Season Cycle animation \u2014 oscillates moisture to show the wood breathing through a year",
        "v1.1: Increased cupping exaggeration from 12x to 14x for clearer visual differentiation"
      ],
      "artDirection": "Dark theme, editorial minimalism. Geist + JetBrains Mono. Monochrome-first with rust-red for expansion, muted blue for shrinkage. Wood species in approximate natural colors. Default Night Lab direction.",
      "nextMove": "Add a cross-grain joint visualizer showing two boards meeting at 90 degrees, watching the joint fight itself as moisture changes.",
      "promotionRead": "Maybe. Solid form-to-problem fit but stays within the parameter-space instrument family."
    }
  },
  {
    "id": "029",
    "number": 29,
    "title": "Pitch Drift",
    "date": "2026-04-03",
    "tagline": "Making invisible comma accumulation visible across chord progressions.",
    "summary": "When a choir tunes each chord for pure consonance, small mathematical errors accumulate invisibly across transitions. This instrument shows the drift path \u2014 revealing why hymns stay in tune while pop progressions spiral sharp.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "A cappella choirs experience pitch drift as a mysterious, unavoidable phenomenon. Directors hear the choir go flat or sharp but cannot identify which chord transitions cause it. The syntonic comma and related JI/ET discrepancies accumulate invisibly. This instrument makes the mathematical accumulation path visible, turning an invisible process into a readable trajectory.",
      "whatChanged": [
        "v1.1: Asymmetric y-axis range gives more space to the drift direction, less wasted space on the opposite side.",
        "v1.1: Relocated SHARP/FLAT zone labels from right edge to y-axis area to prevent overlap with chord labels.",
        "v1.1: Adaptive grid step (10c or 20c) based on range to reduce visual noise on large-range presets.",
        "v1.1: Refined drift model with quality-transition weighting \u2014 only applies when chord quality changes between steps."
      ],
      "artDirection": "Default Night Lab dark editorial direction. Geist + JetBrains Mono. Monochrome base with directional color accents: amber/rust for flat drift, blue-gray for sharp drift. Canvas-rendered chart with generous padding.",
      "nextMove": "Add a correction mode: mark specific transitions as 'temper here' and show how the drift path changes when those transitions use equal temperament instead of just intonation.",
      "promotionRead": "Maybe. Mathematically native form-to-problem fit. The preset contrast is a genuine revelation. Diagnostic-only; needs correction mode to become actionable."
    }
  },
  {
    "id": "030",
    "number": 30,
    "title": "Temp Circle",
    "date": "2026-04-05",
    "tagline": "How tuning temperaments distribute impurity across the circle of fifths.",
    "summary": "A circle-of-fifths instrument showing how five historical temperaments redistribute interval impurity across all twelve keys. Switch temperaments to see the pattern shift \u2014 from equal mediocrity to meantone's dramatic wolf to Werckmeister's gentle graduation.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Tuning temperaments trade purity in some keys for impurity in others, but the pattern of that tradeoff is invisible. Tables give numbers; this instrument makes the distribution visible on the circle of fifths \u2014 the domain's own mathematical structure.",
      "whatChanged": [
        "v1.1: Added divider ring between fifth and third quality zones for visual clarity.",
        "v1.1: Fixed Werckmeister III and Kirnberger III fifth placement to match historical sources.",
        "v1.1: Improved pure-interval indicators \u2014 thin arcs for purity vs filled bars for impurity."
      ],
      "artDirection": "Default Night Lab dark editorial direction. Monochrome with amber/rust for impurity and green-white for purity. Canvas-rendered radial geometry.",
      "nextMove": "Add audio playback: click a key to hear its major triad in the selected temperament, making the beating audible alongside the visual impurity.",
      "promotionRead": "Maybe. Mathematically native form-to-problem fit \u2014 the circle of fifths IS the domain's structure. Preset contrast is a genuine revelation. But diagnostic-only and specialized audience."
    }
  },
  {
    "id": "031",
    "number": 31,
    "title": "Speech Banana",
    "date": "2026-04-07",
    "tagline": "What a hearing loss hears.",
    "summary": "An interactive audiogram with 25 English phonemes plotted on the speech banana. Drag the hearing threshold curve \u2014 or pick a clinical preset \u2014 and watch which sounds of speech become inaudible. A live sentence renderer shows the dropouts as dots, making the connection between audiogram geometry and lived unintelligibility visible for the first time.",
    "principles": [
      "Make invisible processes legible",
      "Prefer verification over vague trust",
      "Compress complexity while preserving essence",
      "Native form over wrapping interface"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Audiograms show hearing loss as an abstract decibel curve. The speech banana shows where speech lives as a static diagram. Neither lets a patient \u2014 or a patient's family \u2014 feel the connection between their specific curve and the specific sounds they can no longer distinguish. This build closes that gap by rendering the same test sentence through the current curve, replacing inaudible phonemes with dots. The moment 'She sells seashells' becomes '\u00b7\u00b7e \u00b7e\u00b7\u00b7 \u00b7ea\u00b7\u00b7e\u00b7\u00b7\u00b7' is the moment the abstract diagnosis becomes a lived experience.",
      "whatChanged": [
        "v1.0 \u2014 initial build. 25 phonemes at canonical speech-banana coordinates, 6 draggable audiometric test points, 5 clinical presets, 5 fricative-dense test sentences, log-linear threshold interpolation matching audiogram reading convention."
      ],
      "artDirection": "Default Night Lab direction. Light editorial monochrome, Geist body + system mono for labels and phoneme symbols, no color, no gradients, thin borders. The audiogram Y-axis runs 0\u2192110 dB top-to-bottom following audiology convention (quieter above, louder below) \u2014 a deliberate inversion that the domain requires.",
      "nextMove": "v1.1 side-by-side comparison: render the same sentence through all five presets simultaneously so the difference between loss *types* (not just severity) becomes legible in one glance. v2.0 would add Web Audio API playback so the patient can hear their own hearing \u2014 cross from visualization to simulation.",
      "promotionRead": "Maybe \u2014 leaning strong. First Night Lab build that translates diagnostic chart coordinates into word-level legibility via a generative mechanism. Passes the 'new legibility' north star test cleanly: the connection between audiogram geometry and lived unintelligibility becomes visible in a way static diagrams cannot show. Audio playback would push it from 'strong explainer' to 'diagnostic aid' and move it firmly into 'strong' territory. The audiology/accessibility domain is fresh for Night Lab and worth returning to."
    }
  },
  {
    "id": "032",
    "number": 32,
    "title": "Window Slip",
    "date": "2026-04-08",
    "tagline": "The medication round you can't catch up on.",
    "summary": "A live medication round simulator. Five patients, twelve scheduled doses, real ISMP timing windows. Click 'administer next dose' to advance the round, or take an interruption (call light, family question, re-order, rapid response). Watch which time-critical doses slip out of their legal windows in real time. The round is already at the edge before any delay happens \u2014 that cascade is what the MAR sheet does not show.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence",
      "Convert deep technical structure into usable product leverage",
      "Native form over wrapping interface"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Up to 72.6% of medication administration errors are timing errors. ISMP guidelines define administration windows: \u00b130 min for time-critical drugs (insulin, anti-rejection, anti-convulsant, anti-arrhythmic), \u00b160 min for routine. A typical 8 AM round is twelve doses across five patients, sequential, ~3 min each \u2014 the round already finishes at the edge of the last critical window before any interruption. A single ten-minute family question after the third patient pushes time-critical doses past their boundary, and there is no recovering. Nurses know this in their bones; managers and administrators don't. The MAR sheet cannot show projection, window width, or cumulative drift. This build can.",
      "whatChanged": [
        "v1.0 \u2014 initial build. Five-patient lane chart, twelve doses with ISMP-correct windows (\u00b130 critical, \u00b160 routine, \u00b190 flexible), sequential administration with 3 min/dose, four interruption buttons mapped to recognizable real-world events (call light, family question, re-order, rapid response), live counters including a 'critical at risk' projection that asks whether pending time-critical doses can still hit their windows from the current pace."
      ],
      "artDirection": "Default Night Lab direction. Light editorial monochrome, Geist body + system mono for labels and counters, generous negative space, thin borders, no color. The 'now' line is the only element with elevated contrast \u2014 it is the index finger of the round and earns the weight. Late doses are marked by dashed outline + reduced opacity rather than red, deliberately avoiding the dashboard color-status idiom.",
      "nextMove": "v1.1: side-by-side comparison of a clean shift and a chaotic shift on the same data, so the cascade insight lands in one glance instead of requiring the user to remember the baseline between resets. v1.2: a 'time-critical first' re-ordering toggle that replays the round with critical doses pulled to the front of the queue, graduating from diagnostic to prescriptive. v2.0: editable round (add a patient, change a med, alter the start time) for nurse educators.",
      "promotionRead": "Maybe \u2014 solid. Introduces a window-positioning instrument class that is new to the catalog (distinct from parameter-space, deformation, threshold-crossing, accumulation, radial). Passes the north-star 'new legibility' test: cumulative round drift and the moment a delay snaps a downstream dose out of its window are not visible in the MAR sheet that nurses currently use, and are visible here. The clean-run-already-at-the-edge insight is the kind of revelation Night Lab was built to surface. v1.1 with side-by-side comparison would push it to strong. Healthcare *operational* timing (rounds, handoffs, queue progression) is fresh territory worth returning to."
    }
  },
  {
    "id": "033",
    "number": 33,
    "title": "Ready Line",
    "date": "2026-04-09",
    "tagline": "A classroom transition is not a duration. It is twenty-five finish times gated by the max.",
    "summary": "A straggler-tail instrument for classroom transitions. Four common transition strategies rendered as what they actually are: twenty-five independent completion times stacking into a step curve, with a shaded waste area showing the student-minutes lost to the long tail.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence",
      "Push familiar primitives forward instead of inventing novelty for novelty's sake"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Teachers experience classroom transitions as behavior to manage. The mathematical truth is that transitions are max-functions across twenty-five independent completion times, and most of the minutes lost are lost in the tail, not in the mode. No classroom tool shows this \u2014 timers show the mode, behavior charts track individuals, nothing visualises the distribution and the max-gate together. This instrument makes the waste area visible in one glance.",
      "whatChanged": [
        "v1.0 \u2014 Cumulative step curve, waste area fill, class-ready and first-done vertical markers, metrics panel, counterfactual sentence, four real transition strategies.",
        "v1.1 \u2014 Counterfactual language now adapts: when the tail is already cut (Timer + partner strategy saves only 2 seconds), the sentence says so honestly instead of over-claiming tail savings. The message is truthful on all four presets."
      ],
      "artDirection": "Default Night Lab direction, strictly applied. Light editorial monochrome on white. Geist variable for copy, system monospace for labels and numbers. No colour. Waste area is a 5% grey fill. Single chart, single reading panel, four buttons \u2014 no cards, no badges, no dashboard chrome.",
      "nextMove": "Custom distribution mode \u2014 let a teacher drag the twenty-five dots to model their own class and watch the waste area respond in real time. Would move the instrument from diagnostic ('read about my class') to prescriptive ('model my class') and would push the promotion read from 'maybe' to 'strong'.",
      "promotionRead": "Maybe \u2014 solid. New mathematical shape in the Night Lab catalog (cumulative-distribution-with-max-gate). Education is a fresh domain for Night Lab \u2014 no prior build touched classrooms. The form-to-problem fit is mathematically native and the counterfactual mechanism is honest. Held back from 'strong' only because v1.0 is diagnostic-only; custom input would unlock it."
    }
  },
  {
    "id": "034",
    "number": 34,
    "title": "Swing Circle",
    "date": "2026-04-13",
    "tagline": "The invisible collision geometry of anchored boats.",
    "summary": "A spatial instrument that makes swing circles visible. Scope, depth, and tide determine each boat's radius. Wind shifts rotate every hull simultaneously. Where circles overlap, collisions happen.",
    "principles": [
      "Make invisible processes legible",
      "Compress complexity while preserving essence"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "Anchored boats swing in circles whose radii depend on rode length and water depth. Boats that anchored at different tidal states have dramatically different rode lengths \u2014 and therefore different swing circles \u2014 even if they used the same scope ratio. None of this geometry is visible to the boater. Collisions happen at 3 AM when the wind shifts.",
      "whatChanged": [
        "v1.1: Revised physical model \u2014 each boat has fixed rode set at anchor time, not recalculated from current depth",
        "Added anchor-time depth tracking, effective scope display, and anchor-drag detection",
        "Tidal Trap preset shows boats with same scope ratio but different arrival times producing dramatically different circles",
        "Improved wind compass with cardinal directions and preset descriptions"
      ],
      "artDirection": "Default Night Lab editorial direction. Light theme, monochrome-first. Red used structurally for collision zones only. Geist for body, JetBrains Mono for data and labels.",
      "nextMove": "Add a drop-anchor interaction: click to place a new boat at current depth with chosen scope, experiencing the anchoring decision against existing neighbors.",
      "promotionRead": "Maybe. The spatial collision geometry is a genuine insight with native form. The Tidal Trap preset is a real revelation. Multi-object spatial interaction is new to the catalog. But the instrument is diagnostic-only \u2014 needs the drop-anchor workflow to become actionable."
    }
  },
  {
    "id": "035",
    "number": 35,
    "title": "Mite Reservoir",
    "date": "2026-04-14",
    "tagline": "What the alcohol wash cannot see.",
    "summary": "A colony-year timeline that renders the hidden varroa-mite reservoir alongside what the beekeeper's alcohol wash actually measures. The same oxalic acid applied mid-summer kills 31% of the true load; applied after a brood break, 99%. Same drug. Same dose. Different moment of exposure.",
    "principles": [
      "make invisible processes legible",
      "compress complexity while preserving essence",
      "prefer verification over vague trust"
    ],
    "status": "live",
    "fieldNotes": {
      "whyThisExists": "A beekeeper samples 300 bees, washes them, reads 'mites per 100 bees' and decides whether to treat. During brood season, 60\u201385% of the colony's mites are sealed inside capped cells \u2014 invisible to the wash and unreachable by most chemical treatments. The diagnostic systematically under-counts the real state, and every timing decision inherits the error. The reservoir is the part that lives only in the beekeeper's head. Making it visible alongside the wash reading, across the full colony-year, is the move.",
      "whatChanged": [
        "v1.0: daily discrete simulation with 12-day worker sealed cycle and seasonal capped-brood curve. Added density-dependent colony-collapse dynamics to cap runaway growth.",
        "v1.1: tuned invasion rate to 0.18 daily to produce ~57% hidden fraction at peak brood, matching published literature. Offspring coefficient reduced to 0.7 net to account for invasion loss and foundress mortality."
      ],
      "artDirection": "Default Night Lab direction held. Editorial monochrome, Geist body, JetBrains-style mono for labels and tabular numbers, thin borders, no gradients. One restrained accent color (oxidized orange #c77700) for the alcohol-wash curve, justified because it must read as 'the one channel the beekeeper sees' and must be immediately distinguishable from the grey reservoir and the black truth line. A pale blue band marks the queen-cage broodless window.",
      "nextMove": "v2.0: editable wash reading \u2014 the beekeeper enters this morning's wash result and a calendar date, and the instrument back-solves the likely true population. That turns the instrument from diagnostic into decision support. Adjacent: let the user drop their own treatment dates onto the timeline and compare side-by-side against a canonical strategy.",
      "promotionRead": "Maybe \u2014 leaning strong. The form-to-problem fit is genuinely native: a hidden reservoir shown alongside the visible measurement. The 'same drug, different timing, very different kill' revelation passes the north-star 'new legibility' test cleanly. Introduces a new instrument class (hidden-reservoir) generalizable to any domain where the diagnostic systematically under-counts the real state. Holds at 'maybe' because v1.0 is preset-only; custom input would push it to strong. First Night Lab build in apiculture."
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
