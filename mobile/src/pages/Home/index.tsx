import React from 'react';

import {
  PageContainer,
  LogoBackground,
  Main,
  Title,
  Description,
  Footer,
  Button,
  ButtonText,
  ButtonIcon,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import homeBackground from '../../assets/home-background.png';

const imageBackgroundOptions = {
  height: 368,
  width: 274,
};

const HomePage: React.FC = () => {
  return (
    <PageContainer source={homeBackground} imageStyle={imageBackgroundOptions}>
      <Main>
        <LogoBackground source={logo} />
        <Title>Seu Marketplace de coleta de resíduos</Title>
        <Description>
          Ajusdamos pessoas a encontrarem pontos de coletas de forma eficiente.
        </Description>
      </Main>
      <Footer>
        <Button>
          <ButtonIcon>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </PageContainer>
  );
};

export default HomePage;
