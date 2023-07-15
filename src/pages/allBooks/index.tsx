import BookCard from '@/components/Common/BookCard';
import Container from '@/components/Common/Container';
import PageHeader from '@/components/Common/PageHeader';
import { useGetBooksQuery } from '@/redux/features/counter/book/bookApi';
import { IBook } from '@/types/Book';

const AllBooks = () => {
  const { data } = useGetBooksQuery({ page: '', limit: '' });
  return (
    <div>
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
