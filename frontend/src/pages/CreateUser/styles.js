import styled from 'styled-components/native';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

export const Header = styled.View`
  padding: 0 30px;
  align-items: center;
  margin-top: 50px;
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 100px;
  padding: 0 16px;
  background-color: rgba(246, 246, 246, 1);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const FormInput = styled(Input)`
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
  align-self: center;
`;

export const TLabel = styled.Text`
  color: #4B4B4B;
  font-family: 'Roboto-Medium';
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 10px;
`;
