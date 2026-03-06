"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Github, Globe, Send, Terminal, Sparkles } from "lucide-react";

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

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24 relative z-10">
        
        {/* Left Column: Stats & Tech Stack (Takes up 4 columns on large screens) */}
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

        {/* Right Column: AI Chatbot (Takes up 8 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="lg:col-span-8"
        >
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            
            {/* Fake Mac Window Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                <Terminal size={14} /> jona-ai-core.exe
              </div>
              <div className="w-12" /> {/* Spacer for centering */}
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

              {/* AI Response Box */}
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
    </div>
  );
}