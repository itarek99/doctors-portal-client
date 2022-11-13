import Banner from './components/Banner/Banner';
import InfoCards from './components/InfoCards/InfoCards';
import MakeAppointment from './components/MakeAppointment/MakeAppointment';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};
export default Home;
