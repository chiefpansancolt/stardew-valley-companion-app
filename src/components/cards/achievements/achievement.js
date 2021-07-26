import DetailsView from "@/components/badges/details-view";

export default function Achievement({ achievement, character }) {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={achievement.img} alt={achievement.name} className="ml-3 h-10 w-10" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{achievement.name}</p>
          <p className="text-sm text-gray-500">{achievement.description}</p>
        </div>
        <div className="pr-4">
          <DetailsView achievement={achievement} showPercent={true} fontSize="text-sm" />
        </div>
      </div>
    </li>
  );
}
