import * as Yup from 'yup';

export const PreRegisterSchema = Yup.object().shape({
  name: Yup.string().required('error.field.required'),
  companyName: Yup.string().required('error.field.required'),
});
