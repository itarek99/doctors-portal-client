import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import heroBg from '../../../assets/images/bg.png';
import bannerImg from '../../../assets/images/chair.png';

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div className={`min-h-[50vh] my-auto`} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className='py-6 flex gap-8 items-center justify-center h-full flex-col lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0'>
          <img src={bannerImg} className='w-full shrink-0 object-contain rounded-lg shadow-2xl' alt='' />
        </div>
        <div className='w-full h-full lg:w-1/2 pb-12 lg:pb-0 flex items-center justify-center '>
          <DayPicker
            mode='single'
            modifiersClassNames={{
              selected: 'bg-secondary text-white hover:text-accent',
              today: 'bg-primary text-white',
            }}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};
export default AppointmentBanner;
