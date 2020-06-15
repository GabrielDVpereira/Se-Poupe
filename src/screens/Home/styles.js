import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 10,
    paddingTop: 200,
  },
})`
  z-index: 1;
`;

export const NavigationIcon = styled.TouchableOpacity`
  margin-top: 40px;
  left: 20px;
  position: absolute;
  z-index: 3;
`;
export const FilterIcon = styled.TouchableOpacity`
  margin-top: 40px;
  right: 20px;
  position: absolute;
  z-index: 3;
`;

export const AppName = styled.Text`
  margin-top: 40px;
  font-size: 20px;
  color: #fff;
  font-family: 'Montserrat_600SemiBold';
  align-self: center;
  position: absolute;
  z-index: 3;
`;

export const NewItemButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  bottom: 20px;
  right: 15px;
`;
