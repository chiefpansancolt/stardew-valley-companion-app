import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "@/scripts/class-names";

export default function NavItemIcon({ active, Icon, fa }) {
  return (
    <>
      {!fa ? (
        <Icon
          className={classNames(
            active ? "text-cyan-500" : "text-cyan-200",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
      ) : (
        <FontAwesomeIcon
          icon={Icon}
          size="lg"
          className={classNames(
            active ? "text-cyan-500" : "text-cyan-200",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
        />
      )}
    </>
  );
}
