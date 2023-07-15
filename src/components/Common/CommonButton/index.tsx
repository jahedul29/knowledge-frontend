import React, { ButtonHTMLAttributes, FC } from 'react';

export type ICommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CommonButton: FC<ICommonButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-primary hover:bg-secondary border-none rounded text-white font-bold text-lg px-10 py-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
