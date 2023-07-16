import CommonButton from '@/components/Common/CommonButton';
import Container from '@/components/Common/Container';
import { setToken } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const headerLinks = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Books',
      url: '/books',
    },
    {
      label: 'Authors',
      url: '/authors',
    },
    {
      label: 'Add Book',
      url: '/add-book',
    },
  ];

  return (
    <div className="h-[65px] flex items-center justify-between overflow-hidden">
      <div className="flex items-center space-x-20">
        <img
          className="h-[60px] "
          src="/assets/images/knowledgeLogo.png"
          alt=""
        />
        {headerLinks.map((item, index: number) => (
          <Link
            key={index}
            to={item.url}
            className={`text-black hover:text-primary`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {accessToken ? (
        <div>
          <CommonButton
            className="cursor-pointer"
            onClick={() => {
              dispatch(setToken(''));
              Cookies.set('accessToken', '');
              navigate('/');
            }}
          >
            Logout
          </CommonButton>
        </div>
      ) : (
        <div>
          <CommonButton
            className="cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </CommonButton>
        </div>
      )}
    </div>
  );
};

export default Header;
