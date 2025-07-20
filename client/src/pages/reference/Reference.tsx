// src/components/References.tsx

export default function Reference() {
    return (
      <section className="max-w-6xl mx-auto p-6 mt-12 bg-slate-800 rounded-lg text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">References</h2>
        <p className="mb-4">
          Thanks to the amazing artists and creators who support Bluwunk!
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://twitter.com/artist1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Artist1 on Twitter
            </a>
          </li>
          <li>
            <a
              href="https://deviantart.com/artist2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Artist2 on DeviantArt
            </a>
          </li>
          <li>
            <a
              href="https://pixiv.net/member.php?id=123456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Artist3 on Pixiv
            </a>
          </li>
        </ul>
      </section>
    )
  }
  