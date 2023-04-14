export default function swapFront(list) {
  const current = list;
  if (current.next !== null) {
    const x = current.next;
    current.next = current.next.next;
    x.next = current;
    return x;
  }
  return list;
}
