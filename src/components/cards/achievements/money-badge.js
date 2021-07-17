export default function MoneyBadge({ money, amount }) {
  return (
    <span className="text-xs">
      {money.full} / {Intl.NumberFormat().format(amount)}g -{" "}
      {((money.number / amount) * 100).toFixed(2)}%
    </span>
  );
}
