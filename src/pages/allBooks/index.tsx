import BookCard from '@/components/Common/BookCard';
import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import { bookGenre } from '@/helpers/constants';
import { pickQueryParams } from '@/helpers/utils';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import { IBook } from '@/types/Book';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc';

const AllBooks = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSearch = pickQueryParams(queryParams, [
    'page',
    'limit',
    'searchTerm',
    'sortBy',
    'sortOrder',
    'genre',
  ]);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetBooksQuery(urlSearch, {
    refetchOnMountOrArgChange: true,
  });

  const [filters, setFilters] = useState<{ [key: string]: string }>({
    page: queryParams.get('page') || '',
    limit: queryParams.get('limit') || '',
    searchTerm: queryParams.get('searchTerm') || '',
    sortBy: queryParams.get('sortBy') || '',
    sortOrder: queryParams.get('sortOrder') || 'desc',
    genre: queryParams.get('genre') || '',
  });

  const navigateWithParams = () => {
    navigate(
      `/books?page=${filters.page}&limit=${filters.limit}&searchTerm=${filters.searchTerm}&sortBy=${filters.sortBy}&sortOrder=${filters.sortOrder}&genre=${filters.genre}`
    );
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigateWithParams();
    refetch();
  };

  const handleInputOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempFilters = filters as { [key: string]: string };
    tempFilters[e.target.name] = e.target.value;
    setFilters(tempFilters);
  };

  const handleSortBy = (order: string) => {
    const tempFilters = filters as { [key: string]: string };
    tempFilters['sortOrder'] = order;
    setFilters(tempFilters);
    navigateWithParams();
  };

  useEffect(() => {
    setFilters({
      page: queryParams.get('page') || '',
      limit: queryParams.get('limit') || '',
      searchTerm: queryParams.get('searchTerm') || '',
      sortBy: queryParams.get('sortBy') || '',
      sortOrder: queryParams.get('sortOrder') || '',
      genre: queryParams.get('genre') || '',
    });
  }, [location]);

  return (
    <div>
      {isLoading && <OverlayLoading />}
      <PageHeader
        pageTitle="All Books"
        breadCrumbItems={[{ label: 'Home', href: '/' }, { label: 'All Books' }]}
      />
      <Container>
        <div className="mb-10 rounded-md shadow-md shadow-primary w-full">
          <div className="p-4">
            <form
              onSubmit={(e) => handleSearch(e)}
              className="flex items-end justify-stretch space-x-4 mb-4 w-full"
            >
              {/* Sort By Dropdown */}
              <div className="relative flex flex-1 flex-col space-y-2">
                <label
                  htmlFor="sort-by"
                  className="text-gray-700 font-medium mr-2"
                >
                  Sort By:
                </label>
                <div className="flex items-center gap-1 w-full">
                  <select
                    id="sort-by"
                    defaultValue={filters.sortBy}
                    name="sortBy"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    onChange={(e) => handleInputOnChange(e)}
                  >
                    <option value={'title'}>Title</option>
                    <option value={'rating'}>Rating</option>
                    <option value={'genre'}>Genre</option>
                  </select>
                  <div
                    className="p-3 h-full inline-block border-2 rounded border-gray-200 cursor-pointer"
                    onClick={() =>
                      handleSortBy(filters.sortOrder === 'asc' ? 'desc' : 'asc')
                    }
                  >
                    {filters.sortOrder === 'desc' ? (
                      <FcAlphabeticalSortingZa className="text-lg" />
                    ) : (
                      <FcAlphabeticalSortingAz className="text-lg" />
                    )}
                  </div>
                </div>
              </div>

              {/* Search Input Field */}
              <div className="relative flex flex-1 flex-col space-y-2">
                <label
                  htmlFor="sort-by"
                  className="text-gray-700 font-medium mr-2"
                >
                  Search:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search by title, genre"
                    defaultValue={filters.searchTerm}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 w-full"
                    onChange={(e) => handleInputOnChange(e)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute top-3 right-3 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.828 12.672a8.5 8.5 0 111.414-1.414l4.526 4.526a1 1 0 01-1.414 1.414l-4.526-4.526zm-5.68.583a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Genre Dropdown */}
              <div className="relative flex flex-1 flex-col space-y-2">
                <label
                  htmlFor="genre"
                  className="text-gray-700 font-medium mr-2"
                >
                  Genre:
                </label>
                <select
                  id="genre"
                  name="genre"
                  defaultValue={filters.genre}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  onChange={(e) => handleInputOnChange(e)}
                >
                  <option value="">All Genres</option>
                  {bookGenre.map((item) => (
                    <option value={item.value}>{item.value}</option>
                  ))}
                </select>
              </div>

              {/* Add New Button */}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded ml-auto"
              >
                Search
              </button>
              <Link
                to="/add-book"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded ml-auto"
              >
                Add New
              </Link>
            </form>
          </div>
          {/* <hr className="border-1 border-gray-100" /> */}
          {/* <div className="p-4"></div> */}
        </div>
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
