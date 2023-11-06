import React from 'react';

type Props = {
  children?: any;
};

function FormErrorLabel({ children }: Props): JSX.Element | null {
  return children ? (
    <span className="text-left text-sm text-red-500">{children}</span>
  ) : null;
}

export default FormErrorLabel;
