import React, { useEffect } from 'react';
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

export default function ItemModal({ item, visible, setVisible }) {
  useEffect(() => {
    if (visible) {
      Animated.spring(top, {
        toValue: screenHeight - screenHeight * 0.6,
      }).start();
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 200,
      }).start();
    }
  }, [visible]);

  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <Conatainer onPress={() => setVisible(false)}>
          <TouchableWithoutFeedback>
            <AnimatedContent style={{ top }}>
              <PanGestureHandler
                onGestureEvent={({ nativeEvent }) => console.log(nativeEvent)}
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
      </Modal>
    </>
  );
}
