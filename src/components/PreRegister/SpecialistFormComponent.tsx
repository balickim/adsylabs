import { Form, Formik } from 'formik';
import tw from 'twin.macro';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { Input, LoadingCtaButton } from 'components/Common/styled';
import { usePreRegistrationStore } from 'store';
import { api } from 'utils/api';
import { preRegisterSpecialistSchema } from 'validation/preRegisterSchema';
import { ROLES } from '@prisma/client';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const StyledMain = tw.main`p-4 mt-8`;

export const SpecialistFormComponent = () => {
  const store = usePreRegistrationStore();
  const { push } = useRouter();
  const { user } = useUser();
  const { mutateAsync, error, isLoading } = api.profile.insertSpecialist.useMutation({
    onError: (e) => toast.error(`Wystąpił błąd ${e.message}`),
    retry: 3,
  });

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          linkedinUrl: '',
        }}
        validationSchema={toFormikValidationSchema(preRegisterSpecialistSchema)}
        onSubmit={async (values, { resetForm }) => {
          mutateAsync({
            name: values.name,
            linkedinUrl: values.linkedinUrl,
            role: ROLES.SPECIALIST,
            clerk_user_id: user?.id,
          }).then((profileId) => {
            store.setProfileId(profileId);
            resetForm();
            user?.id ? push('/dashboard/settings') : store.setStep(1);
          }).catch((reason) => console.error(reason));
        }}
      >
        {({
          touched,
          errors,
          getFieldProps,
        }) => (
          <Form>
            <div className="mt-3 grid gap-6 mb-6 lg:w-4/5">
              <Input
                label={'Imię'}
                labelClasses={'text-white sm:text-black'}
                inputClasses={'lg:!w-3/4'}
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
              isLoading={isLoading}
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