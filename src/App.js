import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

import Home from './Home'
import About from './containers/about/AboutPage'
import Services from './containers/services/ServicesPage'
import Doctors from './containers/doctors/DoctorsPage'
import News from './containers/news/News'
import Contact from './containers/contact/Contact'
import NotFound from './containers/notfound/NotFound';
import Navebar from './components/Navbar';
import SvDetails from './components/SvDetails';
import { Footer } from './components/Footer';
import { createContext } from 'react';


export const DataContext = createContext();


function App() {

  const [services, setServices] = useState();

  const [news, setNews] = useState();

  const [serviceId, setServiceId] = useState(0);

  const getData = () => {
    fetch('data.json', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then((res) => {
      return res.json();
    }).then((data) => {
      setServices(data.services);
      setNews(data.news);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
  <div className="App">
      <BrowserRouter>
        <Navebar />
      <DataContext.Provider value={{services, setServices, serviceId, setServiceId, news, setNews}}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services-details' element={<SvDetails />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </DataContext.Provider>
        <Footer />
      </BrowserRouter>

  </div>
    </>
  
  )
}

export default App;
