from http.server import BaseHTTPRequestHandler
import google.generativeai as genai
import os
import json

# API Key aus der .env.local laden
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-3-flash')

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # 1. Die Anfrage vom Next.js Frontend lesen
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        
        user_message = data.get("message", "Hallo!")
        
        try:
            # 2. Die Nachricht an Gemini schicken
            response = model.generate_content(user_message)
            reply = response.text
        except Exception as e:
            reply = f"Fehler bei der KI-Anfrage: {str(e)}"

        # 3. Die Antwort sauber als JSON zurück ans Frontend senden
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({"reply": reply}).encode('utf-8'))
        return