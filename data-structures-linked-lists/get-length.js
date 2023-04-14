export default function getLength(list) {
  let count = 0;
  let current = list;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}
