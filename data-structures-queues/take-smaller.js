export default function takeSmaller(queue) {
  if (queue.peek !== undefined) {
    const x = queue.dequeue();
    if (queue.peek() === undefined) {
      return x;
    }
    const y = queue.dequeue();
    if (x <= y) {
      queue.enqueue(y);
      return x;
    }
    if (x > y) {
      queue.enqueue(x);
      return y;
    }
  }
}
