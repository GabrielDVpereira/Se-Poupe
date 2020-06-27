import React, { useEffect, useState } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  Conatainer,
  Content,
  Title,
  Price,
  Category,
  Date,
  Name,
  Value,
  Drawer,
  DrawerLine,
} from './styles';
import Button from '../../Buttom';
import ConfirmationModal from '../ConfirmationModal';

const { height: screenHeight } = Dimensions.get('window');

const AnimatedContent = Animated.createAnimatedComponent(Content);
const top = new Animated.Value(screenHeight * 0.6);
const translationY = new Animated.Value(0);

export default function ItemModal({ item, visible, setVisible }) {
  const [containerStyle, SetContainerStyle] = useState();

  function getContainerStyle() {
    if (visible) {
      return {
        zIndex: 3,
        backgroundColor: 'rgba(0,0,0,0.3)',
      };
    }
    return {
      zIndex: 0,
      backgroundColor: '#fff',
    };
  }

  useEffect(() => {
    if (visible) {
      SetContainerStyle(getContainerStyle());
      Animated.spring(top, {
        toValue: screenHeight - screenHeight * 0.6,
      }).start();
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 200,
      }).start(() => {
        SetContainerStyle(getContainerStyle());
      });
    }
  }, [visible]);

  return (
    <>
      <Conatainer onPress={() => setVisible(false)} style={containerStyle}>
        <TouchableWithoutFeedback>
          <AnimatedContent
            style={{
              transform: [
                {
                  translateY: translationY.interpolate({
                    inputRange: [0, screenHeight - screenHeight * 0.6],
                    outputRange: [
                      screenHeight - screenHeight * 0.6,
                      screenHeight -
                        screenHeight * 0.6 +
                        screenHeight -
                        screenHeight * 0.6,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <PanGestureHandler
              onGestureEvent={Animated.event([
                {
                  nativeEvent: { translationY },
                },
              ])}
              // onGestureEvent={({ nativeEvent }) => console.log(nativeEvent)}
            >
              <Drawer>
                <DrawerLine />
              </Drawer>
            </PanGestureHandler>
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
          </AnimatedContent>
        </TouchableWithoutFeedback>
      </Conatainer>
    </>
  );
}
