import React from 'react';
import * as R from 'ramda'
import classNames from 'classnames';

type Props = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
};

const InputText: React.FC<Props> = ({ value, onChange, placeholder }) => {
  const onChangeHandler = R.compose(
    onChange,
    R.pathOr('', ['target', 'value'])
  );

  const classes = classNames(
    "w-full p-2 focus:outline-none",
    "border rounded-lg",
    "bg-opacity-50 bg-gray-800"
  )


  return (<input placeholder={placeholder} className={classes} type="text" value={value} onChange={onChangeHandler} />);
}

InputText.defaultProps = {
};

export default InputText;