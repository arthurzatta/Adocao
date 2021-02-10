import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 30px;
  align-items: center;
  flex: 1;
`;

export const BoxNotification = styled.TouchableOpacity`
margin-top: 10px;
  width: 364px;
  height: 85px;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`;

export const TitleNotification = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 18;
  color: #4B4B4B;
  margin-left: 30px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14;
  color: #A4A4A4;
  margin-left: 30px;
`;


