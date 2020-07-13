import React from 'react';

import ModalAnimated from '../ModalAnimated';
import PriceRangeSelector from './PriceRangeSelector';
import Picker from '../../Picker';
import categories from '../../../utils/categories';
import Buttom from '../../Buttom';
import { Title } from './styles';
import DatePicker from '../../DatePicker';

const categoryNames = Object.keys(categories);

export default function({ visible, setVisible }) {
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Title>Filtrar</Title>
      <PriceRangeSelector />
      <Picker
        label="Categoria"
        items={categoryNames}
        onChange={item => console.log(item)}
      />
      <DatePicker onChange={date => {}} />
      <Buttom text="Aplicar" />
    </ModalAnimated>
  );
}
