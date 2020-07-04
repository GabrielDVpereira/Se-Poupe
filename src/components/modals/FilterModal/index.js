import React from 'react';

import ModalAnimated from '../ModalAnimated';
import PriceRangeSelector from './PriceRangeSelector';

import { Title } from './styles';

export default function({ visible, setVisible }) {
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Title>Filtrar</Title>
      <PriceRangeSelector />
    </ModalAnimated>
  );
}
