import Badge from "@/components/badges/badge";

export default function Status({ valid, value, activeLabel, inactiveLabel }) {
  if (!valid) {
    return (
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge label="n/a" isSuccess={false} isWarning={true} />
      </td>
    );
  } else {
    return (
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge label={value ? activeLabel : inactiveLabel} isSuccess={value} />
      </td>
    );
  }
}
