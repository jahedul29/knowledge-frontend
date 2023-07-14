import { useAppSelector } from '@/redux/hooks';

const Home = () => {
  const counter = useAppSelector((state) => state.counter);

  console.log(counter);
  return <div>this is homepage</div>;
};

export default Home;
