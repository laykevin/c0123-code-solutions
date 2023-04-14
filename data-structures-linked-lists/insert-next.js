/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function insertNext(list, value) {
  const node = new LinkedList(value);
  const current = list;
  if (current.next !== null) {
    node.next = current.next;
    current.next = node;
  }
}
