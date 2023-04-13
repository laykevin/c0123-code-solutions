export default function takeValueAtIndex(queue, index) {
  let count = 0;
  while (index > count) {
    if (queue.peek() === undefined) {
      return undefined;
    }
    const x = queue.dequeue();
    queue.enqueue(x);
    count++;
  }
  return queue.dequeue();
}
