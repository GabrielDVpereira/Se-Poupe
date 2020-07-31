import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const modalMarginTop = SCREEN_HEIGHT * 0.15;
export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  width: 90%;
  background-color: #fff;
  align-items: center;
  margin-top: ${modalMarginTop}px;
  padding: 20px;
  border-radius: 30px;
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#c5c5c5',
})`
  width: 80%;

  background-color: #e5e5e5;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px 15px;
  font-family: 'Montserrat_500Medium';
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 18px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const PickerContainer = styled.View`
  margin-top: 20px;
  width: 80%;
`;
