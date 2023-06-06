import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import tw from 'twin.macro';
import { PAY_PLANS, ROLES } from '@prisma/client';
import { useRouter } from 'next/router';

import { preRegisterSchema } from 'validation/preRegisterSchema';
import { Input, LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';

const StyledMain = tw.main`p-4 mt-8`;

export const CustomerFormComponent = () => {
  const store = usePreRegistrationStore();
  const { mutateAsync, error } = api.profile.insertCustomer.useMutation();
  const { query } = useRouter();

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
            payPlan: query.payPlan as PAY_PLANS,
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
                labelClasses={'text-white sm:text-black'}
                error={(touched.name && errors.name) ? errors.name : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Nazwa Twojej firmy'}
                labelClasses={'text-white sm:text-black'}
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