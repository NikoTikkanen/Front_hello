import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Todolist from './components/Todolist';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
<h1>Router page</h1>

<BrowserRouter>
<Link to="/">Home</Link> {' '}
<Link to="/todolist">Todolist</Link> {' '}
<Link to="/contact">Contact</Link> {' '}
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/todolist" element={<Todolist />} />
    <Route path="/contact" element={<Contact />} />
    
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
