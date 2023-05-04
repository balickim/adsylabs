import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import tw from 'twin.macro';

import { preRegisterUserSchema } from 'validation';
import { LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';

const StyledMain = tw.main`p-4 mt-8`;

export const FormComponent = () => {
  const store = usePreRegistrationStore();
  const { mutateAsync } = api.profile.insertUser.useMutation();

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          companyName: '',
          puuid: store.puuid,
        }}
        validationSchema={toFormikValidationSchema(preRegisterUserSchema)}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutateAsync({
            name: values.name,
            companyName: values.companyName,
            puuid: store.puuid,
          })
            .then(() => {
              store.setName(values.name);
              store.setCompanyName(values.companyName);
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
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white sm:text-black sm:text-base">
                  Imię
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 
                    ${touched.name && errors.name && 'border-2 border-red-600'}
                  `}
                  required
                  {...getFieldProps('name')}
                  disabled={isSubmitting}
                />
                <p className={'text-red-600 font-bold text-xs'}>
                  {touched.name && errors.name && 'Pole nie może być puste'}
                </p>
              </div>
              <div>
                <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-white sm:text-black sm:text-base">
                  Nazwa Twojej firmy
                </label>
                <input
                  type="text"
                  id="company_name"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 
                    ${touched.companyName && errors.companyName && 'border-2 border-red-600'}
                  `}
                  required
                  {...getFieldProps('companyName')}
                  disabled={isSubmitting}
                />
                <p className={'text-red-600 font-bold text-xs'}>
                  {touched.companyName && errors.companyName && 'Pole nie może być puste'}
                </p>
              </div>
            </div>
            <LoadingCtaButton
              version={'primary'}
              type={'submit'}
              className={'!rounded-md !bg-white !text-primary sm:hidden'}
              isLoading={isSubmitting}
            >
              Dalej →
            </LoadingCtaButton>
            <LoadingCtaButton
              version={'primary'}
              type={'submit'}
              className={'hidden !rounded-md sm:block'}
              isLoading={isSubmitting}
            >
              Zapisz się
            </LoadingCtaButton>
          </Form>
        )}
      </Formik>
    </StyledMain>
  );
};