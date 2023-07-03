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
  const { mutateAsync, error } = api.profile.insertCustomer.useMutation({ retry: 5 });
  const { query, push } = useRouter();

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={toFormikValidationSchema(preRegisterSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            name: values.name,
            email: values.email,
            payPlan: query.payPlan as PAY_PLANS,
            role: ROLES.CUSTOMER,
          })
            .then((profileId) => {
              store.setProfileId(profileId);
              resetForm();
              push('./thank-you');
            })
            .catch((reason) => console.error(reason))
            .finally(() => {
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
            <div className="mt-3 grid gap-6 mb-6 lg:w-4/5">
              <Input
                label={'Imię'}
                labelClasses={'text-white sm:text-black'}
                error={(touched.name && errors.name) ? errors.name : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Email'}
                labelClasses={'text-white sm:text-black'}
                error={(touched.email && errors.email) ? errors.email : null}
                type={'email'}
                {...getFieldProps('email')}
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