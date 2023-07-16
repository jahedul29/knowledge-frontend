import CommonInput from '@/components/Common/CommonInput';
import Container from '@/components/Common/Container';
import CustomDatePicker from '@/components/Common/CustomDatePicker';
import CustomSelect from '@/components/Common/CustomSelect';
import PageHeader from '@/components/Common/PageHeader';
import { bookGenre } from '@/helpers/constants';
import { IBookGenre } from '@/types/Book';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IAddBookInput {
  title: string;
  description: string;
  genre: IBookGenre;
  cover: string;
  publicationDate: Date;
}

const AddBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IAddBookInput>();

  const onSubmit: SubmitHandler<IAddBookInput> = async (data) =>
    console.log(data);
  return (
    <div>
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
              type="title"
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
              placeholder="Please enter book description"
              register={register('title', { required: true })}
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
