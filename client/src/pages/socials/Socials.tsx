// src/components/Socials.tsx

export default function Socials() {
    return (
      <section className="max-w-6xl mx-auto p-6 mt-12 bg-slate-800 rounded-lg text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Socials</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://twitter.com/bluwunk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/channel/yourchannelid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://twitch.tv/bluwunk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Twitch
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Discord
            </a>
          </li>
        </ul>
      </section>
    )
  }
  