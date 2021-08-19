export default function Harvest({ growth, regrowth }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
      <span>{growth}</span>
      {regrowth !== "n/a" && (
        <>
          <br />/ {regrowth}
        </>
      )}
    </td>
  );
}
