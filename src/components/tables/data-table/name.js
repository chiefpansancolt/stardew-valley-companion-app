export default function Name({ name, label, img, description, count }) {
  return (
    <td className="px-6 py-4 whitespace-wrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10">
          <img className="w-10" src={img} alt={(label ? label : name) + " Icon"} />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {label ? label : name}
            {count && <>{" (" + count + ")"}</>}
          </div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </td>
  );
}
