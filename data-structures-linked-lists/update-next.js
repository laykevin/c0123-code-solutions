// import LinkedList from './lib/linked-list';

export default function updateNext(list, value) {
  // const node = new LinkedList(value);
  // const current = list;
  // if (current.next !== null) {
  //   node.next = current.next.next;
  //   current.next = node;
  // }
  if (list.next !== null) {
    list.next.data = value;
  }
}
