import logo from './logo.svg';
import './App.css';
import Variables from './topics/Variables';
import Events from './topics/Events';
import SetState from './topics/SetState';

function App() {
  return (
    <div className="App">
     <h3>Hello World</h3>
     <Variables />
     <Events />
     <SetState />
    </div>
  );
}

export default App;
