"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Github, Globe, Send, User } from "lucide-react";

export default function Portfolio() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (e) {
      setResponse("Fehler bei der Verbindung...");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-blue-500 font-mono mb-4 text-sm tracking-widest uppercase">Willkommen in meiner Welt</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Jona Noack
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            15 Jahre alt. KI-Enthusiast. Fullstack-Entwickler. 
            Ich baue die Brücke zwischen komplexen Algorithmen und intuitivem Webdesign.
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        
        {/* Left: Stats & Tech Stack */}
        <div className="space-y-8">
          <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
            <h3 className="flex items-center gap-2 font-bold mb-4 text-blue-400">
              <Cpu size={18} /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Next.js", "TypeScript", "Tailwind", "Gemini AI", "Git"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#111] border border-white/5 p-6 rounded-2xl">
            <h3 className="flex items-center gap-2 font-bold mb-4 text-blue-400">
              <Code2 size={18} /> Fokus
            </h3>
            <p className="text-sm text-gray-400">
              Spezialisiert auf die Entwicklung von KI-gestützten Web-Applikationen und Automatisierungsskripten.
            </p>
          </div>
        </div>

        {/* Center: AI Chatbot (Dein digitaler Zwilling) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#111] border border-blue-500/20 p-6 rounded-2xl shadow-[0_0_30px_-15px_rgba(59,130,246,0.3)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">Frag Jona AI</h3>
                <p className="text-xs text-green-500 animate-pulse">Online & Bereit</p>
              </div>
            </div>

            <div className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Frag mich etwas über meine Projekte oder Skills..."
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm focus:border-blue-500 outline-none transition-all resize-none"
                rows={3}
              />
              <button
                onClick={askAI}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                {loading ? "Denkt nach..." : <><Send size={16} /> Nachricht senden</>}
              </button>

              {response && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-sm text-gray-300 leading-relaxed italic"
                >
                  {response}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Links */}
      <footer className="border-t border-white/5 py-10 text-center">
        <div className="flex justify-center gap-6 mb-4 text-gray-500">
          <a href="https://github.com/noackjona-hash" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
        </div>
        <p className="text-xs text-gray-600">© 2026 Jona Noack. Built with Next.js & Gemini 3.</p>
      </footer>
    </div>
  );
}