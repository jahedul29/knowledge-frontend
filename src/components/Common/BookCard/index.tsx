import { IBook } from '@/types/Book';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from './../../../types/User/index';
import moment from 'moment';
import Rating from './../Rating/index';

const BookCard: FC<
  Pick<
    IBook,
    | '_id'
    | 'author'
    | 'cover'
    | 'genre'
    | 'publicationDate'
    | 'alreadyReadCount'
    | 'title'
    | 'rating'
  >
> = ({
  genre,
  _id,
  alreadyReadCount,
  publicationDate,
  author,
  cover,
  title,
  rating,
}) => {
  return (
    <Link
      to={`/books/${_id}`}
      className="h-[500px] w-full relative p-6 bg-green-100 overflow-hidden"
    >
      <div className="absolute h-full w-full overflow-hidden left-0 top-0 scale-100 hover:scale-150 transition-all duration-1000">
        <img
          src={cover ? cover : '/assets/images/defaultBookImage.jpg'}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="absolute flex items-center justify-between w-full p-6 top-0 left-0">
        <div className="rounded-lg px-3 py-2 bg-primary text-white font-semibold">
          {genre}
        </div>
        <img
          src={
            (author as IUser)?.profileImage
              ? (author as IUser)?.profileImage
              : '/assets/images/profile-avatar.jpg'
          }
          alt="profile"
          className="w-[45px] h-[45px] rounded-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-gray-900/60 to-gray-50/25  w-full space-y-2 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="font-semibold">
          Published at ${moment(publicationDate).format('MMM YYYY')}
        </p>
        <div className="flex items-center justify-between">
          <p>Read: ${alreadyReadCount} times</p>
          <Rating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
