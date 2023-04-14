/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const node = new LinkedList(value);
  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;
}
