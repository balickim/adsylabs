import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';

import { usePreRegistrationStore } from 'store';
import { STATIC } from 'utils/constants/index';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { FormComponent } from 'components/PreRegister/FormComponent';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { Motion } from 'utils/helpers/framerMotion';

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

const Mobile = () => {
  const store = usePreRegistrationStore();

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
            <SignUpContainer><SignUp routing={'virtual'} redirectUrl={'./thank-you'}/></SignUpContainer>
          </Motion>
        </MobileSecondaryContainer>
      );
    default:
      return null;
  }

};

export default Mobile;