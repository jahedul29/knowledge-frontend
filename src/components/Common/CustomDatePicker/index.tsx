import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';

type DatePickerProps = {
  label?: string;
  className?: string;
  register?: any;
  control?: any;
  name: string;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({
  className,
  label,
  name,
  control,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 inline-block">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select Date"
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className={`border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-green-500 focus:border-green-500 w-full h-[50px] ${className}`}
          />
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
