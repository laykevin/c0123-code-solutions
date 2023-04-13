export default function takeNextSmallest(numberQueue) {
  if (numberQueue.peek() !== undefined) {
    let x = numberQueue.dequeue();
    if (numberQueue.peek() === undefined || x < numberQueue.peek()) {
      return x;
    }
    while (x > numberQueue.peek()) {
      numberQueue.enqueue(x);
      x = numberQueue.dequeue();
    }
    return x;
  }
}
