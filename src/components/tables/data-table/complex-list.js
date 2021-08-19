export default function ComplexList({ list }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
      <ul>
        {list.map((item) => (
          <li key={item.name}>
            {item.name} ({item.count})
          </li>
        ))}
      </ul>
    </td>
  );
}
