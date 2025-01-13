import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React ,useState, useEffect } from 'react';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import VansPage from './Components/VansPage';
import VanType from './Components/VanType.jsx';
import Layout from './Components/Layout.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Income from './Components/Income.jsx';
import DashVans from './Components/DashVans.jsx';
import Reviews from './Components/Reviews.jsx';
import "./App.css"
import "./server.js"

function App() {
      const [vans, setVans] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchVans = async () => {
            try {
                const respone = await fetch("/api/vans");
                if (!respone.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await respone.json();
                setVans(data.vans);

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }   finally {
                setLoading(false);
            }
        }
            fetchVans();

    }, []);

    if (error) {
      return <h1>Error: {error}</h1>
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Vans" element={<VansPage vans={vans} setVans={setVans} />} />
            <Route path="/Vans/:id" element={<VanType vans={vans}/>} />

            <Route path="/Host" element={<Dashboard />}>
              <Route path="Income" element={<Income />} />
              <Route path='Vans' element={<DashVans />} />
              <Route path="Reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
