import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Label.scss';

export const Label = (props) => {
  const {
    htmlFor,
    className,
    ...rest
  } = props;
  const labelClass = classNames('control-label', className);
  return (<label htmlFor={htmlFor} className={labelClass} {...rest} />);
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string
};
export default Label;
