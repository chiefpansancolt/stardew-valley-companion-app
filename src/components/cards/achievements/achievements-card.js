import Achievement from "@/components/cards/achievements/achievement";

export default function AchievementCard({ character }) {
  return (
    <div className="mt-4 bg-white shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Achievements</h3>
        <div className="mt-1 max-w-2xl text-sm text-gray-500">
          <span>You have completed:</span>
          <ul>
            <li>
              In Game Achievements: <strong>{character.achievements.isInGameCompleted}</strong> /{" "}
              {character.achievements.isInGame}
            </li>
            <li>
              Steam Achievements: <strong>{character.achievements.isSteamCompleted}</strong> /{" "}
              {character.achievements.isSteam}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {character.achievements.achievements.map((achievement) => (
            <Achievement key={achievement.name} achievement={achievement} character={character} />
          ))}
        </ul>
      </div>
    </div>
  );
}
