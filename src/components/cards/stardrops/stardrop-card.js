import Stardrop from "./stardrop";

export default function StardropCard({ character }) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Stardrops</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          You have completed{" "}
          <strong>{character.stardrops.filter((e) => e.completed === true).length}</strong> / 7
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {character.stardrops.map((stardrop) => (
            <Stardrop key={stardrop.id} stardrop={stardrop} />
          ))}
        </ul>
      </div>
    </div>
  );
}
