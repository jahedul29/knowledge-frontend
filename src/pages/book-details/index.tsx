import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import { useGetBookDetailsQuery } from '@/redux/features/book/bookApi';
import { IBook } from '@/types/Book';
import { IUser } from '@/types/User';
import { BiLocationPlus } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  GrFacebookOption,
  GrTwitter,
  GrLinkedinOption,
  GrGoogle,
} from 'react-icons/gr';
import moment from 'moment';
import Rating from '@/components/Common/Rating';
import CommonButton from '@/components/Common/CommonButton';
import { AiOutlineDelete, AiTwotoneEdit } from 'react-icons/ai';

const BookDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isError, isLoading } = useGetBookDetailsQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  //   console.log({ data });

  const socialLinks = [
    {
      id: 1,
      url: '/',
      icon: <GrFacebookOption />,
    },
    {
      id: 2,
      url: '/',
      icon: <GrTwitter />,
    },
    {
      id: 3,
      url: '/',
      icon: <GrLinkedinOption />,
    },
    {
      id: 4,
      url: '/',
      icon: <GrGoogle />,
    },
  ];

  const bookDetails: IBook = data?.data;
  const author: IUser = data?.data?.author;

  return (
    <div>
      {isLoading && <OverlayLoading />}
      <PageHeader
        pageTitle={bookDetails?.title ? bookDetails.title : 'Book title'}
        breadCrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'All Books', href: '/books' },
          { label: bookDetails?.title ? bookDetails?.title : 'Book title' },
        ]}
      />
      <Container>
        <div className="grid grid-cols-3 space-x-10">
          <div className="col-span-2">
            <div className="rounded shadow-md shadow-primary">
              <div className="p-4 flex justify-between items-center border-b-2 border-gray-100">
                <div className="">
                  <h2 className="text-2xl font-bold">{bookDetails?.title}</h2>
                  <p className="text-gray-500">
                    Published at{' '}
                    {moment(bookDetails?.publicationDate).format('MMM, YYYY')}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <Rating rating={bookDetails?.rating} /> (
                    {bookDetails?.rating})
                  </div>
                  <p className="text-gray-500 text-right">
                    Total read {bookDetails?.alreadyReadCount}
                  </p>
                  <p className="text-gray-500 text-right">
                    Currently reading {bookDetails?.readingCount}
                  </p>
                </div>
              </div>
              <div className="border-b-2 border-gray-100 w-full overflow-hidden py-4 flex justify-end space-x-4 p-4">
                <CommonButton className="bg-blue-500 h-[40px] px-5 text-base font-semibold">
                  <div className="flex items-center">
                    <AiTwotoneEdit />
                    Edit Book
                  </div>
                </CommonButton>
                <CommonButton className="bg-red-500 h-[40px] px-5 text-base font-semibold">
                  <div className="flex items-center">
                    <AiOutlineDelete />
                    Delete
                  </div>
                </CommonButton>
              </div>

              <div className="border-b-2 border-gray-100 w-full h-[500px] overflow-hidden py-4">
                <img
                  src={
                    bookDetails?.cover
                      ? bookDetails.cover
                      : '/assets/images/defaultBookImage.jpg'
                  }
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex justify-between items-center border-b-2 border-gray-100">
                <div className="border-b-2 border-gray-100 w-full overflow-hidden p-4">
                  <p className="font-bold">Description</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-4">
                <p>{bookDetails?.description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded shadow-md shadow-primary">
              <div className="p-3 flex border-b-2 border-gray-100 items-center">
                <FaUserAlt className />
                <p className="ml-2">Author</p>
              </div>
              <div className="p-3">
                <div className="flex items-center">
                  <img
                    src={
                      author?.profileImage
                        ? author?.profileImage
                        : '/assets/images/profile-avatar.jpg'
                    }
                    className="w-[82px] h-[85px] rounded-full object-cover"
                    alt=""
                  />
                  <div className="flex space-y-2 flex-col justify-center pl-4">
                    <h3 className="font-bold text-lg">
                      {author?.name.firstName} {author?.name.lastName}
                    </h3>
                    <p className="inline-block flex items-center space-x-1 text-gray-600">
                      <BiLocationPlus /> {author?.address}
                    </p>
                  </div>
                </div>
                <div className="p-3">
                  <div className="border-gray-100 py-3 flex items-center border-b-2">
                    <MdOutlinePhoneIphone className="text-xl text-primary mr-2" />
                    {author?.phoneNumber}
                  </div>
                  <div className="border-gray-100 py-3 flex items-center border-b-2">
                    <HiOutlineMail className="text-xl text-primary mr-2" />
                    {author?.email}
                  </div>
                  <div className="flex items-center space-x-2 pt-3">
                    {socialLinks.map((item) => {
                      return (
                        <Link
                          className="bg-gray-500 rounded flex items-center justify-center text-white text-lg p-2 hover:bg-primary"
                          key={item.id}
                          to={item.url}
                          target="_blank"
                        >
                          {item.icon}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
