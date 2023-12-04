import './App.css';
import Headers from './components/Headers';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Headers name="Anna" color="purple"/>
      <Main greet="Dinesh" />
      <Sidebar greet="Dinesh" />
    </div>
  );
}

export default App;
