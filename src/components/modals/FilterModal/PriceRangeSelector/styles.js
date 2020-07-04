import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const PriceRangeNotSelected = styled.View`
  background-color: #ccc;
  height: 5px;
`;
export const PriceRangeSelected = styled.View`
  background-color: #1c3fa5;
  height: 5px;
  position: absolute;
`;

export const PriceRange = styled.View`
  position: absolute;
  top: 100px;
  width: ${SCREEN_WIDTH * 0.8}px;
  height: 5px;
  justify-content: center;
`;

export const PriceSelector = styled.View`
  height: 20px;
  width: 20px;
  background-color: #1c3fa5;
  position: absolute;
  border-radius: 20px;
`;
export const PriceRangeText = styled.Text`
  position: absolute;
  top: 20px;
  left: -5px;
`;
