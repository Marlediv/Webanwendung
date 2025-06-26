# 🧱 Webanwendung mit Flask, React und PostgreSQL (DataVault)

Dies ist eine modulare Webanwendung mit einem modernen Tech-Stack bestehend aus:

- 🔧 **Backend**: Python (Flask), JWT-Auth, PostgreSQL-Anbindung, PDF-Export
- 🎨 **Frontend**: React (Vite), Tailwind CSS, Chart.js, Routing
- 🛢️ **Datenbank**: PostgreSQL im **DataVault-Modell**

---

## 📁 Projektstruktur

projekt-root/
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   └── Dockerfile
├── database/
│   ├── 01_init_schema.sql
│   └── 02_insert_testdata.sql
├── .env
├── docker-compose.yml
└── README.md

---

## 🔧 Backend (Flask)

### Features:
- REST-API mit Flask
- Authentifizierung via `flask-jwt-extended`
- CORS-Unterstützung (`flask-cors`)
- PostgreSQL-Anbindung über `psycopg2` oder SQLAlchemy
- PDF-Generierung mit `reportlab`

### Struktur:

ackend/
├── app/
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── utils/
├── config.py
└── run.py

---

## 🎨 Frontend (React)

### Features:
- Vite + React
- Tailwind CSS für Styling
- Routing mit `react-router-dom`
- Diagramme mit Chart.js + `react-chartjs-2`
- API-Integration & Token-basierte Authentifizierung

### Struktur:

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── App.jsx
└── public/

---

## 🛢️ Datenbank (PostgreSQL + DataVault)

DataVault-Modell bestehend aus:
- **Hubs** – Schlüsselentitäten (`hub_user`, etc.)
- **Links** – Beziehungen zwischen Hubs
- **Satelliten** – beschreibende Informationen

### Struktur:

database/
├── 01_init_schema.sql
├── 02_insert_testdata.sql
└── 03_views.sql (optional)

---

## ▶️ 🚀 Projektstart

### 🐳 Mit Docker (empfohlen)

> Diese Methode ist am einfachsten, saubersten und benötigt nur Docker.

1. Stelle sicher, dass **Docker** und **Docker Compose** installiert sind.
2. Starte alle Services (Backend, Frontend, PostgreSQL) mit:

```bash
docker-compose up --build

3. Öffne die Anwendung:

	•	Frontend: http://localhost:5173
	•	Backend API: http://localhost:5000
	•	PostgreSQL: localhost:5432 (z. B. in DBeaver)

Die Datenbank wird beim ersten Start automatisch mit dem Schema aus dem Ordner database/ befüllt.

💻 Ohne Docker (manuelle lokale Entwicklung)

Nur empfohlen, wenn du gezielt ohne Docker arbeiten möchtest.

📦 Backend starten:

cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run

⚛️ Frontend starten:

cd frontend
npm install
npm run dev

🐘 Datenbank:
	1.	Installiere PostgreSQL lokal oder starte es via Docker.
	2.	Erstelle eine Datenbank projekt_db.
	3.	Führe im SQL-Client folgende Skripte aus:

    -- Beispiel
\i database/01_init_schema.sql;
\i database/02_insert_testdata.sql;

---

📌 Nächste Schritte
	•	JWT-Login vollständig umsetzen
	•	PDF-Berichte generieren
	•	Beispiel-Charts und Dashboards anzeigen
	•	Admin-Panel und Benutzerverwaltung einbauen

---

📜 Lizenz

MIT 