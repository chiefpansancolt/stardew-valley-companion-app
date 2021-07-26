import Link from "next/link";

export default function LinkBadge({ link, label }) {
  return (
    <Link href={link}>
      <a className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
        {label}
      </a>
    </Link>
  );
}
