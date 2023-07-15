import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  register?: any;
}

const CommonInput: React.FC<InputProps> = ({
  label,
  className,
  register,
  ...props
}) => {
  return (
    <div>
      {label && <label className="mb-1 inline-block">{label}</label>}
      <input
        className={`border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-green-500 focus:border-green-500 w-full h-[50px] ${className}`}
        {...register}
        {...props}
      />
    </div>
  );
};

export default CommonInput;
