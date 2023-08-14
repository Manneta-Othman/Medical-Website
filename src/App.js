import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home'
import About from './containers/about/About'
import Services from './containers/services/Services'
import Doctors from './containers/doctors/Doctors'
import News from './containers/news/News'
import Contact from './containers/contact/Contact'
import NotFound from './containers/notfound/NotFound';
import Navebar from './components/Navbar';





function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navebar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/servises' element={<Services />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    </>
  
  )
}

export default App;
