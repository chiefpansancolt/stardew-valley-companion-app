import classNames from "@/scripts/class-names";

export default function Input({
  span,
  id,
  required,
  label,
  type,
  max,
  value,
  hasIcon,
  Icon,
  hasError,
  hasMinMaxError,
}) {
  hasMinMaxError = false;
  return (
    <div className={"sm:col-span-" + span}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {hasIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          type={type}
          name={id}
          id={id}
          required={required}
          defaultValue={value}
          max={max}
          className={classNames(
            hasIcon ? "pl-10" : "",
            "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
          )}
        />
      </div>
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id={id + "error"}>
          {label} is a required Field.
        </p>
      )}
      {hasMinMaxError && (
        <p className="mt-2 text-sm text-red-600" id={id + "-min-max-error"}>
          {label} must be between 0 - 10.
        </p>
      )}
    </div>
  );
}
