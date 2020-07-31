import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('screen');

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.View`
  background-color: #fff;
  margin-top: ${screenHeight * 0.3}px;
  padding: 30px 20px;
  border-radius: 20px;
  margin-horizontal: 20px;
`;

export const ModalMessage = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 22px;
  text-align: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-self: center;
  width: 220px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  padding: 15px 30px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: #fff;
  font-size: 18px;
`;
