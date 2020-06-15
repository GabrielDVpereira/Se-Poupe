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
export const TotalContainer = styled.View`
  flex-direction: column;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: #1c3fa5;

  flex-direction: row;
  justify-content: center;
  position: absolute;
  z-index: 2;
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
export const Title = styled.Text`
  margin-top: 40px;
  font-size: 20px;
  color: #fff;
  font-family: 'Montserrat_600SemiBold';
  align-self: center;
`;

export const Total = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: #002f60;
  background-color: #fff;
  padding: 10px 40px 10px 40px;
  border-radius: 10px;
  font-family: 'Montserrat_700Bold';
  align-self: center;
`;

export const SpendProgressBar = styled.View`
  margin-top: 15px;
`;

export const Available = styled.View`
  height: 3px;
  width: 200px;
  background-color: #26dd78;
`;
export const Unavailable = styled.View`
  height: 3px;
  width: 50px;
  background-color: #ff1313;
  position: absolute;
`;

export const Progress = styled.Text`
  margin-top: 10px;
  align-self: flex-end;
  font-family: 'Montserrat_500Medium';
  color: #fff;
`;
export const ContentTitle = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 20px;
`;

export const NewItemButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  bottom: 20px;
  right: 15px;
`;
