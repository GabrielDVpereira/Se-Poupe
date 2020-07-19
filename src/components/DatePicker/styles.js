import styled from 'styled-components/native';

export const DatePickerContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: #e5e5e5;
  padding: 10px 15px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({ active }) => (active ? '#000' : '#c5c5c5')};
  font-family: 'Montserrat_500Medium';
`;
