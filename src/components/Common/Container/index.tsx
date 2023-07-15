import { FC, ReactNode } from 'react';

export interface IContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ className, children, ...props }) => {
  return (
    <div className={`px-4 md:px-10 lg:px-60 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
