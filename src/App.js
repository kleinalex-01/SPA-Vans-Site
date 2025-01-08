import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import VansPage from './Components/VansPage';
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Vans' element={<VansPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
