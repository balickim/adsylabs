import { Form, Formik } from 'formik';
import tw from 'twin.macro';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { Input, LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';
import { preRegisterSpecialistSchema } from 'validation/preRegisterSchema';
import { ROLES } from '@prisma/client';

const StyledMain = tw.main`p-4 mt-8`;

export const SpecialistFormComponent = () => {
  const store = usePreRegistrationStore();
  const { mutateAsync, error } = api.profile.insertSpecialist.useMutation();

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          linkedinUrl: '',
        }}
        validationSchema={toFormikValidationSchema(preRegisterSpecialistSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            name: values.name,
            linkedinUrl: values.linkedinUrl,
            role: ROLES.SPECIALIST,
          })
            .then((profileId) => {
              store.setProfileId(profileId);
              store.setStep(1);
            })
            .catch((reason) => console.error(reason))
            .finally(() => {
              resetForm();
              setSubmitting(false);
            });
        }}
      >
        {({
          touched,
          errors,
          getFieldProps,
          isSubmitting,
        }) => (
          <Form>
            <div className="mt-3 grid gap-6 mb-6">
              <Input
                label={'Imię'}
                labelClasses={'text-white sm:text-black'}
                error={(touched.name && errors.name) ? errors.name : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Link do Twojego profilu LinkedIn'}
                labelClasses={'text-white sm:text-black'}
                error={(touched.linkedinUrl && errors.linkedinUrl) ? errors.linkedinUrl : null}
                {...getFieldProps('linkedinUrl')}
              />
            </div>
            <LoadingCtaButton
              version={'primary'}
              type={'submit'}
              className={'!rounded-md !bg-white !text-primary sm:!bg-primary sm:!text-white'}
              isLoading={isSubmitting}
            >
              <p className={'sm:hidden'}>Dalej →</p>
              <p className={'hidden sm:block'}>Zapisz się</p>
            </LoadingCtaButton>
          </Form>
        )}
      </Formik>
      {!!error ?
        <div className={'w-72 mt-8 bg-red-400 rounded-xl p-2 text-white'}>
          Wystąpił błąd. Spróbuj ponownie.
        </div>
        : null
      }
    </StyledMain>
  );
};