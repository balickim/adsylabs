import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';

import { useSpecialistsPreRegistrationStore } from 'store';
import { STATIC } from 'constants/index';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { FormComponent } from 'components/PreRegister/FormComponent';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { Motion } from 'helpers/framerMotion';

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

const Mobile = () => {
  const store = useSpecialistsPreRegistrationStore();

  switch (true) {
    case store.step === 0:
      return (
        <MobileMainContainer>
          <WelcomeIn />
          <FormComponent />
          <StyledImage
            src={STATIC.SHAPE_2}
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
            <JoinUs />
            <SignUp redirectUrl={'./thank-you'}/>
          </Motion>
        </MobileSecondaryContainer>
      );
    default:
      return null;
  }

};

export default Mobile;