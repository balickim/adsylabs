import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import tw from 'twin.macro';

import { preRegisterSchema } from 'validation';
import { Input, LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';
import { ROLES } from '@prisma/client';

const StyledMain = tw.main`p-4 mt-8`;

export const CustomerFormComponent = () => {
  const store = usePreRegistrationStore();
  const { mutateAsync, error } = api.profile.insertCustomer.useMutation();

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          companyName: '',
        }}
        validationSchema={toFormikValidationSchema(preRegisterSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            name: values.name,
            companyName: values.companyName,
            payPlan: store.payPlan,
            role: ROLES.CUSTOMER,
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
                error={(touched.name && errors.name) ? errors.name : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Nazwa Twojej firmy'}
                error={(touched.companyName && errors.companyName) ? errors.companyName : null}
                {...getFieldProps('companyName')}
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
            {!!error && JSON.stringify(error, null, 4)}
          </Form>
        )}
      </Formik>
    </StyledMain>
  );
};