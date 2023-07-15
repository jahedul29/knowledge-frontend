import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="inline-flex">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <AiFillStar color={index < rating ? 'green' : 'gray'} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
