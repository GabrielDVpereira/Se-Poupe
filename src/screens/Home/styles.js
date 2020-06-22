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
  showsVerticalScrollIndicator: false,
})`
  z-index: 1;
`;

export const NewItemButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  bottom: 20px;
  right: 15px;
`;
