import BookCard from '@/components/Common/BookCard';
import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import SectionHeader from '@/components/Common/SectionHeader';
import HeroSection from '@/components/Home/HeroSection';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import { useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types/Book';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(
    { page: 1, limit: 6 },
    { refetchOnMountOrArgChange: true }
  );
  // const bookList: IBook[] = [
  //   {
  //     _id: '1',
  //     title: 'Pother Pachali',
  //     description: 'descripton',
  //     genre: 'Thriller',
  //     cover: '/assets/images/defaultBookImage.jpg',
  //     author: {
  //       _id: '3',
  //       phoneNumber: '2343242',
  //       email: 'test',
  //       role: 'user',
  //       name: {
  //         firstName: 'Mr',
  //         lastName: 'Author',
  //       },
  //       dateOfBirth: undefined,
  //       profileImage: '',
  //       address: '',
  //       rating: 3,
  //       totalBooksPublished: 3,
  //       isAuthor: true,
  //       wishlist: [],
  //     },
  //     publicationDate: new Date(),
  //     rating: 3,
  //     alreadyReadCount: 100,
  //     readingCount: 10,
  //     reviews: [],
  //   },
  //   {
  //     _id: '3',
  //     title: 'Pother Pachali',
  //     description: 'descripton',
  //     genre: 'Thriller',
  //     cover: '',
  //     author: {
  //       _id: '3',
  //       phoneNumber: '2343242',
  //       email: 'test',
  //       role: 'user',
  //       name: {
  //         firstName: 'Mr',
  //         lastName: 'Author',
  //       },
  //       dateOfBirth: undefined,
  //       profileImage: '',
  //       address: '',
  //       rating: 3,
  //       totalBooksPublished: 3,
  //       isAuthor: true,
  //       wishlist: [],
  //     },
  //     publicationDate: new Date(),
  //     rating: 3,
  //     alreadyReadCount: 100,
  //     readingCount: 10,
  //     reviews: [],
  //   },
  //   {
  //     _id: '3',
  //     title: 'Pother Pachali',
  //     description: 'descripton',
  //     genre: 'Thriller',
  //     cover: '',
  //     author: {
  //       _id: '3',
  //       phoneNumber: '2343242',
  //       email: 'test',
  //       role: 'user',
  //       name: {
  //         firstName: 'Mr',
  //         lastName: 'Author',
  //       },
  //       dateOfBirth: undefined,
  //       profileImage: '',
  //       address: '',
  //       rating: 3,
  //       totalBooksPublished: 3,
  //       isAuthor: true,
  //       wishlist: [],
  //     },
  //     publicationDate: new Date(),
  //     rating: 3,
  //     alreadyReadCount: 100,
  //     readingCount: 10,
  //     reviews: [],
  //   },
  //   {
  //     _id: '3',
  //     title: 'Pother Pachali',
  //     description: 'descripton',
  //     genre: 'Thriller',
  //     cover: '',
  //     author: {
  //       _id: '3',
  //       phoneNumber: '2343242',
  //       email: 'test',
  //       role: 'user',
  //       name: {
  //         firstName: 'Mr',
  //         lastName: 'Author',
  //       },
  //       dateOfBirth: undefined,
  //       profileImage: '',
  //       address: '',
  //       rating: 3,
  //       totalBooksPublished: 3,
  //       isAuthor: true,
  //       wishlist: [],
  //     },
  //     publicationDate: new Date(),
  //     rating: 3,
  //     alreadyReadCount: 100,
  //     readingCount: 10,
  //     reviews: [],
  //   },
  // ];
  console.log(data?.data);
  return (
    <div>
      <HeroSection />
      <Container>
        {isLoading && <OverlayLoading />}
        <SectionHeader
          title="The Most Read Books"
          subtitle="Best Books"
          buttonLabel="View All"
          buttonUrl="/"
        />
        <div className="grid grid-cols-3 gap-10">
          {data?.data?.data?.map((item: IBook, index: number) => (
            <BookCard
              _id={item._id}
              title={item.title}
              genre={item.genre}
              author={item.author}
              alreadyReadCount={item.alreadyReadCount}
              publicationDate={item.publicationDate}
              rating={item.rating}
              cover={item.cover}
              key={item._id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
