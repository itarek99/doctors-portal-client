const ServiceCard = ({ service }) => {
  const { img, name, details } = service;

  return (
    <div className='px-8 py-12 flex flex-col items-center text-center shadow-lg border rounded-xl'>
      <img src={img} alt='' />
      <h3 className='text-xl font-semibold mt-6'>{name}</h3>
      <p className='mt-2'>{details}</p>
    </div>
  );
};
export default ServiceCard;
