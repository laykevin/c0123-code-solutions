export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const x = queue.dequeue();
    queue.enqueue(x);
  }
}
