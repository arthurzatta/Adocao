import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

export const { height,width } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
  directionalLockEnabled: true,
})` 
  flex: 1;
  border-radius: 10px;
  background-color: rgba(246, 246, 246, 1);
  position: absolute;
  top: 90px;
  left: 20px;
  right: 20px;
  width: ${width-40}px;
`
export const Form = styled.View`
  margin: 20px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 3px; 
  
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