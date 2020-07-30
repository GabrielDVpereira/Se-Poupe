import React from 'react';

import { Title, Price, Category, Date, Name, Value, Content } from './styles';
import Button from '../../Buttom';
import ModalAnimated from '../ModalAnimated';

export default function ItemModal({ product, visible, setVisible }) {
  console.log(product);
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Content>
        <Title>{product.name}</Title>
        <Price>
          <Name>Preço</Name>
          <Value>{product.price}</Value>
        </Price>
        <Category>
          <Name>Categoria</Name>
          <Value>{product.category}</Value>
        </Category>
        <Date>
          <Name>Data</Name>
          <Value>{product.date}</Value>
        </Date>
        <Button type="danger" text="Remover item" />
      </Content>
    </ModalAnimated>
  );
}
