import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 15px 10px;
  border-radius: 10px;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #fff;
  font-size: 16px;
`;
