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
