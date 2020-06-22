import React, { useEffect } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
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

const { height: screen_height } = Dimensions.get('window');

const AnimatedContent = Animated.createAnimatedComponent(Content);
const translateModalY = new Animated.Value(screen_height * 0.6);

export default function ItemModal({ item, visible, setVisible }) {
  useEffect(() => {
    if (visible) {
      Animated.spring(translateModalY, {
        toValue: 0,
      }).start();
    } else {
      Animated.timing(translateModalY, {
        toValue: screen_height * 0.6,
        duration: 200,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Conatainer onPress={() => setVisible(false)}>
        <TouchableWithoutFeedback>
          <AnimatedContent
            style={{ transform: [{ translateY: translateModalY }] }}
          >
            <Drawer>
              <DrawerLine />
            </Drawer>
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
  );
}
