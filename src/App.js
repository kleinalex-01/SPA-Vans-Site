import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React ,useState, useEffect } from 'react';
import HomePage from './Components/HomePage/HomePage.jsx';
import AboutPage from './Components/HomePage/AboutPage.jsx';
import VansPage from './Components/HomePage/VansPage';
import VanType from './Components/HomePage/VanType.jsx';
import Layout from './Components/Host/Layout.jsx';
import Host from './Components/Host/Host.jsx';
import Income from './Components/Host/Income.jsx';
import DashVans from './Components/Host/DashVans.jsx';
import Reviews from './Components/Host/Reviews.jsx';
import Dashboard from './Components/Host/Dashboard.jsx';
import "./App.css"
import "./server.js"

function App() {
      const [vans, setVans] = useState([]);
      const [rentedVan, setRentedVan] = useState([]);
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
            <Route path="/Vans/:id" element={<VanType vans={vans} rentedVan={rentedVan} setRentedVan={setRentedVan}/>} />

            <Route path="/Host" element={<Host />}>
              <Route path="Dashboard" element={<Dashboard vans={vans} rentedVan={rentedVan} setRentedVan={setRentedVan}/>} />
              <Route path="Income" element={<Income />} />
              <Route path='Vans' element={<DashVans vans={vans} rentedVan={rentedVan} setRentedVan={setRentedVan} />} />
              <Route path="Reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
