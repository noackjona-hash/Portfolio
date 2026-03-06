"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Github, Globe, Send, Terminal, Sparkles, FolderGit2, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!input) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (e) {
      setResponse("Fehler bei der Verbindung zum Core-System...");
    }
    setLoading(false);
  };

  // Platzhalter-Daten für deine Projekte
  const projects = [
    {
      title: "KI-Portfolio Core",
      description: "Mein persönliches Portfolio mit integriertem digitalen KI-Zwilling, angetrieben von Google Gemini 3.",
      tech: ["Next.js", "Python", "Gemini API", "Tailwind"],
      gradient: "from-blue-600/20 to-purple-600/20",
      link: "#"
    },
    {
      title: "Python Data Scraper",
      description: "Ein automatisiertes Tool zur Extraktion und Analyse von Web-Daten mit intelligenter Vorverarbeitung.",
      tech: ["Python", "BeautifulSoup", "Pandas"],
      gradient: "from-green-600/20 to-emerald-600/20",
      link: "#"
    },
    {
      title: "Vision AI Bot",
      description: "Discord-Bot, der Bilder analysiert und beschreibt, basierend auf modernen Machine-Learning-Modellen.",
      tech: ["Python", "Discord.py", "OpenCV"],
      gradient: "from-orange-600/20 to-red-600/20",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-gray-100 selection:bg-purple-500/30 relative overflow-hidden font-sans">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation / Header */}
      <nav className="w-full border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tighter flex items-center gap-2">
            <Sparkles size={18} className="text-blue-400" />
            JONA.DEV
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/noackjona-hash" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Gemini 3 Integration Online
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hi, ich bin <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Jona Noack</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            15 Jahre alt. KI-Entwickler & Fullstack-Engineer. Ich baue intelligente Web-Applikationen und automatisiere die Zukunft.
          </p>
        </motion.div>
      </section>

      {/* Main Grid: Skills & Chatbot */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 relative z-10">
        
        {/* Left Column: Stats & Tech Stack */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="flex items-center gap-2 font-semibold mb-5 text-gray-200">
              <Cpu size={18} className="text-purple-400" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Git"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-purple-500/50 hover:text-white transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="flex items-center gap-2 font-semibold mb-3 text-gray-200">
              <Code2 size={18} className="text-blue-400" /> Aktueller Fokus
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Verknüpfung von Large Language Models mit modernen Frontend-Frameworks. Bau von Serverless APIs und interaktiven UIs.
            </p>
          </motion.div>
        </div>

        {/* Right Column: AI Chatbot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="lg:col-span-8"
        >
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                <Terminal size={14} /> jona-ai-core.exe
              </div>
              <div className="w-12" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-blue-400 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                  <Bot size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">Frag meinen digitalen Zwilling</h3>
                  <p className="text-sm text-gray-400 mt-1">Diese KI kennt meinen Werdegang und meine Projekte. Teste sie aus!</p>
                </div>
              </div>

              <div className="space-y-4 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      askAI();
                    }
                  }}
                  placeholder="Wie hast du Python gelernt? ..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-gray-200 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all resize-none placeholder:text-gray-600"
                  rows={3}
                />
                <button
                  onClick={askAI}
                  disabled={loading}
                  className="absolute bottom-3 right-3 bg-white text-black hover:bg-gray-200 disabled:bg-gray-700 disabled:text-gray-500 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all"
                >
                  {loading ? "Verarbeite..." : <><Send size={14} /> Senden</>}
                </button>
              </div>

              {response && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 bg-blue-950/10 rounded-xl border border-blue-500/20 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                  <p className="text-sm text-gray-300 leading-relaxed pl-2 whitespace-pre-wrap">
                    {response}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <FolderGit2 className="text-purple-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-100">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all hover:shadow-[0_0_30px_-15px_rgba(168,85,247,0.2)] flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} border-b border-white/5 relative overflow-hidden flex items-center justify-center`}>
                <Code2 size={48} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-gray-100 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded-md text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center relative z-10">
        <div className="flex justify-center gap-6 mb-4 text-gray-500">
          <a href="https://github.com/noackjona-hash" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
        </div>
        <p className="text-xs text-gray-600">© 2026 Jona Noack. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}