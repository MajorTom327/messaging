import classNames from 'classnames';
import React from 'react';

type Props = {
  type?: 'default' | 'success' | 'warning' | 'danger';
  circle?: boolean;
  rise?: boolean
  onClick?: () => void;
  className?: string
};

const Button: React.FC<Props> = ({ className, children, onClick, type, circle, rise }) => {

  const classes = classNames(
    "p-2 rounded-lg border bg-gray-800 border-gray-900 text-white hover:shadow-lg m-2 focus:outline-none focus:ring-2",
    className,
    {
      "": type === "default",
      "transition transform hover:-translate-y-1": rise,
      "rounded-full": circle,
      "border-green-600 bg-green-500 text-white": type === "success",
      "border-yellow-600 bg-yellow-500 text-white": type === "warning",
      "border-red-600 bg-red-500 text-white": type === "danger",
    });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>);
}

Button.defaultProps = {
  type: 'default',
  onClick: () => { },
  circle: false,
  rise: false
};

export default Button;