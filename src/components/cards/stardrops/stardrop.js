import classNames from "@/scripts/class-names";

export default function Stardrop({ stardrop }) {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={stardrop.img} className="ml-3 h-10 w-10" alt={stardrop.name}/>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{stardrop.name}</p>
          <p className="text-sm text-gray-500">{stardrop.description}</p>
        </div>
        <div className="pr-4">
          <span className={classNames(
            stardrop.completed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
          )}>
            {stardrop.completed ? "Obtained" : "Not Obtained"}
          </span>
        </div>
      </div>
    </li>
  );
}
