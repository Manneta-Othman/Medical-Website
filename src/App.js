import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home'
import About from './containers/about/AboutPage'
import Services from './containers/services/ServicesPage'
import Doctors from './containers/doctors/DoctorsPage'
import News from './containers/news/News'
import Contact from './containers/contact/Contact'
import Appointment from './containers/appointment/Appointment'
import NotFound from './containers/notfound/NotFound';
import Navebar from './components/Navbar';
import SvDetails from './components/SvDetails';
import { Footer } from './components/Footer';
import NewsDetails from './components/NewsDetails';

import {ProvideDataContext} from './Context';




function App() {

  return (
    <>
  <div className="App">
      <BrowserRouter>
        <Navebar />
      <ProvideDataContext>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:id' element={<SvDetails />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/news' element={<News />} />
            <Route path='news/:id' element={<NewsDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </ProvideDataContext>
        <Footer />
      </BrowserRouter>

  </div>
    </>
  
  )
}

export default App;
