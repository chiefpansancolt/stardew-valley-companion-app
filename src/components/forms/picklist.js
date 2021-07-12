import classNames from "@/scripts/class-names";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Picklist({
  span,
  id,
  required,
  label,
  hasIcon,
  fa,
  Icon,
  hasError,
  options,
}) {
  return (
    <div className={"sm:col-span-" + span}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {hasIcon && !fa && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        {hasIcon && fa && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={Icon} className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <select
          id={id}
          name={id}
          required={required}
          defaultValue="none"
          className={classNames(
            hasIcon ? "pl-10" : "",
            "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
          )}
        >
          <option value="none">-- None --</option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id="farm-map-error">
          {label} is a required Field.
        </p>
      )}
    </div>
  );
}
