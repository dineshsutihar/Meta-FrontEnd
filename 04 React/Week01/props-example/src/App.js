import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Header name="Anna" color="purple"/>
      <Main greet="Dinesh" />
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
