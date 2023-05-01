import { Form, Formik, validateYupSchema, yupToFormErrors } from 'formik';
import tw from 'twin.macro';

import { PreRegisterSchema } from 'validation/frontend';
import { CtaButton } from 'components/Common/styled';
import { useSpecialistsPreRegistrationStore } from 'store';

const StyledMain = tw.main`p-4 mt-8`;

export const FormComponent = () => {
  const store = useSpecialistsPreRegistrationStore();
  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          companyName: '',
        }}
        validate={values => {
          try {
            validateYupSchema(values, PreRegisterSchema, true, values);
          } catch (e) {
            return yupToFormErrors(e);
          }
          return {};
        }}
        onSubmit={() => {
          store.setStep(1);
        }}
      >
        {({
          touched,
          errors,
          getFieldProps,
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
                />
                <p className={'text-red-600 font-bold text-xs'}>
                  {touched.companyName && errors.companyName && 'Pole nie może być puste'}
                </p>
              </div>
            </div>
            <CtaButton
              version={'primary'}
              type={'submit'}
              className={'!rounded-md !bg-white !text-primary w-2/5 sm:hidden'}
            >
              Dalej →
            </CtaButton>
            <CtaButton
              version={'primary'}
              type={'submit'}
              className={'hidden !rounded-md w-28 sm:block'}
            >
              Zapisz się
            </CtaButton>
          </Form>
        )}
      </Formik>
    </StyledMain>
  );
};