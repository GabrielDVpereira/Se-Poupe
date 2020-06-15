import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  ItemName,
  ItemPrice,
  NameContainer,
  PriceContainer,
} from './styles';
import getFormatedValue from '../../utils/getFormatedValue';
import categories from '../../utils/categories';

export default function Card({ spend }) {
  const { Icon, IconName, IconColor, IconSize } = categories[spend.category];

  return (
    <Container>
      <NameContainer>
        <Icon name={IconName} color={IconColor} size={IconSize} />
        <ItemName>{spend.name}</ItemName>
      </NameContainer>
      <PriceContainer>
        <ItemPrice>{getFormatedValue(spend.price, 'money')}</ItemPrice>
        <Ionicons name="ios-arrow-forward" size={24} color="#919191" />
      </PriceContainer>
    </Container>
  );
}
