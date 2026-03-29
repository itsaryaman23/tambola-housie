import { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import NumberCaller from './components/NumberCaller/NumberCaller1';
import Ticket from './components/Ticket/Ticket';
import NumberGrid from './components/NumberGrid/NumberGrid';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  const [view, setView] = useState("Home");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {

  }, [view])

  return (
    <div className="App">
      <Header view={view} />
      <Nav setView={setView} view={view} setResetKey={() => setResetKey(resetKey + 1)} />
      {view == "Number Caller" && (<NumberCaller />)}
      {view == "Ticket" && (<Ticket key={resetKey} />)}
      <Footer />
    </div>
  );
}

export default App
