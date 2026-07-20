"use client";

import React, { useState } from "react";

const markdownContent = `---
name: Varun Daiya
location: Chennai, India
role: CS + Physics Undergraduate
substack: https://varundaiya.substack.com
github: https://github.com/varun29-git
x_twitter: https://x.com/varun_daiya_
linkedin: https://www.linkedin.com/in/varun-daiya-b58219274/
email: vjdaiya29@gmail.com
---

# Varun Daiya

**Location:** Chennai, India  
**Role:** CS + Physics Undergraduate  
**Connect:** mailto:vjdaiya29@gmail.com | https://github.com/varun29-git | https://x.com/varun_daiya_ | https://www.linkedin.com/in/varun-daiya-b58219274/

---

## Identity & About

I'm a CS and Physics student. Most of my time goes into building at the intersection of machine learning, quantum algorithms, and the mathematics that runs underneath both.

Currently building **Terminus**: a 2.6B-parameter native ternary (1.58-bit) small language model designed for offline, low-memory execution on consumer Android devices, supporting ten Indic languages.

I learn best by implementing things **from scratch**. Papers are a starting point and working code is where understanding actually lands.

I write occasionally on [Substack](https://varundaiya.substack.com).

---

## Selected Projects

### NNCS-Mamba
- **Status:** Under Development
- **Source:** https://github.com/varun29-git/NNCS-Mamba
- **Description:** Building a neural controller for drones. This project uses formal mathematical verification to ensure the AI-driven flight is safe and stable.

### ampamp
- **Source:** https://github.com/QuantumAmplification/ampamp
- **Description:** A Python library for quantum algorithms. It provides tools for "amplitude amplification", a core technique used in quantum search and optimization.

### VectorCLM
- **Source:** https://github.com/varun29-git/VectorCLM
- **Description:** A custom-built AI language model with 145 million parameters. It was trained from scratch on 3.5 billion tokens to understand human language patterns.

### MambaReview
- **Status:** Under Development
- **Source:** https://github.com/varun29-git/MambaReview
- **Description:** A systematic study of different versions of the Mamba architecture. This project focuses on how these models process sequences of information differently.

### WorldModels
- **Source:** https://github.com/varun29-git/WorldModels
- **Description:** An AI system that learns to "imagine" and predict its environment. It uses a combination of neural networks to build an internal model of the world.

---

## Publications

### Congestion-Free Routing on Quantum Chips
- **Link:** https://arxiv.org/abs/2604.27015
- **Description:** Proposing swap-free spectral-qudit routing on quantum chips, where higher qudit levels act as orthogonal buses for nonlocal control delivery on near-neighbor hardware.

### Quantum Amplitude Amplification Survey
- **Visual Guide:** https://quantumamplification.github.io/QuantumAmplitudeAmplification/
- **Zenodo:** https://zenodo.org/records/20054981
- **Description:** A comprehensive survey of quantum amplitude-amplification methods and their algorithmic variants, bridging foundational concepts with modern optimizations.

---

## Open Questions

1. **01:** Are recursive AI machines the end-state, and was Karpathy's autoresearch the first primitive step toward them?
2. **02:** Are we moving toward an agentic software economy, and will we eventually see dedicated browsers and infrastructure designed exclusively for agents?

---

## AI Music

### Synthetic Soundscapes
- **Route:** /music (or /music?mode=machine)
- **Description:** Generative sound and music experiments. Exploring how AI can interpret and create complex structural patterns in audio.

---

## Writing

### After the Wall
- **Subtitle:** Rebuilding AI from one bit
- **Platform:** Substack
- **URL:** https://varundaiya.substack.com/p/after-the-wall
- **Description:** An essay on the limits of Moore’s Law, the end of brute-force AI scaling, and the transition toward efficient intelligence. Exploring how one-bit models can bring powerful AI from massive data centers to everyday devices, changing how intelligence is built, accessed, and controlled.

### Ink, Bits, and Tokens
- **Subtitle:** A History of Information and the Collapse of Its Old Paradigm
- **Platform:** Substack
- **URL:** https://varundaiya.substack.com/p/ink-bits-and-tokens
- **Description:** Essay on computation, intelligence, and the ideas that connect them. I write about how information has evolved through history, why the shift from storing and retrieving to generating on demand is a paradigm shift, and what it means for technology, power, and the people building in this moment.

---

## Footer Metadata
- **Copyright:** Varun Daiya // 2026 // Chennai
- **GitHub:** https://github.com/varun29-git
- **X (Twitter):** https://x.com/varun_daiya_
- **LinkedIn:** https://www.linkedin.com/in/varun-daiya-b58219274/
- **Email:** vjdaiya29@gmail.com
`;

