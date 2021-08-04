export default function duplicateCountBuilder(array) {
  const count = {};
  const result = [];

  array.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });

  for (let prop in count) {
    result.push({ name: prop, count: count[prop] });
  }

  return result;
}
