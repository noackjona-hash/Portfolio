"use client";
import { useState } from "react";

export default function Home() {
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
    } catch (error) {
      setResponse("Ups, die Verbindung zum Python-Backend ist fehlgeschlagen.");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 flex flex-col items-center justify-center font-sans">
      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">Jonas KI-Portfolio</h1>
        <p className="text-gray-400 mb-8">Teste hier meine Anbindung an Gemini Pro über ein Python-Backend.</p>
        
        <textarea 
          className="w-full bg-gray-950 border border-gray-700 rounded-lg p-4 text-white mb-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Frag die KI etwas..."
        />
        
        <button 
          onClick={askAI}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-700 disabled:text-gray-500"
        >
          {loading ? "KI generiert Antwort..." : "Nachricht senden"}
        </button>

        {response && (
          <div className="mt-8 p-5 bg-gray-950 rounded-lg border border-gray-800">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Output:</h3>
            <p className="whitespace-pre-wrap leading-relaxed text-gray-300">{response}</p>
          </div>
        )}
      </div>
    </main>
  );
}