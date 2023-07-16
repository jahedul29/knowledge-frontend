import { IUser } from '../User';

export interface IReviewItem {
  reviewer: string | IUser;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IBookGenre =
  | 'Fiction'
  | 'Non-fiction'
  | 'Mystery'
  | 'Thriller'
  | 'Science Fiction'
  | 'Fantasy'
  | 'Romance'
  | 'Historical'
  | 'Biography'
  | 'Self-help';

export interface IBook {
  _id: string;
  title: string;
  description: string;
  genre: IBookGenre;
  author: string | IUser;
  cover?: string;
  rating: number;
  publicationDate: Date;
  readingCount: number;
  alreadyReadCount: number;
  reviews: IReviewItem[];
}
