import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const Conatainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 3;
`;
export const Content = styled.View`
  width: 100%;
  height: ${screenHeight * 0.65}px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 70px 20px;
  position: absolute;
  z-index: 3;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 20px;
  margin-top: 20px;
`;

const detailsCss = css`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 0 0 30px 0;
`;

export const Price = styled.View`
  ${detailsCss}
  border-bottom-width: 1px;
  border-color: #ccc;
`;
export const Category = styled.View`
  ${detailsCss}
  border-bottom-width: 1px;
  border-color: #ccc;
`;
export const Date = styled.View`
  ${detailsCss}
  padding: 0px;
`;
export const Name = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 16px;
`;
export const Value = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 16px;
  color: #ccc;
`;

export const Drawer = styled.View`
  width: 100%;
  height: 40px;
  position: absolute;
  align-items: center;
`;
export const DrawerLine = styled.View`
  margin-top: 15px;
  height: 10%;
  width: 40%;
  background-color: #ccc;
  border-radius: 20px;
`;
