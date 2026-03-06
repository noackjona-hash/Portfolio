"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Github, Globe, Send, Terminal, Sparkles, FolderGit2, ExternalLink, Sun, Moon, Briefcase } from "lucide-react";

export default function Portfolio() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [isLight, setIsLight] = useState(false);

  // Kontaktformular States
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(""); // "", "loading", "success", "error"

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

  // Echtes E-Mail Backend mit Web3Forms
  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "74c3b27b-8bb2-4194-b518-380f31218f35",
          subject: "Neue Job-Anfrage über dein Portfolio",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const themeClasses = {
    bg: isLight ? "bg-gray-50" : "bg-[#030303]",
    text: isLight ? "text-gray-900" : "text-gray-100",
    textMuted: isLight ? "text-gray-600" : "text-gray-400",
    cardBg: isLight ? "bg-white border-gray-200 shadow-md" : "bg-white/[0.02] border-white/5",
    cardHover: isLight ? "hover:border-purple-400 hover:shadow-lg" : "hover:bg-white/[0.04] hover:border-purple-500/30",
    inputBg: isLight ? "bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500" : "bg-black/50 border-white/10 text-gray-200 placeholder:text-gray-600",
    navBg: isLight ? "bg-white/70 border-gray-200" : "bg-black/20 border-white/5",
  };

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
    <div className={`min-h-screen transition-colors duration-500 selection:bg-purple-500/30 relative overflow-hidden font-sans ${themeClasses.bg} ${themeClasses.text}`}>
      
      {!isLight && (
        <>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        </>
      )}

      <nav className={`w-full border-b backdrop-blur-md sticky top-0 z-50 transition-colors duration-500 ${themeClasses.navBg}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tighter flex items-center gap-2">
            <Sparkles size={18} className="text-blue-500" />
            JONA.DEV
          </span>
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => setIsLight(!isLight)} 
              className={`p-2 rounded-full transition-colors ${isLight ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="https://github.com/noackjona-hash" target="_blank" className={`${themeClasses.textMuted} hover:text-blue-500 transition-colors`}><Github size={20} /></a>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Offen für neue Herausforderungen
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hi, ich bin <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">Jona Noack</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${themeClasses.textMuted}`}>
            15 Jahre alt. KI-Entwickler & Fullstack-Engineer. Ich suche nach Möglichkeiten, mein Wissen in realen Projekten, Praktika oder einem Nebenjob einzubringen.
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 relative z-10">
        <div className="lg:col-span-4 space-y-6">
          <motion.div className={`border p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.cardHover}`}>
            <h3 className="flex items-center gap-2 font-semibold mb-5">
              <Cpu size={18} className="text-purple-500" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Git"].map((tech) => (
                <span key={tech} className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-all cursor-default ${isLight ? "bg-gray-100 border-gray-200 text-gray-700" : "bg-white/5 border-white/10 text-gray-300"}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className={`border p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.cardHover}`}>
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Code2 size={18} className="text-blue-500" /> Aktueller Fokus
            </h3>
            <p className={`text-sm leading-relaxed ${themeClasses.textMuted}`}>
              Verknüpfung von Large Language Models mit modernen Frontend-Frameworks. Bau von Serverless APIs und interaktiven UIs.
            </p>
          </motion.div>
        </div>

        <motion.div className="lg:col-span-8">
          <div className={`border rounded-2xl shadow-2xl overflow-hidden transition-colors duration-500 ${isLight ? "bg-white border-gray-300" : "bg-[#0a0a0a] border-white/10 ring-1 ring-white/5"}`}>
            <div className={`px-4 py-3 flex items-center justify-between border-b ${isLight ? "bg-gray-100 border-gray-200" : "bg-white/5 border-white/5"}`}>
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
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-blue-500">
                  <Bot size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Frag meinen digitalen Zwilling</h3>
                  <p className={`text-sm mt-1 ${themeClasses.textMuted}`}>Diese KI kennt meinen Werdegang. Frag sie, warum ich gut in euer Team passe!</p>
                </div>
              </div>

              <div className="space-y-4 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askAI(); } }}
                  placeholder="Warum sollten wir dich einstellen? ..."
                  className={`w-full border rounded-xl p-4 text-sm focus:border-purple-500/50 outline-none transition-all resize-none ${themeClasses.inputBg}`}
                  rows={3}
                />
                <button
                  onClick={askAI}
                  disabled={loading}
                  className="absolute bottom-3 right-3 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-500 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all"
                >
                  {loading ? "Verarbeite..." : <><Send size={14} /> Senden</>}
                </button>
              </div>

              {response && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-6 p-5 rounded-xl border relative overflow-hidden group ${isLight ? "bg-blue-50 border-blue-200" : "bg-blue-950/10 border-blue-500/20"}`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                  <p className={`text-sm leading-relaxed pl-2 whitespace-pre-wrap ${isLight ? "text-gray-800" : "text-gray-300"}`}>{response}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Projects Section (gekürzt für Übersichtlichkeit, bleibt gleich) */}
      <section className="max-w-6xl mx-auto px-6 pb-24 relative z-10">
        <motion.div className="flex items-center gap-3 mb-10">
          <FolderGit2 className="text-purple-500" size={28} />
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={idx} className={`group border rounded-2xl overflow-hidden transition-all flex flex-col ${themeClasses.cardBg} ${themeClasses.cardHover}`}>
              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} border-b ${isLight ? "border-gray-200" : "border-white/5"} relative flex items-center justify-center`}>
                <Code2 size={48} className="text-white/40 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${themeClasses.textMuted}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md ${isLight ? "bg-gray-100 text-gray-600" : "bg-white/5 text-gray-400"}`}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section - JETZT MIT ECHTEM BACKEND & JOB-FOKUS */}
      <section className="max-w-3xl mx-auto px-6 pb-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 text-purple-500 rounded-full mb-6">
            <Briefcase size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Auf der Suche nach Talenten?</h2>
          <p className={`text-lg mb-8 ${themeClasses.textMuted}`}>
            Ich suche aktuell nach einem Praktikum, Nebenjob oder einer Einstiegsmöglichkeit im Bereich Softwareentwicklung. 
            Lass uns schreiben!
          </p>
          
          <form onSubmit={handleContact} className={`p-6 border rounded-2xl shadow-lg flex flex-col gap-4 max-w-xl mx-auto text-left ${themeClasses.cardBg}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Name / Firma" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`flex-1 border rounded-xl p-3 text-sm focus:border-purple-500 outline-none transition-all ${themeClasses.inputBg}`}
              />
              <input 
                type="email" 
                placeholder="E-Mail Adresse" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`flex-1 border rounded-xl p-3 text-sm focus:border-purple-500 outline-none transition-all ${themeClasses.inputBg}`}
              />
            </div>
            <textarea 
              placeholder="Deine Nachricht (Jobangebot, Praktikum, Rückfragen...)" 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`w-full border rounded-xl p-3 text-sm focus:border-purple-500 outline-none transition-all resize-none ${themeClasses.inputBg}`}
            />
            <button 
              type="submit" 
              disabled={formStatus === "loading" || formStatus === "success"}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {formStatus === "loading" ? "Sende..." : formStatus === "success" ? "Erfolgreich gesendet!" : <><Send size={16} /> Nachricht abschicken</>}
            </button>
            {formStatus === "error" && <p className="text-red-500 text-xs text-center mt-2">Fehler beim Senden. Bitte versuche es später nochmal.</p>}
          </form>
        </motion.div>
      </section>

      <footer className={`border-t py-10 text-center relative z-10 ${isLight ? "border-gray-200" : "border-white/5"}`}>
        <p className={`text-xs ${themeClasses.textMuted}`}>© 2026 Jona Noack. Built with Next.js.</p>
      </footer>
    </div>
  );
}