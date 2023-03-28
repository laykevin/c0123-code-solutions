export default function CustomButton({ text, color, onCustomClick }) {
  // function handleClick() {
  //   window.alert(text);
  // }
  // function handleCustomClick() {
  //   window.alert(text);
  // }
  return <button onClick={() => onCustomClick(text)} style={{ backgroundColor: color}}>{text}</button>
}
