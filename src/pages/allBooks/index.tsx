import BookCard from '@/components/Common/BookCard';
import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import { IBook } from '@/types/Book';

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(
    { page: '', limit: '' },
    { refetchOnMountOrArgChange: true }
  );
  return (
    <div>
      {isLoading && <OverlayLoading />}
      <PageHeader
        pageTitle="All Books"
        breadCrumbItems={[{ label: 'Home', href: '/' }, { label: 'All Books' }]}
      />
      <Container>
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

export default AllBooks;
