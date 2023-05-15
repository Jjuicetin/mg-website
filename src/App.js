import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Works } from './pages/Works';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
function App() {
  return (
    <>
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </>
     
  );
}

export default App;
