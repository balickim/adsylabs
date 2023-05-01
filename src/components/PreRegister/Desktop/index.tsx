import tw from 'twin.macro';
import { SignUp } from '@clerk/nextjs';
import styled from 'styled-components';
import Image from 'next/image';

import { WelcomeIn } from 'components/PreRegister/WelcomeIn';
import { AboutUs } from 'components/PreRegister/AboutUs';
import { JoinUs } from 'components/PreRegister/JoinUs';
import { FormComponent } from 'components/PreRegister/FormComponent';
import { useSpecialistsPreRegistrationStore } from 'store';
import { Motion } from 'helpers/framerMotion';
import { STATIC } from 'constants/index';

const MainContainer = tw.div`w-screen h-screen overflow-hidden`;
const Container = tw.div`flex`;
const Left = tw.div`w-[45%] h-screen bg-primary overflow-hidden`;
const Right = tw.div`w-[55%] h-screen sm:pl-6 lg:pl-24`;
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

const Desktop = () => {
  const store = useSpecialistsPreRegistrationStore();

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
          <WelcomeIn />
          <AboutUs />
          <StyledBottomImage
            src={STATIC.SHAPE_2}
            alt="shape"
            width={400}
            height={400}
          />
        </Left>
        <Right>
          <JoinUs />
          {store.step === 0
            ? <FormComponent />
            : <Motion><SignUpContainer><SignUp redirectUrl={'./thank-you'}/></SignUpContainer></Motion>
          }
        </Right>
      </Container>
    </MainContainer>
  );
};

export default Desktop;