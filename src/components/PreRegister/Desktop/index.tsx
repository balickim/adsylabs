import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';
import styled from 'styled-components';
import Image from 'next/image';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { AboutUs } from 'components/PreRegister/AboutUs';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { usePreRegistrationStore } from 'store';
import { STATIC } from 'utils/constants/index';
import { SpecialistFormComponent } from 'components/PreRegister/SpecialistFormComponent';
import { UserFormComponent } from 'components/PreRegister/UserFormComponent';

const MainContainer = tw.div`w-screen h-screen overflow-hidden`;
const Container = tw.div`flex`;
const Left = tw.div`w-[45%] h-screen bg-primary overflow-hidden`;
const Right = tw.div`w-[55%] h-screen sm:pl-6 lg:pl-24 overflow-x-hidden`;
const SignUpContainer = tw.div`flex justify-center`;

const StyledTopImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const StyledBottomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  object-fit: cover;
  object-position: 25% 25%;
  margin-left: 30%;
`;

interface IDesktop {
  variant: 'user' | 'specialist'
}

const Desktop = ({ variant }: IDesktop) => {
  const store = usePreRegistrationStore();

  return (
    <MainContainer>
      <Container>
        <Left>
          <StyledTopImage
            src={STATIC.SHAPE_1}
            alt="shape"
            width={100}
            height={100}
          />
          <WelcomeIn subtitle={
            variant === 'user'
              ? 'i rozwinie marketing w Twoim Biznesie.'
              : 'poszukiwanie Klientów i zautomatyzuje Waszą współpracę.'
          } />
          <AboutUs />
          <StyledBottomImage
            src={STATIC.SHAPE_2}
            alt="shape"
            width={400}
            height={400}
          />
        </Left>
        <Right>
          <JoinUs
            subtitle={
              variant === 'user'
                ? '10% rabatu na pierwsze 2 miesiące subskrypcji AdsBridge.'
                : '35% rabatu na pierwsze 3 miesiące subskrypcji AdsBridge.'
            } />
          {store.step === 0
            ? <>{variant === 'user' ? <UserFormComponent /> : <SpecialistFormComponent />}</>
            : <SignUpContainer>
              <SignUp
                routing={'virtual'}
                redirectUrl={variant === 'user' ? `./thank-you?puuid=${store.puuid}` : '/app'}
              />
            </SignUpContainer>
          }
        </Right>
      </Container>
    </MainContainer>
  );
};

export default Desktop;