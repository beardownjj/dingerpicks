"use client";

import { useState, useEffect } from "react";

export default function BetSlipPage() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    const savedCombo = JSON.parse(localStorage.getItem("combo"));
    if (savedCombo) {
      setCombo(savedCombo);
    }
  }, []);

  const copyToClipboard = () => {
    const text = combo.map((player) => `${player} to hit a HR`).join("\n");
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-900 text-white p-4 text-center text-xl font-bold">
        Dinger Picks ⚾️
      </header>

      {/* Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Your Bet Slip</h1>

        {combo.length === 0 ? (
          <p>No combo found. Go build one!</p>
        ) : (
          <div className="mb-4">
            <ul className="list-disc list-inside mb-4">
              {combo.map((player) => (
                <li key={player}>{player} to hit a HR</li>
              ))}
            </ul>

            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Copy to Clipboard
            </button>
          </div>
        )}

        <a
          href="/favorites"
          className="inline-block mt-6 text-blue-500 hover:underline"
        >
          ⬅ Build Another Combo
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Dinger Picks
      </footer>
    </main>
  );
}
