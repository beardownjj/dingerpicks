"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Example player list
const players = [
  "Aaron Judge",
  "Kyle Schwarber",
  "Pete Alonso",
  "Shohei Ohtani",
  "Matt Olson",
  "Juan Soto",
  "Rafael Devers",
  "Corey Seager",
];

// Example player-to-team mapping
const playerTeams = {
  "Aaron Judge": "nyy",    // Yankees
  "Kyle Schwarber": "phi", // Phillies
  "Pete Alonso": "nym",    // Mets
  "Shohei Ohtani": "laa",  // Angels
  "Matt Olson": "atl",     // Braves
  "Juan Soto": "sd",       // Padres
  "Rafael Devers": "bos",  // Red Sox
  "Corey Seager": "tex",   // Rangers
};

// Team logo image
const getTeamLogo = (teamAbbr) =>
  `https://www.mlbstatic.com/team-logos/${teamAbbr}.svg`;

export default function FavoritesPage() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [combo, setCombo] = useState([]);
  const router = useRouter();

  const handleTogglePlayer = (player) => {
    setSelectedPlayers((prev) =>
      prev.includes(player)
        ? prev.filter((p) => p !== player)
        : [...prev, player]
    );
  };

  const buildRandomCombo = () => {
    if (selectedPlayers.length < 2) {
      alert("Pick at least 2 players!");
      return;
    }

    const shuffled = [...selectedPlayers].sort(() => 0.5 - Math.random());
    const randomCombo = shuffled.slice(0, 2);
    setCombo(randomCombo);

    // Save combo to localStorage
    localStorage.setItem("combo", JSON.stringify(randomCombo));

    // Redirect to bet slip page
    router.push("/betslip");
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-900 text-white p-4 text-center text-xl font-bold">
        Dinger Picks ⚾️
      </header>

      {/* Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Pick Your Favorite HR Hitters:</h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {players.map((player) => (
            <label key={player} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedPlayers.includes(player)}
                onChange={() => handleTogglePlayer(player)}
              />
              <img
                src={getTeamLogo(playerTeams[player])}
                alt={`${player}'s team`}
                className="w-6 h-6"
              />
              <span>{player}</span>
            </label>
          ))}
        </div>

        <button
          onClick={buildRandomCombo}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mb-4"
        >
          Build My Combo
        </button>

        {combo.length > 0 && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-semibold mb-2">Your Random 2-Legger:</h2>
            <ul className="list-disc list-inside">
              {combo.map((player) => (
                <li key={player}>{player} to hit a HR</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Dinger Picks
      </footer>
    </main>
  );
}
