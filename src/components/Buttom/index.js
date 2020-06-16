import React from 'react';
import { Button, Title } from './styles';

export default function ButtonComponent({ type, text, size, onPress }) {
  let width;
  let backgroundColor;

  switch (type) {
    case 'primary':
      backgroundColor = '#1C3FA5';
      break;
    case 'danger':
      backgroundColor = '#D71E1E';
      break;
    default:
      backgroundColor = '#1C3FA5';
  }

  switch (size) {
    case 'large':
      width = '80%';
      break;
    case 'small':
      width = '20%';
      break;
    default:
      width = '80%';
  }

  return (
    <Button onPress={onPress} width={width} backgroundColor={backgroundColor}>
      <Title>{text}</Title>
    </Button>
  );
}
