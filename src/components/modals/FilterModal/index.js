import React from 'react';

import ModalAnimated from '../ModalAnimated';
import PriceRangeSelector from './PriceRangeSelector';
import Picker from '../../Picker';
import categories from '../../../utils/categories';
import Buttom from '../../Buttom';
import { Title, Container, Form } from './styles';
import DatePicker from '../../DatePicker';

const categoryNames = Object.keys(categories);

export default function({ visible, setVisible }) {
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Container>
        <Title>Filtrar</Title>
        <PriceRangeSelector />
        <Form>
          <Picker
            label="Categoria"
            items={categoryNames}
            onChange={item => console.log(item)}
          />
          <DatePicker onChange={date => {}} />
        </Form>
        <Buttom text="Aplicar" />
      </Container>
    </ModalAnimated>
  );
}
