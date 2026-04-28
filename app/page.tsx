import Starfield from "@/components/Starfield";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-24 sm:px-8 font-body text-foreground selection:bg-accent selection:text-white/90">
      <Starfield />

      {/* Identity */}
      <section id="identity" className="mb-24 animate-in">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-5xl font-light tracking-tight text-white/90 mb-2">
            Varun Daiya
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono tracking-widest text-muted uppercase">
            <span>Chennai, India</span>
            <span>CS + Physics Undergraduate</span>
            <Link href="#footer" className="text-accent/80 hover:text-accent transition-colors cursor-pointer decoration-accent/30 underline underline-offset-4">Connect</Link>
          </div>
        </div>
        
        <div className="mt-12 space-y-8">
          <p className="text-xl font-light leading-relaxed text-muted max-w-2xl">
            I'm a CS and Physics student. Most of my time goes into building at the intersection of machine learning, quantum algorithms, and the mathematics that runs underneath both.
          </p>

          <p className="text-xl font-light leading-relaxed text-muted max-w-xl">
            I learn best by implementing things <span className="text-white/90">from scratch</span>. Papers are a starting point and working code is where understanding actually lands.
          </p>

          <p className="text-sm text-muted/60 font-light tracking-wide uppercase font-mono">
            I write occasionally on <a href="https://varundaiya.substack.com" className="text-accent hover:text-accent/80 transition-colors">Substack</a>.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-32 animate-in [animation-delay:400ms]">
        <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted/60 mb-12 uppercase border-t border-white/5 pt-12">
          // Selected Projects
        </h2>
        <div className="space-y-16">
          {/* NNCS-Mamba */}
          <div className="group">
            <div className="flex justify-between items-baseline mb-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                  NNCS-Mamba
                </h3>
                <span className="font-mono text-[9px] tracking-widest text-accent/50 uppercase">Under Development</span>
              </div>
              <a href="https://github.com/varun29-git/NNCS-Mamba" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Source</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              Building a neural controller for drones. This project uses formal mathematical verification to ensure the AI-driven flight is safe and stable.
            </p>
          </div>

          {/* ampamp */}
          <div className="group border-t border-white/5 pt-12">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                ampamp
              </h3>
              <a href="https://github.com/QuantumAmplification/ampamp" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Source</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              A Python library for quantum algorithms. It provides tools for "amplitude amplification"—a core technique used in quantum search and optimization.
            </p>
          </div>

          {/* VectorCLM */}
          <div className="group border-t border-white/5 pt-12">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                VectorCLM
              </h3>
              <a href="https://github.com/varun29-git/VectorCLM" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Source</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              A custom-built AI language model with 145 million parameters. It was trained from scratch on 3.5 billion tokens to understand human language patterns.
            </p>
          </div>

          {/* MambaReview */}
          <div className="group border-t border-white/5 pt-12">
            <div className="flex justify-between items-baseline mb-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                  MambaReview
                </h3>
                <span className="font-mono text-[9px] tracking-widest text-accent/50 uppercase">Under Development</span>
              </div>
              <a href="https://github.com/varun29-git/MambaReview" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Source</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              A systematic study of different versions of the Mamba architecture. This project focuses on how these models process sequences of information differently.
            </p>
          </div>

          {/* Quantum Amplitude Amplification */}
          <div className="group border-t border-white/5 pt-12">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                Quantum Amplitude Amplification
              </h3>
              <a href="https://quantumamplification.github.io/QuantumAmplitudeAmplification/" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Visual Guide</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              A visual and intuitive guide to help people understand quantum algorithms. It includes a survey paper that explains the math through a unified, graphical lens.
            </p>
          </div>

          {/* WorldModels */}
          <div className="group border-t border-white/5 pt-12">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">
                WorldModels
              </h3>
              <a href="https://github.com/varun29-git/WorldModels" className="font-mono text-[10px] tracking-widest text-muted hover:text-accent border-b border-white/10 hover:border-accent transition-all uppercase">Source</a>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-light">
              An AI system that learns to "imagine" and predict its environment. It uses a combination of neural networks to build an internal model of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Open Questions */}
      <section id="questions" className="mb-32 animate-in [animation-delay:600ms]">
        <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted/60 mb-8 uppercase border-t border-white/5 pt-12">
          // Open Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          <div className="group">
            <span className="font-mono text-[10px] text-accent/40 mb-2 block">01</span>
            <p className="text-sm text-muted font-light leading-snug group-hover:text-muted/90 transition-colors">
              Are recursive AI machines the end-state, and was Karpathy's autoresearch the first primitive step toward them?
            </p>
          </div>
          <div className="group">
            <span className="font-mono text-[10px] text-accent/40 mb-2 block">02</span>
            <p className="text-sm text-muted font-light leading-snug group-hover:text-muted/90 transition-colors">
              Are we moving toward an agentic software economy, and will we eventually see dedicated browsers and infrastructure designed exclusively for agents?
            </p>
          </div>
        </div>
      </section>

      {/* AI Music */}
      <section id="music" className="mb-32 animate-in [animation-delay:700ms]">
        <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted/60 mb-8 uppercase border-t border-white/5 pt-12">
          // AI Music
        </h2>
        <Link 
          href="/music" 
          className="group flex flex-col gap-3 p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative overflow-hidden block"
        >
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
          <div className="flex justify-between items-center">
            <span className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">Synthetic Soundscapes</span>
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase">View Projects</span>
          </div>
          <p className="text-sm text-muted font-light leading-relaxed max-w-xl">
            Generative sound and music experiments. Exploring how AI can interpret and create complex structural patterns in audio.
          </p>
        </Link>
      </section>

      {/* Writing */}
      <section id="writing" className="mb-32 animate-in [animation-delay:800ms]">
        <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted/60 mb-8 uppercase border-t border-white/5 pt-12">
          // Writing
        </h2>
        <a 
          href="https://varundaiya.substack.com/p/ink-bits-and-tokens" 
          className="group flex flex-col gap-3 p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-2xl text-white/90 group-hover:text-accent transition-colors">Ink, Bits, and Tokens</span>
              <span className="font-mono text-[9px] tracking-widest text-accent/50 uppercase">A History of Information and the Collapse of Its Old Paradigm</span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase">Substack</span>
          </div>
          <p className="text-sm text-muted font-light leading-relaxed max-w-xl">
            Essays on computation, intelligence, and the ideas that connect them. I write about how information has evolved through history, why the shift from storing and retrieving to generating on demand is a paradigm shift, and what it means for technology, power, and the people building in this moment.
          </p>
        </a>
      </section>

      <footer id="footer" className="mt-48 pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8 gap-8">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted/60 uppercase">
            Varun Daiya // 2026 // Chennai
          </span>
          <div className="flex gap-8 items-center">
            <a href="https://github.com/varun29-git" className="text-muted/80 hover:text-accent transition-all" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://x.com/varun_daiya_" className="text-muted/80 hover:text-accent transition-all" aria-label="X (Twitter)">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/varun-daiya-b58219274/" className="text-muted/80 hover:text-accent transition-all" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:vjdaiya29@gmail.com" className="text-muted/80 hover:text-accent transition-all" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
