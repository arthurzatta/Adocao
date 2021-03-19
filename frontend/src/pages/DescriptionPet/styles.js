import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

export const { height,width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  border-radius: 16px;
  background-color: rgba(246, 246, 246, 1);
  width: ${width-40}px;
  left: 20px;
  top: -35px;
  `

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -120px;
`;

export const IconButton = styled(FAB)`
  margin: 15px;
  background-color: rgba(246, 246, 246, 1);
`

export const StatusColumn = styled.View`
  flex-direction: column;
  margin-top: 20px;
`;

export const StatusRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TLabel = styled.Text`
  color: #4B4B4B;
  font-family: 'Roboto-Medium';
  align-self: flex-start;
  padding-left: 10px;
  padding-right: 5px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 80%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

export const UserImg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
`