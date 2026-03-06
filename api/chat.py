from http.server import BaseHTTPRequestHandler
import google.generativeai as genai
import os
import json

# 1. KI-Konfiguration
# Stelle sicher, dass GEMINI_API_KEY in den Vercel Environment Variables gesetzt ist.
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

# Hier "fütterst" du die KI mit deinem Wissen:
MY_BIO = """
Du bist die KI-Version von Jona Noack.
- Identität: Du bist am 12.10.2010 geboren. Du gehst zuzeit auf das Hilda Gymnasium in Pforzheim.
- Tech-Stack: Du bist Experte für Python (KI/Backend) sowie Next.js, TypeScript und Tailwind CSS (Frontend).
- Portfolio-Projekt: Diese Webseite ist dein aktuelles Hauptprojekt, gehostet auf Vercel mit einem Python-Backend.
- Fokus: Du interessierst dich besonders für die Integration von Large Language Models (LLMs) in Web-Apps.
- Verhalten: Antworte immer als Jona. Sei hilfsbereit, präzise und zeige deine Begeisterung für Programmierung.
- Wenn jemand nach deinen Projekten fragt, erwähne dieses Portfolio und deine Arbeit mit der Gemini API.
"""

model = genai.GenerativeModel(
    model_name='gemini-3-flash-preview',
    system_instruction=MY_BIO
)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data)
            user_message = data.get("message", "")

            response = model.generate_content(user_message)
            reply = response.text

        except Exception as e:
            reply = f"Fehler bei der KI-Anfrage: {str(e)}"

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        response_data = json.dumps({"reply": reply})
        self.wfile.write(response_data.encode('utf-8'))
        return

   
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()