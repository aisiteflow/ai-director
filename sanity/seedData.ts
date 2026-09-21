export interface TimelineClip {
  clipNumber: number;
  timestamp: string;
  sceneHook: string;
  cameraMotion: string;
  dialogueSpeaker?: string;
  dialogueText?: string;
  promptRaw: string;
}

export interface CommercialBlueprint {
  _id: string;
  title: string;
  slug: { current: string };
  industry: string;
  duration: "15s" | "30s" | "40s" | "60s";
  coverImage?: string;
  tags: string[];
  timelineClips: TimelineClip[];
  audioProfile?: string;
  cameraOptics?: string;
  lightingPreset?: string;
  colorPalette?: string;
}

export interface DirectingStyle {
  _id: string;
  title: string;
  slug: { current: string };
  industry: string;
  colorPalette: string;
  cameraOptics: string;
  lightingPreset: string;
  foleyPreset: string;
}

export const SEED_DIRECTING_STYLES: DirectingStyle[] = [
  {
    _id: "style-cleantech-1",
    title: "CleanTech Volumetric Horizon",
    slug: { current: "cleantech-volumetric-horizon" },
    industry: "CleanTech",
    colorPalette: "Electric Cobalt, Hyper-Clean Titanium White, Deep Obsidian Black (#0C1017)",
    cameraOptics: "Arri Alexa LF 35mm T1.5 Master Anamorphic, 2.39:1 Aspect Ratio",
    lightingPreset: "High-Contrast Sci-Fi Cyan & 5600K Clean Daylight Rim",
    foleyPreset: "Sub-bass 32Hz harmonic power hum, electromagnetic surge, crisp air intake hiss",
  },
  {
    _id: "style-coffee-1",
    title: "Artisan Nordic Roast Macro",
    slug: { current: "artisan-nordic-roast-macro" },
    industry: "Specialty Coffee",
    colorPalette: "Warm Golden-Hour Amber (2800K), Deep Roasted Espresso Crema, Matte Porcelain",
    cameraOptics: "Laowa 24mm T14 2X PeriProbe Lens + 100mm Macro Prime at f/2.8",
    lightingPreset: "Warm Golden-Hour Directional Sunbeam (2800K), Natural Dust Motes Volumetrics",
    foleyPreset: "Aero-press vacuum release hiss, ceramic cup settle, tactile bean crackle",
  },
  {
    _id: "style-realestate-1",
    title: "Monolithic Architectural Cinema",
    slug: { current: "monolithic-architectural-cinema" },
    industry: "Real Estate",
    colorPalette: "Raw Travertine Beige, Ultra-Deep Obsidian Slate, Pool Cerulean Refraction",
    cameraOptics: "Cooke S7/i Full Frame Plus 21mm Ultra-Wide Cine Prime",
    lightingPreset: "Dusk Twilight Blue-Hour with 3000K Interior Recessed Glow",
    foleyPreset: "Ocean swell against cantilevered bedrock, subtle wind chimes, acoustic spatial reverb",
  },
  {
    _id: "style-cybernetics-1",
    title: "Cybernetic Neuro-Choreography",
    slug: { current: "cybernetic-neuro-choreography" },
    industry: "Autonomous Systems",
    colorPalette: "Phosphor Cyan (#06B6D4), Laser Diode Ruby, Brushed Anodized Carbon",
    cameraOptics: "Kowa Prominar Anamorphic 40mm T2.3, Horizontal Streak Flare",
    lightingPreset: "Stroboscopic Laboratory Cyan Grids with High-Key Volumetric Fog",
    foleyPreset: "Hydraulic micro-actuator whine, telemetry clicks, high-frequency capacitor discharge",
  },
];

