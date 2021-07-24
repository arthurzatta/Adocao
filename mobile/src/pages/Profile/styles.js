import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 30px;
  align-items: center;
  flex: 1;
`;

export const Img = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50;
  margin-right: 20px;
`

export const Box = styled.TouchableOpacity`
  margin-top: 10px;
  width: 364px;
  height: 100px;
  background: #fff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`;

export const SmallBox = styled.TouchableOpacity`
  margin-top: 10px;
  width: 50%;
  height: 100px;
  background: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin-left: 12px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;