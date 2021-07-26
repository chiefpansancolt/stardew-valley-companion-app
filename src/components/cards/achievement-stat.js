import DetailsView from "@/components/badges/details-view";

export default function AchievementStat({ achievement }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src={achievement.img} alt={achievement.name} className="h-10 w-10" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{achievement.name}</p>
            <p className="text-sm text-gray-500 ">{achievement.description}</p>
          </div>
          <div>
            <DetailsView achievement={achievement} showStat={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
