export default function SimpleList({ single, list }) {
  if (single) {
    return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{single}</td>;
  } else if (list) {
    return (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </td>
    );
  }
}
