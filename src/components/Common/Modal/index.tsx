import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      <div
        className={`bg-white w-full max-w-lg rounded-lg z-10 rounded-lg p-8 ${className}`}
      >
        {title && (
          <div className="pb-2 border-b-2 border-gray-100">
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
