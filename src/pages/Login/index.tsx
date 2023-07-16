import CommonInput from '@/components/Common/CommonInput';
import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import Toast from '@/components/Common/Toast';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setToken } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ILoginInput {
  email: string;
  password: string;
}

const Login = () => {
  const [login, options] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [toastInfo, setToastInfo] = useState({
    show: false,
    type: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginInput>();

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    await login(data);
    if (!options?.isLoading && options.isError) {
      setToastInfo({
        type: 'error',
        message: options?.error?.data?.message,
        show: true,
      });
    }
    if (!options?.isUninitialized && !options?.isLoading && !options.isError) {
      dispatch(setToken(options?.data?.data?.accessToken));
      Cookies.set('accessToken', options?.data?.data?.accessToken);
      setToastInfo({
        type: 'success',
        message: options?.data?.message,
        show: true,
      });
      navigate('/');
    }
  };

  console.log(options);

  return (
    <div>
      {options?.isLoading && <OverlayLoading />}
      {toastInfo.show && (
        <Toast
          message={toastInfo.message}
          type="error"
          onClose={() => setToastInfo((prev) => ({ ...prev, show: false }))}
        />
      )}
      <PageHeader
        pageTitle="Login"
        breadCrumbItems={[{ label: 'Home', href: '/' }, { label: 'Login' }]}
      />
      <Container>
        <div>
          {/* <h1 className="text-3xl my-10 font-bold">Login</h1> */}
          <form
            className="border-2 rounded-lg border-gray-100 p-10 w-[600px] m-auto bg-primary bg-opacity-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-5">
              <CommonInput
                label="Email"
                type="email"
                placeholder="Please enter your email"
                register={register('email', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 mt-1 inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-5">
              <CommonInput
                label="Password"
                type="password"
                placeholder="Please enter you password"
                register={register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 mt-1 inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <input
                className="h-[50px] rounded bg-primary hover:bg-secondary text-white w-full mt-6"
                type="submit"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
