import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      img: people1,
      location: 'California',
      text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      _id: 1,
      name: 'Linda Harris',
      img: people2,
      location: 'California',
      text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      _id: 1,
      name: 'Susan Williams',
      img: people3,
      location: 'California',
      text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
  ];

  return (
    <section className='container mx-auto my-24 px-2'>
      <div>
        <h4 className='text-xl font-bold text-secondary'>Testimonials</h4>
        <h2 className='text-4xl'>What Our Patients Say</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
