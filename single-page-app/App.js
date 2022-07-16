import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className='links'>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/about">About</Link>{' '}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
