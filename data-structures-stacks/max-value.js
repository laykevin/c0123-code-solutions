export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let biggy = stack.pop();
  while (stack.peek() !== undefined) {
    if (stack.peek() > biggy) {
      biggy = stack.peek();
    }
    stack.pop();
  }
  return biggy;
}
