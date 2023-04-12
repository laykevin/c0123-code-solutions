export default function countValues(stack) {
  let count = 0;
  if (stack.peek() === undefined) {
    return 0;
  }
  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }
  return count;
}
