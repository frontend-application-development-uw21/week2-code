import './App.css';
import Picture from './Picture';

function App() {
  return (
    <div className="App">
      <Picture
        picture="https://media.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif"
        description="Happy dog with a wagging tail (Beagle?)"
      />
      <label htmlFor="dogName">Dog name</label>
      <input id="dogName" />
    </div>
  );
}

export default App;
