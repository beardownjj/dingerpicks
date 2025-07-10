export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-900 text-white p-4 text-center text-xl font-bold">
        Dinger Picks ⚾️
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Dinger Picks ⚾️</h1>
        <p className="text-lg mb-6 text-center">
          Your one-stop shop for building smart home run prop combos.
        </p>
        <a
          href="/favorites"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Build Your Combo
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Dinger Picks
      </footer>
    </main>
  );
}
