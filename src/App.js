import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Works } from './pages/Works';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Bar } from './components/Bar';
import { ChakraProvider } from '@chakra-ui/react';



function App() {
  return (
    <>
      <div className='app'>
        <ChakraProvider>
          <Bar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </ChakraProvider>

      </div>
    </>

  );
}

export default App;
