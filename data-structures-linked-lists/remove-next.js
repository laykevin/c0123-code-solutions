export default function removeNext(list) {
  const current = list;
  if (current.next !== null) {
    current.next = current.next.next;
  }
}
