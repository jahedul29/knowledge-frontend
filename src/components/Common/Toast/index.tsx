import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
  type: 'error' | 'success';
}

const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 3000,
  type,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose, duration]);

  return (
    <div
      className={`fixed bottom-5 right-5 text-white px-4 py-3 rounded shadow ${
        type == 'error' ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      <p className="text-white font-medium">{message}</p>
    </div>
  );
};

export default Toast;
