import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BsCheckCircleFill, BsExclamationCircleFill } from 'react-icons/bs';

function Icon({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}): JSX.Element {
  const getIcon = () => {
    switch (iconName) {
      case 'loading':
        return (
          <AiOutlineLoading
            className={`h-9 w-9 animate-spin rounded-full bg-primary-purple/20 p-2 text-primary-purple ${className}`}
          />
        );

      case 'success':
        return (
          <BsCheckCircleFill
            className={`h-9 w-9 rounded-full bg-green-500/20 p-2 text-green-500 ${className}`}
          />
        );

      case 'error':
        return (
          <BsExclamationCircleFill
            className={`h-9 w-9 rounded-full bg-red-500/20 p-2 text-red-500 ${className}`}
          />
        );

      default:
        return (
          <BsExclamationCircleFill
            className={`h-9 w-9 rounded-full bg-primary-purple/20 p-2 text-primary-purple ${className}`}
          />
        );
    }
  };

  return <div className="flex items-center justify-center">{getIcon()}</div>;
}

Icon.defaultProps = {
  className: '',
};

export default Icon;
