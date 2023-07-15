import CommonButton from '@/components/Common/CommonButton';
import { BiSearch } from 'react-icons/bi';

const HeroSection = () => {
  return (
    <div
      className={`w-100 h-[760px] bg-[url('/assets/images/banner-bg.png')] bg-contain bg-top`}
    >
      <div className="backdrop-blur-md h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-5 text-white">
          <h2 className="text-5xl font-bold">Find Books Here</h2>
          <p>Find from several books and read</p>
          <div className="w-[680px] bg-[#444444] bg-opacity-50 rounded p-10 flex items-stretch justify-between">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="rounded-sm p-4 w-[70%] outline-none text-black"
            />

            <CommonButton className="flex items-center w-[28%] px-8">
              Search
              <BiSearch className="ml-auto" />
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
