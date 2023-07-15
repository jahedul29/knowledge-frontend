import { IBook } from '../Book';

export interface IUserName {
  firstName: string;
  lastName: string;
}

export interface IWishlistItem {
  bookId: string | IBook;
  flag: 'reading' | 'read_later';
}

export interface IUser {
  _id: string;
  phoneNumber: string;
  email: string;
  role: 'admin' | 'user';
  name: IUserName;
  dateOfBirth?: Date;
  profileImage?: string;
  address: string;
  rating: number;
  totalBooksPublished: number;
  isAuthor: boolean;
  wishlist: IWishlistItem[];
}
