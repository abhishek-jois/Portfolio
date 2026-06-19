import CopyEmail from '@/components/CopyEmail'

const aboutFacts = [
  { label: 'Location', value: 'Bangalore, India', sub: null },
  { label: 'Education', value: 'B.Tech CSE (AI & ML)', sub: 'PES University · 2022 – 2026' },
  { label: 'Currently', value: 'AI Engineer', sub: 'QpiAI · Apr 2026 – Present' },
  { label: 'Publications', value: '2 First-Author Papers', sub: 'ACM BCB 2026 · ICML Workshop 2026' },
]

const publications = [
  {
    venue: 'ACM BCB 2026',
    title:
      'Transformer-Guided Graph Attention for Direct Cardiac Mesh Reconstruction: A Structural Digital Twin Framework',
    desc: 'End-to-end pipeline from raw CT/MRI to a structured cardiac digital twin using 3D Swin Transformer segmentation and Graph Attention Network mesh deformation. Achieved 0.84+ Dice score across 6 cardiac structures. Replaced marching cubes with direct surface prediction, reducing reconstruction time by 60% while maintaining anatomical consistency.',
  },
  {
    venue: 'ICML Workshop on LLM4Plan 2026',
    title: 'ReTreVal: Reasoning Tree with Validation for Mathematical Problem Solving',
    desc: 'Hybrid agentic reasoning framework combining Tree-of-Thoughts, Reflexion memory, and LLM-based critique scoring. Achieved 40% improvement over ReAct baseline on a 500-problem benchmark. Increased high-quality solutions by 138% over Reflexion via dual validation and persistent cross-problem learning.',
  },
]

const experiences = [
  {
    role: 'AI Engineer',
    org: 'QpiAI · On-Site, Bangalore',
    date: 'Apr 2026 – Present',
    bullets: [
      'Researched and applied Group Relative Policy Optimization (GRPO) for RL on LLMs; investigated reward shaping to align small models (2B–7B) with task-specific objectives without human annotation overhead.',
      'Designed and trained specialized sub-agents using compact models (Qwen 2B, LLaMA 7B) within the AgentHive multi-agent framework, reducing inference cost while preserving end-to-end task performance.',
      'Implemented an NLP-to-SQL pipeline for the AgentHive Generalist Agent, enabling natural language querying of enterprise relational databases and closing the loop between structured data and autonomous decision-making.',
      'Implemented advanced prompting strategies (CoT, ReAct, Reflexion, Self-Refine); authored internal knowledge base on LLM optimization and agentic design patterns.',
    ],
  },
  {
    role: 'Research Intern — AI/ML',
    org: 'CAVE LABS, PES University · Bangalore',
    date: 'May 2024 – Sep 2024',
    bullets: [
      'Engineered an end-to-end pipeline (raw CT/MRI → 3D Swin Transformer segmentation → GAT mesh deformation → cardiac digital twin), achieving 0.84+ Dice score across 6 cardiac structures; accepted at ACM BCB 2026.',
      'Replaced marching cubes post-processing with direct surface prediction, reducing reconstruction time by 60% while maintaining anatomical consistency across structures including pulmonary artery (0.80 Dice).',
      'Designed ReTreVal — a hybrid reasoning framework combining Tree-of-Thoughts, Reflexion, and LLM critique scoring; 40% improvement over ReAct and 138% more high-quality solutions vs. Reflexion; accepted at ICML Workshop 2026.',
      'Led a 3-member research team through the full research lifecycle from ideation to paper submission across two venues.',
    ],
  },
]

