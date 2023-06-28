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
import { CustomerFormComponent } from 'components/PreRegister/CustomerFormComponent';
import { getRedirectUrl } from 'components/PreRegister/Desktop';
import { UserRoles } from 'root/types';

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
  variant: UserRoles
}

const Mobile = ({ variant }: IMobile) => {
  const store = usePreRegistrationStore();

  switch (true) {
    case store.step === 0:
      return (
        <MobileMainContainer>
          <WelcomeIn
            mobileText={variant === 'customer'
              ? <>
                Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy, <b>skorzystaj z
                wielkiego rabatu</b> na pierwsze 3 miesiące subskrypcji Adsylabs i <b>otrzymaj planer treści na Twoje social media za darmo</b>.
              </>
              : <>
                Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy i skorzystaj z
                <b> 35% rabatu na pierwsze 3 miesiące subskrypcji Adsylabs</b>.
              </>
            }
          />
          {variant === 'customer' ? <CustomerFormComponent /> : <SpecialistFormComponent />}
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
              mobileText={variant === 'customer'
                ? <>
                  Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy, <b>skorzystaj z
                  wielkiego rabatu</b> na pierwsze 3 miesiące subskrypcji Adsylabs i <b>otrzymaj planer treści na Twoje social media za darmo</b>.
                </>
                : <>
                  Wypełnij formularz, jako pierwszy dowiedz się o starcie platformy i skorzystaj z
                  <b> 35% rabatu na pierwsze 3 miesiące subskrypcji Adsylabs</b>.
                </>
              }
            />
            <SignUpContainer>
              <SignUp
                routing={'virtual'}
                redirectUrl={getRedirectUrl(variant, store.profileId)}
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