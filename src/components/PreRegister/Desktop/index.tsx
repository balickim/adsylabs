import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';
import styled from 'styled-components';
import Image from 'next/image';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { AboutUs } from 'components/PreRegister/AboutUs';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { useLocalStorageStore, usePreRegistrationStore } from 'store';
import { LANDING_IMAGES_PATH } from 'utils/constants';
import { SpecialistFormComponent } from 'components/PreRegister/SpecialistFormComponent';
import { CustomerFormComponent } from 'components/PreRegister/CustomerFormComponent';
import { UserRoles } from 'root/types';

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
  variant: UserRoles
}

export function getRedirectUrl (variant: IDesktop['variant'], profileId: string, setWasOnboarded: (value: boolean) => void) {
  setWasOnboarded(true);
  if (variant === 'customer') return `/acc/clerk?profileId=${profileId}&redirectUrl=/thank-you`;
  if (variant === 'specialist') return `/acc/clerk?profileId=${profileId}&redirectUrl=/dashboard`;
  return '/';
}

const Desktop = ({ variant }: IDesktop) => {
  const store = usePreRegistrationStore();
  const { setWasOnboarded } = useLocalStorageStore();

  return (
    <MainContainer>
      <Container>
        <Left>
          <StyledTopImage
            src={LANDING_IMAGES_PATH.SHAPE_1}
            alt="shape"
            width={100}
            height={100}
          />
          <WelcomeIn subtitle={
            variant === 'customer'
              ? 'i rozwinie marketing w Twoim Biznesie.'
              : 'poszukiwanie Klientów i zautomatyzuje Waszą współpracę.'
          } />
          <AboutUs />
          <StyledBottomImage
            src={LANDING_IMAGES_PATH.SHAPE_2}
            alt="shape"
            width={400}
            height={400}
          />
        </Left>
        <Right>
          <JoinUs
            subtitle={
              variant === 'customer'
                ? '10% rabatu na pierwsze 2 miesiące subskrypcji AdsBridge.'
                : '35% rabatu na pierwsze 3 miesiące subskrypcji AdsBridge.'
            } />
          {store.step === 0
            ? <>{variant === 'customer' ? <CustomerFormComponent /> : <SpecialistFormComponent />}</>
            : <SignUpContainer>
              <SignUp
                routing={'virtual'}
                redirectUrl={getRedirectUrl(variant, store.profileId, setWasOnboarded)}
              />
            </SignUpContainer>
          }
        </Right>
      </Container>
    </MainContainer>
  );
};

export default Desktop;