const projects = [
  {
    icon: '⚡',
    title: 'FitLLM',
    href: 'https://github.com/abhishek-jois/FitLLM',
    desc: 'Fault-tolerant inference and training on a three-tier memory hierarchy (NVMe SSD → CPU RAM → GPU VRAM/HBM). Enables full fine-tuning of 70B LoRA models with peak GPU VRAM under 4 GB — making large-scale LLM training feasible on commodity hardware via async NVMe prefetching and overlapped PCIe/GPU transfers.',
    tags: ['PyTorch', 'CUDA', 'LoRA', 'NVMe I/O', 'PCIe DMA', 'AdamW'],
  },
  {
    icon: '🫀',
    title: 'Cardiac Digital Twin',
    href: 'https://github.com/abhishek-jois/Heart',
    desc: 'End-to-end cardiac mesh reconstruction from CT/MRI using 3D Swin Transformer + Graph Attention Networks. 0.84+ Dice score across 6 cardiac structures. Direct surface prediction cuts reconstruction time by 60%. Published at ACM BCB 2026 (First Author).',
    tags: ['3D Swin Transformer', 'GAT', 'PyTorch', 'Medical AI'],
  },
  {
    icon: '🌲',
    title: 'ReTreVal',
    href: 'https://github.com/qpiai/retreval',
    desc: 'Hybrid agentic reasoning framework combining Tree-of-Thoughts, Reflexion memory, and LLM critique scoring for mathematical problem solving. 40% improvement over ReAct baseline. 138% more high-quality solutions vs. Reflexion. Published at ICML Workshop on LLM4Plan 2026 (First Author).',
    tags: ['LangChain', 'Tree-of-Thoughts', 'Reflexion', 'LLM Reasoning'],
  },
  {
    icon: '🗺️',
    title: 'Traverse',
    href: 'https://github.com/abhishek-jois/Traverse',
    desc: 'Dependency graph retrieval for AI coding agents. Builds a weighted map of any codebase (nodes = file metadata, edges = import coupling) so the AI queries the map before reading any file — turning blind grep-based exploration into targeted lookup. Cut agent turns from 20 to 11 on a 1,600-file monorepo.',
    tags: ['Python', 'NetworkX', 'MCP', 'Tree-sitter', 'Claude Code'],
  },
]

const skills = [
  {
    title: 'LLM & Transformers',
    tags: ['LLaMA', 'Qwen 2.5', 'GPT', 'BERT', 'LoRA', 'QLoRA', 'RLHF', 'GRPO', 'Quantization'],
  },
  {
    title: 'Agentic Frameworks',
    tags: ['LangChain', 'LangGraph', 'LlamaIndex', 'Tree-of-Thoughts', 'ReAct', 'Reflexion'],
  },
  {
    title: 'Systems & Hardware',
    tags: ['CUDA', 'PCIe DMA', 'NVMe I/O', 'HBM', 'Grad Checkpointing', '4-bit Quant'],
  },
  {
    title: 'ML Frameworks',
    tags: ['PyTorch', 'TensorFlow', 'HuggingFace', 'Scikit-learn', 'OpenCV'],
  },
  {
    title: 'Medical AI',
    tags: ['3D Swin Transformer', 'Graph Attention Networks', 'CT/MRI Segmentation', 'Mesh Deformation'],
  },
  {
    title: 'Programming',
    tags: ['Python', 'C', 'CUDA C', 'SQL', 'JavaScript', 'Bash'],
  },
]


function SectionLabel({ children }) {
  return (
    <p className="text-xs font-bold tracking-[2.5px] uppercase text-indigo-600 dark:text-indigo-400 mb-2">
      {children}
    </p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight mb-8">{children}</h2>
  )
}

