import classNames from "@/scripts/class-names";

export default function Badge({ label, isSuccess }) {
  return (
    <span
      className={classNames(
        isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      )}
    >
      {label}
    </span>
  );
}
