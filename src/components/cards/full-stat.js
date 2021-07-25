import classNames from "@/scripts/class-names";

export default function FullStat({ item, details, hasButton, buttonDetails, Icon, iconColor }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          {(Icon || item.img || item.icon) && (
            <div className="flex-shrink-0">
              {item.img && <img src={item.img} className="h-10 w-10" alt={item.label + " Image"} />}
              {item.icon && <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
              {Icon && <Icon className={classNames(iconColor, "h-6 w-6")} aria-hidden="true" />}
            </div>
          )}
          <div className={classNames(Icon || item.img || item.icon ? "ml-5" : "", "w-0 flex-1")}>
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.label ? item.label : item.name}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{details}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {hasButton && (
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm xl:text-center flex xl:flex-col justify-center 2xl:flex-row">
            {buttonDetails}
          </div>
        </div>
      )}
    </div>
  );
}
