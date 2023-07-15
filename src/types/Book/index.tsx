import { IUser } from '../User';

export interface IReviewItem {
  reviewer: string | IUser;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBook {
  _id: string;
  title: string;
  description: string;
  genre:
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
  author: string | IUser;
  cover?: string;
  rating: number;
  publicationDate: Date;
  readingCount: number;
  alreadyReadCount: number;
  reviews: IReviewItem[];
}
