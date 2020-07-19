import React from 'react';

import { Title, Price, Category, Date, Name, Value, Content } from './styles';
import Button from '../../Buttom';
import ModalAnimated from '../ModalAnimated';

export default function ItemModal({ item, visible, setVisible }) {
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Content>
        <Title>LG ultraGrear</Title>
        <Price>
          <Name>Preço</Name>
          <Value>R$ 720</Value>
        </Price>
        <Category>
          <Name>Categoria</Name>
          <Value>Eletronicos</Value>
        </Category>
        <Date>
          <Name>Data</Name>
          <Value>17/02/2020</Value>
        </Date>
        <Button type="danger" text="Remover item" />
      </Content>
    </ModalAnimated>
  );
}
