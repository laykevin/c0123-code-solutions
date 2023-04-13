export default function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const x = queue.dequeue();
    queue.enqueue(x);
    return queue.dequeue();
  }
}
