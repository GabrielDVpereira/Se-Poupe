import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  PanGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {
  PriceRangeNotSelected,
  PriceRangeSelected,
  PriceRange,
  PriceSelector,
  PriceRangeText,
} from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PriceRangeSelectorAnimated = Animated.createAnimatedComponent(
  PriceSelector
);
const PriceRangeSelectedAnimated = Animated.createAnimatedComponent(
  PriceRangeSelected
);
const PriceRangeTextAnimated = Animated.createAnimatedComponent(PriceRangeText);

export default function PriceRangeSelector({ onChange }) {
  const [priceSelectorOffset, setPriceSelectorOffset] = useState(0);
  const [priceRangeValue, setpriceRangeValue] = useState(0);
  const translatePriceX = new Animated.Value(0);

  useEffect(() => {
    onChange(priceRangeValue);
  }, [priceRangeValue]);

  translatePriceX.addListener(progress => {
    setpriceRangeValue(Math.ceil(progress.value) * 16);
  });
  function handleStateChanged({ nativeEvent }) {
    translatePriceX.setValue(nativeEvent.x);
    setPriceSelectorOffset(nativeEvent.x);
  }
  return (
    <PriceRange>
      <PriceRangeTextAnimated
        style={{
          transform: [{ translateX: translatePriceX }],
        }}
      >
        {priceRangeValue}
      </PriceRangeTextAnimated>
      <TapGestureHandler onHandlerStateChange={handleStateChanged}>
        <PriceRangeNotSelected />
      </TapGestureHandler>
      <TapGestureHandler onHandlerStateChange={handleStateChanged}>
        <PriceRangeSelectedAnimated style={{ width: translatePriceX }} />
      </TapGestureHandler>
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
  );
}
