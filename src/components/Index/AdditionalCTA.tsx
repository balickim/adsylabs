import styled from 'styled-components';
import tw from 'twin.macro';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Form, Formik } from 'formik';

import { LoadingCtaButton } from 'components/Common/styled';
import { api } from 'utils/api';
import { preRegisterSchema } from 'validation/preRegisterSchema';
import toast from 'react-hot-toast';

const StyledSection = styled.section`
  ${tw`flex relative w-5/6 mx-auto flex-col items-center mb-32`}
  padding: 40px 0px;
  gap: 13px;
  border-radius: 16px;
  background: var(--gradient-brand, linear-gradient(322deg, #6966FF 0%, rgba(105, 102, 255, 0.36) 100%));

  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
`;

const StyledInput = styled.input`
    ${tw`p-4 lg:w-96`}
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.10);
  `;

const StyledLoadingCtaButton = styled(LoadingCtaButton)`
    ${tw`p-4 text-black w-full lg:w-auto`}
    border-radius: 6px;
    background: white;
  
  span {
    justify-content: center;
  }
  `;

const AdditionalCTA = () => {
  const { mutateAsync } = api.profile.insertCustomer.useMutation({ retry: 5 });

  return (
    <StyledSection id={'hero'}>

      <span className={'flex justify-center text-white text-base lg:text-xl'}>Dołącz do nas!</span>
      <span className={'flex flex-col items-center justify-center text-white w-4/5 text-center font-bold lg:text-4xl'}>
        <p>Znajdź, zatrudnij i zarządzaj</p>
        <p>doświadczonymi specjalistami reklamy.</p>
      </span>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={toFormikValidationSchema(preRegisterSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            email: values.email,
          })
            .then(() => {
              toast(`Pomyślnie zapisano adres e-mail ${values.email}`, { duration: 6000, icon: '👏' });
              resetForm();
            })
            .catch((reason) => console.error(reason))
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          getFieldProps,
          isSubmitting,
        }) => (
          <Form>
            <div className={'w-full flex flex-col gap-5 justify-center items-center lg:flex-row'}>
              <StyledInput
                id={'input'}
                type={'email'}
                placeholder={'Twój e-mail'}
                {...getFieldProps('email')}
              />
              <StyledLoadingCtaButton
                version={'primary'}
                type={'submit'}
                isLoading={isSubmitting}
                placeholder={'Adres e-mail'}
              >
                Poproś o dostęp
              </StyledLoadingCtaButton>
            </div>
          </Form>
        )}
      </Formik>

    </StyledSection>
  );
};

export default AdditionalCTA;
