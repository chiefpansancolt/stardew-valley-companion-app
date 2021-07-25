import Badge from "@/components/badges/badge";

export default function Stardrop({ stardrop }) {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={stardrop.img} className="ml-3 h-10 w-10" alt={stardrop.name} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{stardrop.name}</p>
          <p className="text-sm text-gray-500">{stardrop.description}</p>
        </div>
        <div className="pr-4">
          <Badge
            label={stardrop.completed ? "Obtained" : "Not Obtained"}
            isSuccess={stardrop.completed}
          />
        </div>
      </div>
    </li>
  );
}