const jsonLdContent = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Varun Daiya",
    "jobTitle": "CS + Physics Undergraduate",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressCountry": "India"
    },
    "description": "I'm a CS and Physics student. Most of my time goes into building at the intersection of machine learning, quantum algorithms, and the mathematics that runs underneath both. Currently building Terminus: a 2.6B-parameter native ternary (1.58-bit) small language model designed for offline, low-memory execution on consumer Android devices, supporting ten Indic languages. I learn best by implementing things from scratch.",
    "sameAs": [
      "https://github.com/varun29-git",
      "https://x.com/varun_daiya_",
      "https://www.linkedin.com/in/varun-daiya-b58219274/",
      "https://varundaiya.substack.com"
    ],
    "email": "vjdaiya29@gmail.com",
    "projects": [
      {
        "name": "Terminus",
        "description": "A 2.6B-parameter native ternary (1.58-bit) small language model designed for offline, low-memory execution on consumer Android devices, supporting ten Indic languages."
      },
      {
        "name": "NNCS-Mamba",
        "status": "Under Development",
        "url": "https://github.com/varun29-git/NNCS-Mamba",
        "description": "Building a neural controller for drones. This project uses formal mathematical verification to ensure the AI-driven flight is safe and stable."
      },
      {
        "name": "ampamp",
        "url": "https://github.com/QuantumAmplification/ampamp",
        "description": "A Python library for quantum algorithms. It provides tools for \"amplitude amplification\", a core technique used in quantum search and optimization."
      },
      {
        "name": "VectorCLM",
        "url": "https://github.com/varun29-git/VectorCLM",
        "description": "A custom-built AI language model with 145 million parameters. It was trained from scratch on 3.5 billion tokens to understand human language patterns."
      },
      {
        "name": "MambaReview",
        "status": "Under Development",
        "url": "https://github.com/varun29-git/MambaReview",
        "description": "A systematic study of different versions of the Mamba architecture. This project focuses on how these models process sequences of information differently."
      },
      {
        "name": "WorldModels",
        "url": "https://github.com/varun29-git/WorldModels",
        "description": "An AI system that learns to \"imagine\" and predict its environment. It uses a combination of neural networks to build an internal model of the world."
      }
    ],
    "publications": [
      {
        "name": "Congestion-Free Routing on Quantum Chips",
        "url": "https://arxiv.org/abs/2604.27015",
        "description": "Proposing swap-free spectral-qudit routing on quantum chips, where higher qudit levels act as orthogonal buses for nonlocal control delivery on near-neighbor hardware."
      },
      {
        "name": "Quantum Amplitude Amplification Survey",
        "visualGuide": "https://quantumamplification.github.io/QuantumAmplitudeAmplification/",
        "zenodo": "https://zenodo.org/records/20054981",
        "description": "A comprehensive survey of quantum amplitude-amplification methods and their algorithmic variants, bridging foundational concepts with modern optimizations."
      }
    ],
    "openQuestions": [
      "Are recursive AI machines the end-state, and was Karpathy's autoresearch the first primitive step toward them?",
      "Are we moving toward an agentic software economy, and will we eventually see dedicated browsers and infrastructure designed exclusively for agents?"
    ],
    "essays": [
      {
        "title": "After the Wall",
        "subtitle": "Rebuilding AI from one bit",
        "url": "https://varundaiya.substack.com/p/after-the-wall",
        "description": "An essay on the limits of Moore’s Law, the end of brute-force AI scaling, and the transition toward efficient intelligence. Exploring how one-bit models can bring powerful AI from massive data centers to everyday devices, changing how intelligence is built, accessed, and controlled."
      },
      {
        "title": "Ink, Bits, and Tokens",
        "subtitle": "A History of Information and the Collapse of Its Old Paradigm",
        "url": "https://varundaiya.substack.com/p/ink-bits-and-tokens",
        "description": "Essay on computation, intelligence, and the ideas that connect them. I write about how information has evolved through history, why the shift from storing and retrieving to generating on demand is a paradigm shift, and what it means for technology, power, and the people building in this moment."
      }
    ]
  },
  null,
  2
);

