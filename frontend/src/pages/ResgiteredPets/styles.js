import styled from 'styled-components';

export const TitleNotification = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 25;
  color: #4B4B4B;
  margin-left: 30px;
  margin-top: 5px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 16px;
  background-color: rgba(246, 246, 246, 1);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const Header = styled.View`
  padding: 0 30px;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-width: 1;
  border-radius: 50px;
`