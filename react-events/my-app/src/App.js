// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }
  return (
    <div>
      <CustomButton text="First Button" color="red" onCustomClick={handleCustomClick}/>
      <CustomButton text="Second Button" color="green" onCustomClick={handleCustomClick} />
      <CustomButton text="Third Button" color="lightblue" onCustomClick={handleCustomClick} />
    </div>
  );
}

export default App;
