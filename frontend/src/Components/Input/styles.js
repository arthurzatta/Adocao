import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  align-items: center;
  flex-direction: row;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(164, 164, 164, 1)',
})`
  flex: 1;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 10px;
  margin-right: 10px;
  height: 47px;
  align-self: stretch;
`;
