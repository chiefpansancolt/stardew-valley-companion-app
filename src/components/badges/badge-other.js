import classNames from "@/scripts/class-names";

export default function BadgeOther({ label, type }) {
  return (
    <span
      className={classNames(
        type === "blue" ? "bg-blue-100 text-blue-800" : "",
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      )}
    >
      {label}
    </span>
  );
}
