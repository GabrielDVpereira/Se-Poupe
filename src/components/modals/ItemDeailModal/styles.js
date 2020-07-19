import styled, { css } from 'styled-components/native';

export const Content = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
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