export const SEED_BLUEPRINTS: CommercialBlueprint[] = [
  {
    _id: "bp-cleantech-40s",
    title: "Hyperion Megawatt: The Silent Grid",
    slug: { current: "hyperion-megawatt-the-silent-grid" },
    industry: "CleanTech",
    duration: "40s",
    coverImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    tags: ["Utility Scale", "Solid-State", "Cinematic 4K", "Zero-Emission"],
    audioProfile: "32Hz Sub-bass drone fading into industrial turbine harmonic resonance",
    cameraOptics: "Arri Alexa LF 35mm Master Anamorphic T1.5",
    lightingPreset: "High-Contrast Sci-Fi Cyan & Electric Cobalt Backlit",
    colorPalette: "Obsidian & Electric Cobalt (#2563EB)",
    timelineClips: [
      {
        clipNumber: 1,
        timestamp: "0:00 - 0:10 | The Core Ingress",
        sceneHook: "Aerial high-speed low-altitude drone push through a desert solar array at dawn, revealing the monolithic Hyperion solid-state container array.",
        cameraMotion: "FPV Cinema Drone dive at 60mph into 15mm low-angle tilt-up, stabilization lock",
        dialogueSpeaker: "Lead Systems Architect (Voiceover)",
        dialogueText: "When the continent's demand spikes by three gigawatts... the grid doesn't hesitate.",
        promptRaw: "Cinematic 8k footage, photorealistic Arri Alexa LF 35mm anamorphic. Low-altitude fast FPV drone flying over vast desert solar mirrors at sunrise, banking sharply to reveal monolithic matte-black energy storage containers with pulsing neon cobalt cooling conduits. Volumetric morning mist, anamorphic lens flare, sharp industrial details, 2.39:1 aspect ratio.",
      },
      {
        clipNumber: 2,
        timestamp: "0:10 - 0:20 | Micro-Thermal Telemetry",
        sceneHook: "Macro probe track through the liquid-nitrogen immersion cooling manifold. Heat-dissipation ripples illuminated by pulsed cobalt LED indicators.",
        cameraMotion: "Slow motorized slider push with Laowa 24mm Probe, 120fps slow-motion",
        dialogueSpeaker: "Lead Systems Architect (Voiceover)",
        dialogueText: "Sub-millisecond reaction. Liquid cooling channels engineered at the atomic scale.",
        promptRaw: "Ultra-detailed macro cinema shot of internal circuit architecture and clear liquid immersion cooling chamber. Bubbles and thermal currents swirling around dark metallic micro-capacitors. Glowing electric blue LED indicators pulse rhythmically. 120fps slow motion, pristine reflections, hyper-realistic depth of field.",
      },
      {
        clipNumber: 3,
        timestamp: "0:20 - 0:30 | The Megacity Conduit",
        sceneHook: "High-angle transition to a metropolis skyline at dusk. High-voltage subterranean lines illuminate in overlaid cyan holographics as power transfers instantly.",
        cameraMotion: "Helicopter Cineflex 360 gyro-stabilized orbit descending toward city center",
        dialogueSpeaker: "Narrator (Deep, Calm Authority)",
        dialogueText: "Clean power held in reserve. Delivered before the lights can even flicker.",
        promptRaw: "Cinematic evening skyline of modern skyscraper metropolis during twilight blue hour. Subtle translucent holographic cyan grid visualizing underground clean power distribution lines glowing through roads and bridges. Hyper-realistic city lights, cinematic mist, Arri Alexa 50mm, 4k master.",
      },
      {
        clipNumber: 4,
        timestamp: "0:30 - 0:40 | Monolith Reveal & Callout",
        sceneHook: "Final heroic low-angle centered framing of the Hyperion Megawatt battery monolith under a starry night sky. The brand emblem ignites in crisp cobalt laser light.",
        cameraMotion: "Slow crane pull-back with smooth vertical boom-up, static landing",
        dialogueSpeaker: "Narrator",
        dialogueText: "Hyperion Energy. Architecture for the permanent grid.",
        promptRaw: "Hero cinematic framing of a sleek architectural matte obsidian energy monolith in an open nocturnal landscape under a clear starry night sky with Milky Way. Minimalist brand typography subtly laser-illuminated in electric blue. Cinematic lens flare, rim lighting, 8k resolution, timeless commercial finish.",
      },
    ],
  },
  {
    _id: "bp-coffee-40s",
    title: "Obsidian Reserve: Sensory Roast Architecture",
    slug: { current: "obsidian-reserve-sensory-roast" },
    industry: "Specialty Coffee",
    duration: "40s",
    coverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Single Origin", "Nordic Minimalist", "Macro 100mm", "Acoustic Foley"],
    audioProfile: "Aero-press vacuum hiss, bean crackle, ceramic contact, warm acoustic cello",
    cameraOptics: "100mm Macro Prime f/2.8 + 35mm Master Prime",
    lightingPreset: "Warm Golden-Hour (2800K) Natural Sunbeams",
    colorPalette: "Porcelain Light & Warm Roasted Obsidian",
    timelineClips: [
      {
        clipNumber: 1,
        timestamp: "0:00 - 0:10 | The First Crack",
        sceneHook: "Extreme macro slow-motion inside cast iron drum roaster. Single Geisha coffee bean expands and undergoes the first crack, venting golden aroma oils.",
        cameraMotion: "Extreme Macro 100mm static with shallow depth of field, 240fps slow motion",
        dialogueSpeaker: "Master Roaster (Quiet, Intimate)",
        dialogueText: "Exactly two hundred and four degrees. That's where sweetness emerges from heat.",
        promptRaw: "Hyper-detailed 240fps macro shot of single specialty coffee bean expanding during roasting, micro-fractures forming on the glossy caramelized brown surface with tiny beads of golden aromatic oils. Floating micro smoke curls in cinematic warm backlight, 100mm macro lens, photorealistic 8k commercial quality.",
      },
      {
        clipNumber: 2,
        timestamp: "0:10 - 0:20 | The Precision Grind",
        sceneHook: "Titanium burr grinder cutting through dense high-altitude beans. Uniform particle cascade backlit by warm 2800K window daylight onto minimalist porcelain scale.",
        cameraMotion: "Dynamic Dutch-angle whip-pan settling into ultra-stable side profile",
        dialogueSpeaker: "Master Roaster",
        dialogueText: "Micron-level uniformity. No fines. No bitterness.",
        promptRaw: "Close up cinematic shot of industrial titanium conical coffee burr grinding dark roasted beans. Golden coffee grounds showering into a minimalist matte black portafilter on a white ceramic scale. Soft morning sunlight slicing across dark luxury kitchen island, gentle dust motes dancing in light.",
      },
      {
        clipNumber: 3,
        timestamp: "0:20 - 0:30 | The Bloom & Saturation",
        sceneHook: "Hand-poured 94°C water from a gooseneck kettle hitting grounds in a glass dripper. Rich bubbling bloom dome releasing silky crema aroma.",
        cameraMotion: "Smooth 360-degree turntable pan orbiting the glass dripper",
        dialogueSpeaker: "Master Roaster",
        dialogueText: "Thirty seconds of blooming. Unlocking notes of bergamot and wild jasmine.",
        promptRaw: "Slow motion close up of steaming hot water poured from a matte black gooseneck kettle onto fresh ground coffee in a minimalist crystal dripper. The coffee crust rises and blooms with aromatic amber crema bubbles. Golden hour side lighting, steam curls rising, 4k 60fps cinematic look.",
      },
      {
        clipNumber: 4,
        timestamp: "0:30 - 0:40 | The First Sip",
        sceneHook: "A hand lifts an artisan ceramic cup crafted from raw porcelain. Swirling rich amber espresso with micro-foam crema. The product lockup appears in elegant typography.",
        cameraMotion: "Slow crane push-in descending to tabletop level",
        dialogueSpeaker: "Narrator (Whispered Luxury)",
        dialogueText: "Obsidian Reserve. Coffee, distilled to pure intention.",
        promptRaw: "Cinematic commercial lockup of a handmade textured porcelain cup filled with rich crema espresso resting on dark charred oak timber table. Gentle steam rising against a dark moody architectural background. Clean minimalist serif branding 'OBSIDIAN RESERVE' fades in. 8k, award winning commercial aesthetic.",
      },
    ],
  },
  {
    _id: "bp-realestate-40s",
    title: "Sanctuary 09: Pacific Cantilever",
    slug: { current: "sanctuary-09-pacific-cantilever" },
    industry: "Real Estate",
    duration: "40s",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Ultra-Luxury", "Architectural", "Cooke Anamorphic", "Cantilever"],
    audioProfile: "Deep ocean surf reverb, gentle piano cadence, acoustic spatial clarity",
    cameraOptics: "Cooke S7/i Full Frame Plus 21mm & 40mm Cine Primes",
    lightingPreset: "Dusk Twilight Blue-Hour with 3000K Interior Recessed Glow",
    colorPalette: "Raw Travertine, Obsidian Slate, Ocean Blue",
    timelineClips: [
      {
        clipNumber: 1,
        timestamp: "0:00 - 0:10 | The Cliffside Gravity Defiance",
        sceneHook: "Sweeping coastal sunset establishing shot of a monolithic concrete and glass residence cantilevered 200 feet over pounding Pacific breakers.",
        cameraMotion: "Cineflex ocean-to-cliff arc shot at golden hour sunset",
        dialogueSpeaker: "Architectural Voiceover",
        dialogueText: "To build here required ignoring convention... and mastering the horizon.",
        promptRaw: "Breathtaking wide architectural establishing shot of a futuristic ultra-luxury concrete and glass mansion cantilevered over rugged coastal ocean cliffs at sunset. Crashing ocean waves with sea spray below, warm orange and violet sky, glass infinity pool edge glowing softly, shot on Cooke 21mm full frame cine lens.",
      },
      {
        clipNumber: 2,
        timestamp: "0:10 - 0:20 | The Seamless Threshold",
        sceneHook: "Motorized 40-foot frameless glass panels slide silently into raw basalt walls, erasing the boundary between the living room and the ocean breeze.",
        cameraMotion: "Steadicam forward walk-through across seamless Italian travertine floors",
        dialogueSpeaker: "Architectural Voiceover",
        dialogueText: "Ninety linear feet of unobstructed glass. The sea becomes your living wall.",
        promptRaw: "Steadicam interior shot moving gracefully through a high-ceiling minimalist living room with raw concrete walls and custom low-profile furniture. Huge floor-to-ceiling glass walls recess into the stone, opening up to an infinity pool and endless ocean horizon. Warm indirect architectural LED lighting, 8k.",
      },
      {
        clipNumber: 3,
        timestamp: "0:20 - 0:30 | The Subterranean Cellar & Gallery",
        sceneHook: "Glance into the carved bedrock wine sanctuary and automotive gallery illuminated by linear ceiling cove light guides.",
        cameraMotion: "Slow crane descent down floating cantilevered obsidian staircase",
        dialogueSpeaker: "Architectural Voiceover",
        dialogueText: "Carved into primordial granite. Timeless privacy.",
        promptRaw: "Cinematic shot of luxury subterranean wine cellar and private art gallery carved directly into natural raw dark granite rock. Minimalist glass display cases, floating black oak staircase, mood lighting with deep shadows, Arri Alexa LF 35mm master look.",
      },
      {
        clipNumber: 4,
        timestamp: "0:30 - 0:40 | The Twilight Lockup",
        sceneHook: "Full home illuminates as evening sets in. The warm glow mirrors onto the pool surface with private helicopter pad silhouetted.",
        cameraMotion: "Slow ascending drone pull-back into dusk twilight",
        dialogueSpeaker: "Narrator",
        dialogueText: "Sanctuary 09. Private acquisition by bespoke inquiry.",
        promptRaw: "Full exterior night view of modern architectural masterpiece glowing warmly from within during dusk twilight. Reflections in still water infinity pool, silhouetted cypress trees against deep blue sky, cinematic ultra-luxury lifestyle commercial lockup, 8k resolution.",
      },
    ],
  },
  {
    _id: "bp-cybernetics-40s",
    title: "Aegis Synth-Core: Kinetic Bipedal Reflex",
    slug: { current: "aegis-synth-core-kinetic-reflex" },
    industry: "Autonomous Systems",
    duration: "40s",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Robotics", "High-Torque Actuators", "Cybernetic Cyan", "Sub-Millisecond"],
    audioProfile: "Micro-hydraulic actuation, high-speed capacitor recharge, digital telemetry",
    cameraOptics: "Kowa Anamorphic 40mm T2.3 + High-Speed Phantom Flex 4K",
    lightingPreset: "High-Contrast Sci-Fi Cyan (#06B6D4) with Strobe Calibration Grids",
    colorPalette: "Phosphor Cyan, Carbon Black (#0C1017), Brushed Chrome",
    timelineClips: [
      {
        clipNumber: 1,
        timestamp: "0:00 - 0:10 | Actuator Wake State",
        sceneHook: "In a dark testing hangar, an advanced bipedal robotic humanoid torso calibrates. Finger joints flex with carbon-fiber micro-tendon precision.",
        cameraMotion: "Low Dutch-angle circular track with 35mm Anamorphic, cyan rim glow",
        dialogueSpeaker: "Lead Cybernetics Engineer",
        dialogueText: "Two hundred and eighty degrees of freedom. Measured in microseconds.",
        promptRaw: "Cinematic medium close up of sleek futuristic humanoid robot in dark laboratory. High-precision carbon fiber fingers and titanium joints flexing during bootup sequence. Glowing cyan fiber-optic data channels beneath semi-translucent composite armor plates. Anamorphic lens flare, dark luxury sci-fi aesthetic.",
      },
      {
        clipNumber: 2,
        timestamp: "0:10 - 0:20 | Dynamic Impact Absorption",
        sceneHook: "Robot lands from a 4-meter drop onto steel test deck. High-torque harmonic drive ankles absorb kinetic impact with zero rebound sway.",
        cameraMotion: "Phantom Flex 4K at 1000fps ultra slow-motion, ground-level horizontal track",
        dialogueSpeaker: "Lead Cybernetics Engineer",
        dialogueText: "Self-correcting neural balance. More adaptive than biological muscle.",
        promptRaw: "1000fps ultra slow motion shot of robotic foot and ankle landing with incredible power onto metallic grating. Titanium shock absorbers compress with visible pressure waves, tiny sparks and dust dispersal. Intense cyan and white directional studio rim lighting, photorealistic 8k.",
      },
      {
        clipNumber: 3,
        timestamp: "0:20 - 0:30 | Synchronized Fleet Formation",
        sceneHook: "The robot turns to reveal twenty identical autonomous units walking in synchronized fluid gait across the testing ground.",
        cameraMotion: "Fast dolly-back along center axis at matching walking speed",
        dialogueSpeaker: "Narrator (Visionary Confidence)",
        dialogueText: "Industrial scale autonomy is no longer a simulation.",
        promptRaw: "Wide cinematic tracking shot looking backward as an echelon formation of twenty sophisticated humanoid autonomous robots walk forward in lockstep through modern industrial hangar. Reflective epoxy floor, overhead LED light strips, cinematic cyan and deep obsidian atmosphere.",
      },
      {
        clipNumber: 4,
        timestamp: "0:30 - 0:40 | The Aegis Core Identity",
        sceneHook: "Macro close-up on the unit's ocular sensor housing as it refocuses directly at the lens. Aegis Dynamics emblem projects in electric cyan.",
        cameraMotion: "Snap zoom into optical aperture with digital telemetry overlay",
        dialogueSpeaker: "Narrator",
        dialogueText: "Aegis Synth-Core. The physical intelligence platform.",
        promptRaw: "Extreme close up of futuristic robot head optical sensor with multi-element sapphire lens iris contracting and adjusting focus. Crisp cyan circular telemetry graphic, clean high-tech typography 'AEGIS DYNAMICS', high-end automotive commercial finish, 8k resolution.",
      },
    ],
  },
];
