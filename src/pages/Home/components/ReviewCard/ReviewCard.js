const ReviewCard = ({ review }) => {
  const { text, img, name, location } = review;
  return (
    <div className='shadow-lg p-10 border rounded-xl'>
      <p>{text}</p>
      <div className='flex items-center gap-4 mt-6'>
        <div className='avatar'>
          <div className='w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2'>
            <img src={img} alt='' />
          </div>
        </div>
        <div>
          <p className='font-semibold text-xl'>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
