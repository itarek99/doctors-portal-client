import appointment from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor.png';

const MakeAppointment = () => {
  return (
    <div className='container mx-auto px-2 my-24 mt-48'>
      <div className='grid grid-cols-1 lg:grid-cols-2  text-white' style={{ backgroundImage: `url(${appointment})` }}>
        <div className='relative hidden lg:block'>
          <img className='absolute mx-auto left-0 right-0 bottom-0 h-[480px]' src={doctor} alt='doctor' />
        </div>
        <div className='space-y-4 py-12 px-6'>
          <h4 className='text-xl font-bold text-secondary'>Appointment</h4>
          <h2 className='font-semibold text-4xl'>Make an appointment Today</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of
            letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page
          </p>
          <button className='btn btn-primary bg-gradient text-white'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default MakeAppointment;
