import { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import NumberCaller from './components/NumberCaller/NumberCaller1';
import Ticket from './components/Ticket/Ticket';
import NumberGrid from './components/NumberGrid/NumberGrid';
import './App.css'

function App() {
  const [view, setView] = useState("Home");

  return (
    <div className="App">
      <Nav setView={setView} view={view} />
      {view == "Number Caller" && (<NumberCaller />)}
      {view == "Ticket" && (<Ticket />)}
      {/* <NumberCaller /> */}
    </div>
  );
}

export default App
