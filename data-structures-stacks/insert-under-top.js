export default function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const x = stack.pop();
    stack.push(value);
    stack.push(x);
  }
}
