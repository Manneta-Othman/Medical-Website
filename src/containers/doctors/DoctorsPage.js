import './doctors.css'

import SubHeader from '../../components/SubHeader'
import aboutHeader from '../../assets/welcome.png'
import { Doctors } from '../../components/Doctors';
import { Testimonials } from '../../components/Testimonials';
import { ContactSection } from '../../components/ContactSection';
import SmCard from '../../components/SmCard';

export default function DoctorsPage() {

  return (
    <div className='doctors-page'>
      <SubHeader img={aboutHeader} subTitle='Home / Doctors' title='Our Doctors' />

      <div className="container">
          <Doctors />
          <Testimonials />
          <div className='padding'>
            <SmCard />
          </div>
          <ContactSection />
      </div>
    </div>
  )
}
