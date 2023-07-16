import CommonInput from '@/components/Common/CommonInput';
import Container from '@/components/Common/Container';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import { useRegisterUserMutation } from '@/redux/features/auth/authApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IRegisterInput {
  phoneNumber: string;
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
}

const Register = () => {
  const [registerUser, options] = useRegisterUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterInput>();

  const onSubmit: SubmitHandler<IRegisterInput> = async (data) => {
    const result: any = await registerUser(data);
    if (result?.error) {
      toast.error(result.error.data.message);
    }
    if (result?.data) {
      toast.success(result?.data?.message);
      navigate('/login');
    }
  };

  return (
    <div>
      {options?.isLoading && <OverlayLoading />}
      <PageHeader
        pageTitle="Register"
        breadCrumbItems={[{ label: 'Home', href: '/' }, { label: 'Register' }]}
      />
      <Container>
        <form
          className="border-2 rounded-lg border-gray-100 p-10 w-[600px] m-auto bg-primary bg-opacity-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <CommonInput
              label="Email"
              type="email"
              placeholder="Please enter your email"
              register={register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.phoneNumber && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="Phone Number"
              type="text"
              placeholder="Please enter your phone number"
              register={register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="Password"
              type="password"
              placeholder="Password"
              register={register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="First Name"
              type="text"
              placeholder="First Name"
              register={register('name.firstName', { required: true })}
            />
            {errors.name?.firstName && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="Last Name"
              type="text"
              placeholder="Last Name"
              register={register('name.lastName', { required: true })}
            />
            {errors.name?.lastName && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="Address"
              type="text"
              placeholder="address"
              register={register('address', { required: true })}
            />
            {errors.address && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                This field is required
              </span>
            )}
          </div>
          <div>
            <input
              className="h-[50px] rounded bg-primary hover:bg-secondary text-white w-full mt-6"
              type="submit"
              value={'Register'}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
