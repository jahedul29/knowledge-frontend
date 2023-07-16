import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  isMulti?: boolean;
  register?: any;
  className?: string;
  label?: string;
};

const CustomSelect: React.FC<SelectProps> = ({
  options,
  isMulti = false,
  register,
  className,
  label,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSelectedOptions] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (isMulti) {
      // If multi-select, toggle the selected option
      setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions.includes(value)) {
          return prevSelectedOptions.filter((option) => option !== value);
        } else {
          return [...prevSelectedOptions, value];
        }
      });
    } else {
      // If single-select, set the selected option
      setSelectedOptions([value]);
    }
  };

  return (
    <div className="pb-2">
      {label && <label className="mb-1 inline-block">{label}</label>}
      <select
        multiple={isMulti}
        // value={selectedOptions}
        onChange={handleSelectChange}
        className={`border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-green-500 focus:border-green-500 w-full h-[50px] ${className}`}
        {...register}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
