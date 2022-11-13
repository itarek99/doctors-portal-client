import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhoneOutgoing } from 'react-icons/hi';

const InfoCards = () => {
  return (
    <div className='container mx-auto px-2 my-24'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='flex gap-4 items-center text-white bg-gradient rounded-lg px-4 py-8'>
          <div>
            <HiOutlineClock className='text-6xl' />
          </div>
          <div>
            <h3 className='font-bold text-xl mb-1'>Opening Hour</h3>
            <p>We are open at 9:00 AM to 9:00 PM</p>
          </div>
        </div>

        <div className='flex gap-4 items-center text-white bg-accent rounded-lg px-4 py-8'>
          <div>
            <HiOutlineLocationMarker className='text-6xl' />
          </div>
          <div>
            <h3 className='font-bold text-xl mb-1'>Visit our location</h3>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>

        <div className='flex gap-4 items-center text-white bg-gradient rounded-lg px-4 py-8'>
          <div>
            <HiOutlinePhoneOutgoing className='text-6xl' />
          </div>
          <div>
            <h3 className='font-bold text-xl mb-1'>Contact Us Now</h3>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCards;
