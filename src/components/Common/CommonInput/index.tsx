import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  register?: any;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  register?: any;
}

type CommonInputProps = InputProps | TextareaProps;

const CommonInput: React.FC<CommonInputProps> = ({
  label,
  className,
  register,
  ...props
}) => {
  const { rows, ...inputProps } = props as TextareaProps;
  if (rows) {
    return (
      <div>
        {label && <label className="mb-1 inline-block">{label}</label>}
        <textarea
          rows={rows}
          className={`border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-green-500 focus:border-green-500 w-full h-[50px] ${className}`}
          {...register}
          {...props}
        />
      </div>
    );
  } else {
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
  }
};

export default CommonInput;
