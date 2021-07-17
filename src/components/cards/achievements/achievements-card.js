import Achievement from "@/components/cards/achievements/achievement";

export default function AchievementCard({ character }) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Achievements</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          You have completed{" "}
          <strong>{character.achievements.filter((e) => e.completed === true).length}</strong> / 30
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {character.achievements.map((achievement) => (
            <Achievement key={achievement.name} achievement={achievement} character={character} />
          ))}
        </ul>
      </div>
    </div>
  );
}
