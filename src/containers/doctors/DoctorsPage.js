import './doctors.css'

import SubHeader from '../../components/SubHeader'
import aboutHeader from '../../assets/welcome.png'
import { Doctors } from '../../components/Doctors';
import { Testimonials } from '../../components/Testimonials';
import { ContactSection } from '../../components/ContactSection';
import NewsSection from '../../components/NewsSection';

export default function DoctorsPage() {

  return (
    <>
    <div className='doctors-page'>
      <SubHeader img={aboutHeader} subTitle='Home / Doctors' title='Our Doctors' />

      <div className="container">
          <Doctors />
          <Testimonials />
          <NewsSection />
          <ContactSection />
      </div>
    </div>
    </>
  )
}
