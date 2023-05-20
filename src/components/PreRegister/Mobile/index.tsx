import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';

import { usePreRegistrationStore } from 'store';
import { LANDING_IMAGES_PATH } from 'utils/constants';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { SpecialistFormComponent } from 'components/PreRegister/SpecialistFormComponent';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { Motion } from 'utils/helpers/framerMotion';
import { UserFormComponent } from 'components/PreRegister/UserFormComponent';

const StyledImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  object-position: 25% 25%;
  margin-right: -10rem;
`;
const MobileMainContainer = tw.div`w-screen h-screen bg-primary relative overflow-hidden`;
const MobileSecondaryContainer = tw.div`w-screen h-screen bg-white relative`;
const SignUpContainer = tw.div`flex justify-center`;

interface IMobile {
  variant: 'user' | 'specialist'
}

const Mobile = ({ variant }: IMobile) => {
  const store = usePreRegistrationStore();

  switch (true) {
    case store.step === 0:
      return (
        <MobileMainContainer>
          <WelcomeIn subtitle={
            variant === 'user'
              ? 'i rozwinie marketing w Twoim Biznesie.'
              : 'poszukiwanie Klientów i zautomatyzuje Waszą współpracę.'
          } />
          {variant === 'user' ? <UserFormComponent /> : <SpecialistFormComponent />}
          <StyledImage
            src={LANDING_IMAGES_PATH.SHAPE_2}
            alt="shape"
            width={400}
            height={400}
          />
        </MobileMainContainer>
      );
    case store.step === 1:
      return (
        <MobileSecondaryContainer>
          <Motion>
            <JoinUs
              subtitle={
                variant === 'user'
                  ? '10% rabatu na pierwsze 2 miesiące subskrypcji AdsBridge.'
                  : '35% rabatu na pierwsze 3 miesiące subskrypcji AdsBridge.'
              } />
            <SignUpContainer>
              <SignUp
                routing={'virtual'}
                redirectUrl={variant === 'user' ? `./thank-you?puuid=${store.puuid}` : '/app'}
              />
            </SignUpContainer>
          </Motion>
        </MobileSecondaryContainer>
      );
    default:
      return null;
  }

};

export default Mobile;