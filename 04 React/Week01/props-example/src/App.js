import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="container">
      <Header name="Anna" color="purple"/>
      <Main greet="Dinesh" />
      <Sidebar greet="Hi" />
      <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
      <div>
        <h1>My favorite foods</h1>
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Strawberries</li>
        </ul>

        <h1>My favorite foods</h1>
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Strawberries</li>
        </ul>
      </div>
    </div>
    
  );
}

export default App;
