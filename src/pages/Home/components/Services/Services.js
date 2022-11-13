import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import treatment from '../../../../assets/images/treatment.png';
import whitening from '../../../../assets/images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening,
    },
  ];

  return (
    <div className='container mx-auto my-24 px-2'>
      <div className='text-center'>
        <h2 className='font-bold text-xl text-secondary uppercase'>Our Services</h2>
        <h2 className='text-4xl'>Services We Provide </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 my-24 gap-12 items-center'>
        <div>
          <img className='max-h-[576px] w-full object-cover rounded-xl ' src={treatment} alt='' />
        </div>
        <div>
          <h2 className='font-bold text-5xl'>Exceptional Dental Care, on Your Terms</h2>
          <p className='my-6'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of
            letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page
          </p>
          <button className='btn btn-primary text-white bg-gradient'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Services;
