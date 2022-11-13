import heroBg from '../../../../assets/images/bg.png';
import bannerImg from '../../../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className={`hero container mx-auto px-2 min-h-[88vh] my-auto`} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className='flex gap-8 items-center justify-center h-full flex-col lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0'>
          <img src={bannerImg} className='w-full shrink-0 object-contain rounded-lg shadow-2xl' alt='' />
        </div>
        <div className='w-full lg:w-1/2 pb-12'>
          <h1 className='text-5xl font-bold '>
            Your New Smile <br /> Starts Here
          </h1>
          <p className='py-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the
          </p>
          <button className='btn btn-primary bg-gradient text-white px-6'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
