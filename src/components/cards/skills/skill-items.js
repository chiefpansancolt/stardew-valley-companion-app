import Link from "next/dist/client/link";

export default function SkillItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="flex items-center pt-2" key={item.name}>
          <img src={item.img} className="w-6" alt="Icon Name" />
          <Link href={item.link}>
            <a className="cursor-pointer text-xs pl-2 text-cyan-500">{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
