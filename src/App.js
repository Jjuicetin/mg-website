import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Works } from './pages/Works';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Bar } from './components/Bar';


function App() {
  return (
    <>
      <div className='app'>
        <Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
