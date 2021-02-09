import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  flex-direction: row;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#a4a4a4',
})`
  flex: 1;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #a4a4a4;
`;
