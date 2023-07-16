import CommonInput from '@/components/Common/CommonInput';
import Container from '@/components/Common/Container';
import CustomDatePicker from '@/components/Common/CustomDatePicker';
import CustomSelect from '@/components/Common/CustomSelect';
import OverlayLoading from '@/components/Common/OverlayLoading';
import PageHeader from '@/components/Common/PageHeader';
import { bookGenre } from '@/helpers/constants';
import { useAddBookMutation } from '@/redux/features/book/bookApi';
import { IBookGenre } from '@/types/Book';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface IAddBookInput {
  title: string;
  description: string;
  genre: IBookGenre;
  cover: string;
  publicationDate: Date;
}

const AddBook = () => {
  const [addBook, options] = useAddBookMutation();
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddBookInput>();

  const onSubmit: SubmitHandler<IAddBookInput> = async (data) => {
    const result: any = await addBook(data);
    console.log({ result });
    if (result.error) {
      toast.error(result.error.data.message);
    }
    if (result?.data) {
      toast.success(result.data.message);

      reset();
    }
  };
  return (
    <div>
      {options?.isLoading && <OverlayLoading />}

      <PageHeader
        pageTitle="Add Book"
        breadCrumbItems={[{ label: 'Home', href: '/' }, { label: 'Add Book' }]}
      />
      <Container>
        <form
          className="border-2 rounded-lg border-gray-100 p-10 w-[600px] m-auto bg-primary bg-opacity-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <CommonInput
              label="Title"
              type="text"
              placeholder="Please enter book title"
              register={register('title', { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                {errors.title?.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <CommonInput
              label="Description"
              type="textarea"
              rows={10}
              cols={10}
              placeholder="Please enter book description"
              register={register('description', { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                {errors.description?.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <CustomSelect
              label="Genre"
              isMulti={false}
              options={bookGenre.map((item) => ({
                label: item.value,
                value: item.value,
              }))}
              register={register('genre', { required: true })}
            />
            {errors.title && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                {errors.genre?.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <CustomDatePicker
              label="Publication Date"
              name="publicationDate"
              control={control}
            />
            {errors.title && (
              <span className="text-sm text-red-500 mt-1 inline-block">
                {errors.publicationDate?.message}
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
      </Container>
    </div>
  );
};

export default AddBook;
