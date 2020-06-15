import styled from 'styled-components';

export const Container = styled.View`
  height: 100px;
  border-width: 2px;
  border-radius: 20px;
  border-color: #ddd;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 10px 30px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ItemName = styled.Text`
  margin-left: 20px;
  font-family: 'Montserrat_500Medium';
  font-size: 20px;
`;
export const ItemPrice = styled.Text`
  margin-right: 20px;
  font-family: 'Montserrat_600SemiBold';
  font-size: 20px;
`;
