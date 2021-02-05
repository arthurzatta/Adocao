import styled from 'styled-components/native';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  background-color: rgba(246, 246, 246, 1);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  align-items: center;
`;

export const FormInput = styled(Input)`
  margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
