# ValoCoach – Player Performance Dashboard

ValoCoach is a frontend-only player performance dashboard inspired by competitive FPS game HUDs.  
It visualizes player stats, match history, and detailed match breakdowns in a clean, game-style UI.

This project was built as part of an internship assignment to demonstrate frontend skills, component structuring, and UI design.

---

## ✨ Features

- Player profile overview (name, rank, level, stats)
- Recent matches list with win / loss indicators
- Match filtering (All, Won, Lost)
- Detailed match modal with performance metrics
- Game-inspired HUD-style UI
- Responsive design (desktop & mobile)

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **JSON-based mock data**

---

## 📂 Project Structure

``text
app/
├─ page.tsx
├─ layout.tsx
├─ globals.css

components/
├─ Header.tsx
├─ PlayerProfile.tsx
├─ MatchList.tsx
├─ MatchCard.tsx
├─ MatchModal.tsx

data/
├─ player.json

types/
├─ player.ts

```

---

## 📊 Data Handling

- Player and match data are stored locally in a JSON file
- Strong typing is enforced using TypeScript interfaces
- Components consume data via props for clear data flow

---

## 🎯 Design Approach

- Focused on clarity and readability of stats
- Inspired by in-game HUD and esports dashboards
- Emphasis on visual hierarchy and component reusability
- Minimal animations to keep UI performant and clean

---

## 🚀 Getting Started

1. Install dependencies
   ```bash
   npm install

2. Run the development server
   ```bash
   npm run dev

3. Open in Browser
   ```bash
   http://localhost:3000