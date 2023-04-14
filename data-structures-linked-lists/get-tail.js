export default function getTail(list) {
  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  return current.data;
}
