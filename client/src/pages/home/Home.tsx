
export default function Home() {
    return (
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-cyan-500">Welcome to Bluwunk Hub!</h1>
        <p className="text-lg text-gray-300 mb-6">
          Your one-stop spot for all things Bluwunk — fanart, quotes, live streams, and more.
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Latest Updates</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>New fanart added to the Gallery</li>
            <li>Quotes from the last livestream</li>
            <li>Upcoming events & schedules</li>
          </ul>
        </section>
      </main>
    )
  }
  