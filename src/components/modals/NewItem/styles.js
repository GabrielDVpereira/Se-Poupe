import styled from 'styled-components';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
`;

export const ModalContent = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  background-color: #fff;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  border-radius: 30px;
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#c5c5c5',
})`
  width: 250px;
  background-color: #e5e5e5;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px 15px;
  font-family: 'Montserrat_500Medium';
`;

export const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 18px;
`;
