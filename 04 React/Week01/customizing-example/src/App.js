import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';

function App() {
  return (
    <div className="React">
      <header className="App-header">
       <Nav />
      </header>
      <main>
        <Intro1 />
        <Intro2 />
        <Intro3 />
        <Promo />
      </main>
    </div>
  );
}

export default App;