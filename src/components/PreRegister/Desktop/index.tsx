import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';
import styled from 'styled-components';
import Image from 'next/image';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { AboutUs } from 'components/PreRegister/AboutUs';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { usePreRegistrationStore } from 'store';
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

export function getRedirectUrl (variant: IDesktop['variant'], profileId: string) {
  if (variant === 'customer') return `/acc/clerk?profileId=${profileId}&redirectUrl=/thank-you`;
  if (variant === 'specialist') return `/acc/clerk?profileId=${profileId}&redirectUrl=/dashboard/settings`;
  return '/';
}

const Desktop = ({ variant }: IDesktop) => {
  const store = usePreRegistrationStore();

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
          <WelcomeIn
            desktopText={variant === 'customer'
              ? <>
                Nasza platforma jest wciąż w fazie rozwoju i testów. Cały nasz zespół ciężko pracuje,
                aby dostarczyć produkt, który przyspieszy i rozwinie marketing w Twoim Biznesie.
              </>
              : <>
                Nasza platforma jest wciąż w fazie rozwoju i testów. Cały nasz zespół ciężko pracuje,
                aby dostarczyć produkt, który przyspieszy poszukiwanie Klientów i zautomatyzuje Waszą współpracę.
              </>
            }
          />
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
            desktopText={variant === 'customer'
              ? <>
                Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy,
                <b> skorzystaj z wielkiego rabatu</b> na pierwsze 3 miesiące subskrypcji AdsBridge
                i <b>otrzymaj planer treści na Twoje social media za darmo</b>.
              </>
              : <>
                Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy
                i skorzystaj z <b>35% rabatu na pierwsze 3 miesiące subskrypcji AdsBridge</b>.
              </>
            }
          />
          {store.step === 0
            ? <>{variant === 'customer' ? <CustomerFormComponent /> : <SpecialistFormComponent />}</>
            : <SignUpContainer>
              <SignUp
                routing={'virtual'}
                redirectUrl={getRedirectUrl(variant, store.profileId)}
              />
            </SignUpContainer>
          }
        </Right>
      </Container>
    </MainContainer>
  );
};

export default Desktop;