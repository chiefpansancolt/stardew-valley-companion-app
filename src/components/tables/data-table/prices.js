import classNames from "@/scripts/class-names";
import { StarIcon } from "@heroicons/react/solid";

export default function Prices({ single, list, profession }) {
  if (single) {
    return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{single}</td>;
  } else if (list) {
    if (list.standard || list.rancher || list.fisher || list.angler) {
      return (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <ul>
            {(profession === "" ||
              profession !== "Rancher" ||
              profession !== "Fisher" ||
              profession !== "Angler") &&
              list.standard.map((price) => (
                <li key={price.cost} className="flex items-center">
                  <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                  {price.cost}
                </li>
              ))}
            {profession === "Rancher" &&
              list.rancher.map((price) => (
                <li key={price.cost} className="flex items-center">
                  <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                  {price.cost}
                </li>
              ))}
            {profession === "Fisher" &&
              list.fisher.map((price) => (
                <li key={price.cost} className="flex items-center">
                  <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                  {price.cost}
                </li>
              ))}
            {profession === "Angler" &&
              list.angler.map((price) => (
                <li key={price.cost} className="flex items-center">
                  <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                  {price.cost}
                </li>
              ))}
          </ul>
        </td>
      );
    } else if (list.main || list.blacksmith) {
      return (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <ul>
            {(profession === "" || profession !== "Blacksmith") && (
              <li key={list.main} className="flex items-center">
                {list.main}
              </li>
            )}
            {profession === "Blacksmith" && (
              <li key={list.main} className="flex items-center">
                {list.main}
              </li>
            )}
          </ul>
        </td>
      );
    } else {
      return (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <ul>
            {list.map((price) => (
              <li key={price.cost} className="flex items-center">
                {price.color ? (
                  <>
                    <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                    {price.cost}
                  </>
                ) : (
                  <>
                    {price.flower} - {price.cost}
                  </>
                )}
              </li>
            ))}
          </ul>
        </td>
      );
    }
  }
}