function Tag({ children }) {
  return (
    <span className="text-[0.7rem] px-2 py-0.5 bg-gray-100 dark:bg-[#1c1c1c] text-gray-500 dark:text-gray-400 rounded font-mono">
      {children}
    </span>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ── */}
      <div className="max-w-5xl mx-auto px-[5%] pt-24 pb-20">
        <div className="inline-block text-xs font-semibold tracking-wide bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full mb-7">
          Open to Research &amp; Engineering roles · 2026
        </div>
        <h1 className="text-5xl md:text-[4rem] font-extrabold tracking-[-2.5px] leading-[1.05] mb-5">
          Hi, I&apos;m<br />
          <span className="text-indigo-600 dark:text-indigo-400">Abhishek HS</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-loose mb-10">
          LLM Systems · Efficient Fine-tuning · Agentic AI · Medical AI<br />
          Building systems that make large models actually work.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-80 transition-all hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-gray-200 dark:border-[#333] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download="Abhishek_HS_Resume.pdf"
            className="px-6 py-2.5 border border-gray-200 dark:border-[#333] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5"
          >
            ↓ Resume
          </a>
          <a
            href="https://github.com/abhishek-jois"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gray-200 dark:border-[#333] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-hs-262560288/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gray-200 dark:border-[#333] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=cAmVi6gAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gray-200 dark:border-[#333] text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all hover:-translate-y-0.5"
          >
            Scholar ↗
          </a>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── ABOUT ── */}
      <div id="about" className="max-w-5xl mx-auto px-[5%] py-20">
        <SectionLabel>About</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <SectionTitle>Who I am</SectionTitle>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-[0.975rem]">
              I&apos;m a final-year B.Tech CSE (AI &amp; ML) student at PES University, Bangalore, with a deep
              focus on LLM systems, efficient fine-tuning, and agentic AI. I work at the intersection of
              research and engineering — building systems that make large models practical on real hardware.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-[0.975rem]">
              I&apos;ve published two first-author papers at ACM BCB 2026 and ICML Workshop on LLM4Plan 2026.
              I currently work as an AI Engineer at QpiAI, where I build GRPO-based RL pipelines for
              LLMs, multi-agent frameworks, and NLP-to-SQL systems.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[0.975rem]">
              Outside of research, I mentor AI/ML teams at PES University, play badminton, and enjoy
              travelling.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            {aboutFacts.map((f) => (
              <div
                key={f.label}
                className="p-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-lg"
              >
                <div className="text-[0.67rem] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  {f.label}
                </div>
                <div className="text-sm font-semibold">{f.value}</div>
                {f.sub && (
                  <div className="text-[0.78rem] text-gray-400 dark:text-gray-500 mt-0.5">{f.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── PUBLICATIONS ── */}
      <div id="publications" className="max-w-5xl mx-auto px-[5%] py-20">
        <SectionLabel>Research</SectionLabel>
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
          <a
            href="https://scholar.google.com/citations?hl=en&user=cAmVi6gAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-[#333] px-3 py-1.5 rounded-lg transition-all hover:border-indigo-400"
          >
            Google Scholar ↗
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {publications.map((p) => (
            <div
              key={p.venue}
              className="p-7 border border-gray-200 dark:border-[#222] rounded-xl bg-white dark:bg-[#111] hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-none"
            >
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-[0.71rem] font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded">
                  {p.venue}
                </span>
                <span className="text-[0.71rem] font-semibold px-2.5 py-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 rounded">
                  ✓ Accepted
                </span>
                <span className="text-[0.71rem] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 rounded">
                  First Author
                </span>
              </div>
              <div className="font-bold text-[0.975rem] mb-2 leading-snug">{p.title}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── EXPERIENCE ── */}
      <div id="experience" className="max-w-5xl mx-auto px-[5%] py-20">
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Where I&apos;ve worked</SectionTitle>
        <div className="flex flex-col gap-5">
          {experiences.map((e) => (
            <div
              key={e.org}
              className="p-7 border border-gray-200 dark:border-[#222] rounded-xl bg-white dark:bg-[#111] hover:border-indigo-400/60 dark:hover:border-indigo-500/60 transition-colors"
            >
              <div className="flex justify-between items-start flex-wrap gap-3 mb-1">
                <div className="font-bold text-[1rem]">{e.role}</div>
                <span className="text-[0.75rem] text-gray-400 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] px-2.5 py-1 rounded">
                  {e.date}
                </span>
              </div>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-5">{e.org}</div>
              <ul className="flex flex-col gap-3 list-none">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5 text-xs">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── PROJECTS ── */}
      <div id="projects" className="max-w-5xl mx-auto px-[5%] py-20">
        <SectionLabel>Work</SectionLabel>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 border border-gray-200 dark:border-[#222] rounded-xl bg-white dark:bg-[#111] flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-none group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl leading-none">{p.icon}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors font-medium"
                >
                  GitHub ↗
                </a>
              </div>
              <div className="font-bold text-[1rem] mb-2">{p.title}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── SKILLS ── */}
      <div id="skills" className="max-w-5xl mx-auto px-[5%] py-20">
        <SectionLabel>Stack</SectionLabel>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="p-5 border border-gray-200 dark:border-[#222] rounded-xl bg-white dark:bg-[#111]"
            >
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[1.5px] text-indigo-600 dark:text-indigo-400 mb-3">
                {s.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-[#222]" />

      {/* ── CONTACT ── */}
      <div id="contact" className="max-w-5xl mx-auto px-[5%] py-20">
        <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-2xl text-center py-16 px-8">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Let&apos;s work together</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Open to research collaborations, engineering roles, and interesting conversations. Feel free to
            reach out anytime.
          </p>
          <CopyEmail />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 dark:border-[#222] py-8 text-center text-gray-400 text-xs">
        © 2026 Abhishek HS · Bangalore, India
      </footer>

    </main>
  )
}
