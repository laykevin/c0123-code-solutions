export default function maxValue(stack) {
  let biggy = stack.pop();
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (stack.peek() > biggy) {
      biggy = stack.peek();
    }
    stack.pop();
  }
  return biggy;
}
