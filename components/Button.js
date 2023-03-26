import { filterProps } from '@mantine/core';
import React from 'react';

const Button = ({ ...text }) => {
  return <button className="btn" {...text}></button>;
};

export default Button;
