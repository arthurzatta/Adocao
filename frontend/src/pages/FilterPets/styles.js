import styled from 'styled-components/native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

export const SubmitButton = styled(Button)`
  margin: 30px 0px;
  align-self: center;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
`;

export const TLabel = styled.Text`
  color: #4B4B4B;
  font-family: 'Roboto-Medium';
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 10px;
`;

export const IconBox = styled.Pressable`
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  height: 84px;
  width: 84px;
  padding-top: 15px;
`;
