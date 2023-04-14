export default function removeTail(list) {
  let current = list;
  let previous;
  if (current.next === null) {
    return;
  }
  while (current.next !== null) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
}
