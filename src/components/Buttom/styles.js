import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px 5px;
`;
export const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  color: #fff;
  font-size: 16px;
`;
