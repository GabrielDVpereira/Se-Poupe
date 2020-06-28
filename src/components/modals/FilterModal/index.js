import React, { useState } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Animated, Dimensions, Text } from 'react-native';
import ModalAnimated from '../ModalAnimated';
import {
  Title,
  PriceRangeNotSelected,
  PriceRangeSelected,
  PriceRange,
  PriceSelector,
} from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PriceRangeSelectorAnimated = Animated.createAnimatedComponent(
  PriceSelector
);
const PriceRangeSelectedAnimated = Animated.createAnimatedComponent(
  PriceRangeSelected
);
export default function({ visible, setVisible }) {
  const [priceSelectorOffset, setPriceSelectorOffset] = useState(0);
  const [priceRangeValue, setPriceRangeValue] = useState(0);

  const translatePriceX = new Animated.Value(0);
  translatePriceX.addListener(progress => {
    setPriceRangeValue(progress.value);
  });
  return (
    <ModalAnimated visible={visible} setVisible={setVisible}>
      <Title>Filtrar</Title>
      <Animated.Text>{priceRangeValue}</Animated.Text>
      <PriceRange>
        <PriceRangeNotSelected />
        <PriceRangeSelectedAnimated style={{ width: translatePriceX }} />
        <PanGestureHandler
          onGestureEvent={({ nativeEvent }) => {
            if (
              nativeEvent.absoluteX >=
                SCREEN_WIDTH - (SCREEN_WIDTH - SCREEN_WIDTH * 0.1) &&
              nativeEvent.absoluteX <= SCREEN_WIDTH - SCREEN_WIDTH * 0.1
            ) {
              translatePriceX.setValue(
                priceSelectorOffset + nativeEvent.translationX
              );
            }
          }}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.END) {
              setPriceSelectorOffset(
                priceSelectorOffset + nativeEvent.translationX
              );
            }
          }}
        >
          <PriceRangeSelectorAnimated
            style={{ transform: [{ translateX: translatePriceX }] }}
          />
        </PanGestureHandler>
      </PriceRange>
    </ModalAnimated>
  );
}