const plainTextContent = `VARUN DAIYA
Chennai, India | CS + Physics Undergraduate
Email: vjdaiya29@gmail.com
GitHub: https://github.com/varun29-git
X (Twitter): https://x.com/varun_daiya_
LinkedIn: https://www.linkedin.com/in/varun-daiya-b58219274/
Substack: https://varundaiya.substack.com

IDENTITY & ABOUT:
I'm a CS and Physics student. Most of my time goes into building at the intersection of machine learning, quantum algorithms, and the mathematics that runs underneath both.

Currently building Terminus: a 2.6B-parameter native ternary (1.58-bit) small language model designed for offline, low-memory execution on consumer Android devices, supporting ten Indic languages.

I learn best by implementing things from scratch. Papers are a starting point and working code is where understanding actually lands.

SELECTED PROJECTS:
1. NNCS-Mamba [Under Development]
   Source: https://github.com/varun29-git/NNCS-Mamba
   Description: Building a neural controller for drones. This project uses formal mathematical verification to ensure the AI-driven flight is safe and stable.

2. ampamp
   Source: https://github.com/QuantumAmplification/ampamp
   Description: A Python library for quantum algorithms. It provides tools for "amplitude amplification", a core technique used in quantum search and optimization.

3. VectorCLM
   Source: https://github.com/varun29-git/VectorCLM
   Description: A custom-built AI language model with 145 million parameters. It was trained from scratch on 3.5 billion tokens to understand human language patterns.

4. MambaReview [Under Development]
   Source: https://github.com/varun29-git/MambaReview
   Description: A systematic study of different versions of the Mamba architecture. This project focuses on how these models process sequences of information differently.

5. WorldModels
   Source: https://github.com/varun29-git/WorldModels
   Description: An AI system that learns to "imagine" and predict its environment. It uses a combination of neural networks to build an internal model of the world.

PUBLICATIONS:
1. Congestion-Free Routing on Quantum Chips
   arXiv: https://arxiv.org/abs/2604.27015
   Description: Proposing swap-free spectral-qudit routing on quantum chips, where higher qudit levels act as orthogonal buses for nonlocal control delivery on near-neighbor hardware.

2. Quantum Amplitude Amplification Survey
   Visual Guide: https://quantumamplification.github.io/QuantumAmplitudeAmplification/
   Zenodo: https://zenodo.org/records/20054981
   Description: A comprehensive survey of quantum amplitude-amplification methods and their algorithmic variants, bridging foundational concepts with modern optimizations.

OPEN QUESTIONS:
01: Are recursive AI machines the end-state, and was Karpathy's autoresearch the first primitive step toward them?
02: Are we moving toward an agentic software economy, and will we eventually see dedicated browsers and infrastructure designed exclusively for agents?

AI MUSIC:
Synthetic Soundscapes
Route: /music (or /music?mode=machine)
Description: Generative sound and music experiments. Exploring how AI can interpret and create complex structural patterns in audio.

WRITING:
1. After the Wall (Rebuilding AI from one bit)
   URL: https://varundaiya.substack.com/p/after-the-wall
   Description: An essay on the limits of Moore’s Law, the end of brute-force AI scaling, and the transition toward efficient intelligence. Exploring how one-bit models can bring powerful AI from massive data centers to everyday devices, changing how intelligence is built, accessed, and controlled.

2. Ink, Bits, and Tokens (A History of Information and the Collapse of Its Old Paradigm)
   URL: https://varundaiya.substack.com/p/ink-bits-and-tokens
   Description: Essay on computation, intelligence, and the ideas that connect them. I write about how information has evolved through history, why the shift from storing and retrieving to generating on demand is a paradigm shift, and what it means for technology, power, and the people building in this moment.

FOOTER:
Varun Daiya // 2026 // Chennai
`;

export default function MachineView() {
  const [format, setFormat] = useState<"markdown" | "json" | "text">("markdown");
  const [copied, setCopied] = useState(false);

  const getActiveContent = () => {
    switch (format) {
      case "json":
        return jsonLdContent;
      case "text":
        return plainTextContent;
      default:
        return markdownContent;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20 font-mono animate-in">
      {/* Machine Mode Header Banner */}
      <div className="mb-6 p-4 rounded-lg bg-accent/10 border border-accent/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-semibold">
              Machine-Readable Mode Active [Full Verbatim Text]
            </div>
            <div className="text-xs text-muted/80 mt-0.5">
              100% complete content & text transcript optimized for LLMs & AI agents.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:border-accent text-muted hover:text-white transition-colors"
          >
            GET /llms.txt
          </a>

          <button
            onClick={handleCopy}
            className="text-[11px] px-3 py-1.5 rounded bg-accent/20 border border-accent/40 hover:bg-accent/30 text-white transition-all flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Context</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal View Container */}
      <div className="bg-[#090912] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-muted/60 text-[11px]">varundaiya_agent_spec.{format === "json" ? "json" : format === "text" ? "txt" : "md"}</span>
          </div>

          {/* Format Sub-Toggle */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-md border border-white/5 text-[11px]">
            <button
              onClick={() => setFormat("markdown")}
              className={`px-2 py-0.5 rounded ${format === "markdown" ? "bg-accent/30 text-white" : "text-muted hover:text-white"}`}
            >
              Markdown
            </button>
            <button
              onClick={() => setFormat("json")}
              className={`px-2 py-0.5 rounded ${format === "json" ? "bg-accent/30 text-white" : "text-muted hover:text-white"}`}
            >
              JSON
            </button>
            <button
              onClick={() => setFormat("text")}
              className={`px-2 py-0.5 rounded ${format === "text" ? "bg-accent/30 text-white" : "text-muted hover:text-white"}`}
            >
              Plain Text
            </button>
          </div>
        </div>

        {/* Code Content View */}
        <div className="p-6 overflow-x-auto text-xs sm:text-sm leading-relaxed text-zinc-300 select-all font-mono whitespace-pre-wrap">
          {getActiveContent()}
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-4 flex flex-wrap justify-between items-center text-[11px] text-muted/60 px-1">
        <span>Complete Unabridged Content | Format: {format.toUpperCase()}</span>
        <span>Agents endpoint available at <code className="text-accent/80">/llms.txt</code></span>
      </div>
    </div>
  );
}
