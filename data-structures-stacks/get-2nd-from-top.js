export default function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const x = stack.pop();
    const y = stack.peek();
    stack.push(x);
    return y;
  }
}
