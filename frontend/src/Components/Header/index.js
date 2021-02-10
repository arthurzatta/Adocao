import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#FD80A8', '#FCCE42'],
  useAngle: true,
  angle: 126,
  locations: [-17.8, 104.69],
  start: { x: 25, y: 50 },
  end: { x: 75, y: 50 },
})`
  flex: 1;
  padding:  0 30px;
  max-height: 180px;
  border-bottom-right-radius: 120px;
  justify-content: center;
`;
