import CommonButton from '@/components/Common/CommonButton';
import Container from '@/components/Common/Container';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <div>
        <CommonButton>Login</CommonButton>
      </div>
    </div>
  );
};

export default Header;
