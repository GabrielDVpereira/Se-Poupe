import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  background-color: #e5e5e5;
  padding: 10px 15px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: ${({ active }) => (active ? '#000' : '#c5c5c5')};
  font-family: 'Montserrat_500Medium';
`;

export const ModalContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  align-self: center;
  z-index: 2;
`;
export const ModalContent = styled.View`
  background-color: #fff;
  width: 60%;
`;
export const ModalItems = styled.ScrollView.attrs({
  contentContainerStyle: {
    margin: 30,
  },
})``;
export const ModalItemText = styled.Text`
  font-family: 'Montserrat_500Medium';
  margin-bottom: 20px;
`;
export const ModalItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;
