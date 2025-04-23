export default function hasValueFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}
