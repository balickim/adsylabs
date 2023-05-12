import { Form, Formik } from 'formik';
import tw from 'twin.macro';

import { Input, LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';
import { preRegisterSpecialistSchema } from 'validation/preRegisterSchema';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const StyledMain = tw.main`p-4 mt-8`;

export const SpecialistFormComponent = () => {
  const store = usePreRegistrationStore();
  const { mutateAsync } = api.profile.insertSpecialist.useMutation();

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
          })
            .then(() => {
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
                error={(touched.name && errors.name) ? 'Pole nie może być puste' : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Link do Twojego profilu LinkedIn'}
                error={(touched.linkedinUrl && errors.linkedinUrl) ? 'Pole nie może być puste' : null}
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
    </StyledMain>
  );
};