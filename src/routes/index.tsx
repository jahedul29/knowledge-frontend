import App from '@/App';
import Home from '@/pages/Home';
import Login from '@/pages/login';
import NotFound from '@/pages/NotFound';
import Register from '@/pages/Register';
import AllBooks from '@/pages/allBooks';
import { createBrowserRouter } from 'react-router-dom';
import AddBook from '@/pages/addBook';
import PrivateRoute from '@/components/Common/PrivateRoute';
import BookDetails from '@/pages/book-details';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <AllBooks />,
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
      },
      {
        path: '/add-book',
        element: (
          <PrivateRoute>
            {' '}
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default routes;
