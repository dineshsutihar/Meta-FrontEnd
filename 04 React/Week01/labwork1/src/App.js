import './App.css';

function Heading(){
  return (
    <h1>This is an h1 Heading</h1>
  )
}

function Testing(){
  return (
    <div>
      <h2>This is an h2 Heading</h2>
      <h3>This is an h3 Heading</h3>
      <h4>This is an h4 Heading</h4>
      <h5>This is an h5 Heading</h5>
      <h6>This is an h6 Heading</h6>
     
    </div>
  );
}

function App() {
  return (
    <div className="App">
      This is the starting code for "labwork1" ungraded lab.
      <Heading />
      <Testing />
      
      
    </div>
  );
}

export default App;
