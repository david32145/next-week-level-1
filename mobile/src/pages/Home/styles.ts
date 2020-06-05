import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const PageContainer = styled.ImageBackground`
  flex: 1;
  padding: 32px;
  background-color: #f0f0f5;
`;

export const LogoBackground = styled.Image``;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  max-width: 260px;
  margin-top: 16px;
  line-height: 24px;
`;

export const Footer = styled.View``;

export const Button = styled(RectButton)`
  background-color: #34cb79;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
