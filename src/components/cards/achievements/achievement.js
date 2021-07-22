import LinkBadge from "@/components/cards/achievements/link-badge";
import Badge from "@/components/cards/achievements/badge";
import MoneyBadge from "@/components/cards/achievements/money-badge";
import { StarIcon } from "@heroicons/react/outline";

export default function Achievement({ achievement, character }) {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <StarIcon className="ml-3 h-10 w-10 rounded-full text-yellow-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{achievement.name}</p>
          <p className="text-sm text-gray-500">{achievement.description}</p>
        </div>
        <div className="pr-4">
          {achievement.completed && <Badge label="Completed" />}
          {!achievement.completed && achievement.linkType === "Link" && (
            <LinkBadge link={achievement.detailLink} label="View Details" />
          )}
          {!achievement.completed && achievement.linkType === "Money" && (
            <MoneyBadge money={character.totalMoneyEarned} amount={achievement.amount} />
          )}
        </div>
      </div>
    </li>
  );
}
