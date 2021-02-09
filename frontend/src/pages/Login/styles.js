import styled from 'styled-components/native';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

export const Container = styled.View`
  padding: 0 30px;
  align-items: center;
  margin-top: 100px;
  flex: 1;
`;

export const Form = styled.View`
  padding: 0 10px;
  background-color: rgba(246, 246, 246, 1);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  justify-content: space-around;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
  align-self: center;
`;

export const SignLink = styled.TouchableOpacity`
`;

export const SignLinkText = styled.Text`
  color: #a4a4a4;
  padding-right: 20px;
  font-weight: bold;
  align-self: flex-end;
  font-size: 14px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const TLabel = styled.Text`
  color: #4B4B4B;
  font-family: 'Roboto-Medium';
  align-self: flex-start;
  margin-top: 40px;
  margin-left: 10px;
`;
