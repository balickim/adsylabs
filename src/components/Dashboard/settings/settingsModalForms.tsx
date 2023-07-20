import { Form, Formik } from 'formik';
import tw from 'twin.macro';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import React, { Dispatch, SetStateAction } from 'react';
import { UploadDropzone } from '@uploadthing/react';
import { useIntl } from 'react-intl';
import { tagsindustry, tagslanguage, tagsplatform, tagsspecialization } from '.prisma/client';
import { AiOutlineFilePdf } from 'react-icons/ai';
import CreatableSelect from 'react-select/creatable';

import { CtaButton, Input, LoadingCtaButton, Textarea } from 'components/Common/styled';
import { api } from 'utils/api';
import { OurFileRouter } from 'server/uploadthing';
import { openLink } from 'utils/helpers';
import {
  specialistDescriptionSchema, specialistFormTagsSchema,
  specialistNameSurnameSchema,
  specialistTitleSchema,
} from 'validation/SettingsSchema';

const StyledMain = tw.main`p-4 mt-8`;

interface IFooter {
  setShow: Dispatch<SetStateAction<boolean>>
  isSubmitting: boolean
}

function Footer ({ setShow, isSubmitting }: IFooter) {
  return (
    <div className="flex items-center justify-end gap-2 p-3 border-t border-solid border-slate-200 rounded-b">
      <CtaButton
        version={'secondary'}
        type="button"
        onClick={() => setShow(false)}
        className={'w-24'}
      >
        Zamknij
      </CtaButton>
      <LoadingCtaButton
        version={'primary'}
        isLoading={isSubmitting}
        type="submit"
        className={'w-40 flex justify-center'}
      >
        Zapisz
      </LoadingCtaButton>
    </div>
  );
}

interface INameSurnameForm {
  setShow: Dispatch<SetStateAction<boolean>>
  refetch: () => void
}

export function NameSurnameForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync, error } = api.profile.updateSpecialistNameSurname.useMutation({ retry: 5 });

  return (
    <StyledMain>
      <Formik
        initialValues={{
          name: '',
          surname: '',
        }}
        validationSchema={toFormikValidationSchema(specialistNameSurnameSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            name: values.name,
            surname: values.surname,
          })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
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

            <div className="grid gap-6 mb-6">
              <Input
                label={'Imię'}
                placeholder={'Imię'}
                error={(touched.name && errors.name) ? errors.name : null}
                {...getFieldProps('name')}
              />
              <Input
                label={'Nazwisko'}
                placeholder={'Nazwisko'}
                error={(touched.surname && errors.surname) ? errors.surname : null}
                {...getFieldProps('surname')}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}

export function TitleForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync, error } = api.profile.updateSpecialistTitle.useMutation({ retry: 5 });

  return (
    <StyledMain>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={toFormikValidationSchema(specialistTitleSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            title: values.title,
          })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
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

            <div className="grid gap-6 mb-6">
              <Input
                label={'Tytuł'}
                placeholder={'Tytuł'}
                error={(touched.title && errors.title) ? errors.title : null}
                {...getFieldProps('title')}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}

export function DescriptionForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync, error } = api.profile.updateSpecialistDescription.useMutation({ retry: 5 });

  return (
    <StyledMain>
      <Formik
        initialValues={{ description: '' }}
        validationSchema={toFormikValidationSchema(specialistDescriptionSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutateAsync({
            description: values.description,
          })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
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

            <div className="grid gap-6 mb-6">
              <Textarea
                label={'Opis'}
                placeholder={'Opis'}
                error={(touched.description && errors.description) ? errors.description : null}
                {...getFieldProps('description')}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />

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
}

export function ProfileImageForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync } = api.profile.updateProfileImage.useMutation({ retry: 5 });

  return (
    <UploadDropzone<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={async (res) => {
        return mutateAsync({
          image_url: res![0]!.fileUrl,
        }).then(() => {
          refetch();
          setShow(false);
        });
      }}
      onUploadError={(error: Error) => {
        console.error(error);
      }}
    />
  );
}

export function BackgroundImageForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync } = api.profile.updateBackgroundImage.useMutation({ retry: 5 });

  return (
    <UploadDropzone<OurFileRouter>
      endpoint="imageUploader"
      onClientUploadComplete={async (res) => {
        return mutateAsync({
          background_image_url: res![0]!.fileUrl,
        }).then(() => {
          refetch();
          setShow(false);
        });
      }}
      onUploadError={(error: Error) => {
        console.error(error);
      }}
    />
  );
}

export function CaseStudiesForm ({ setShow, refetch }: INameSurnameForm) {
  const { mutateAsync } = api.profile.updateCaseStudies.useMutation({ retry: 5 });
  const { data } = api.profile.getProfile.useQuery({ id: undefined });

  return (
    <div className={'p-2'}>
      Zamieszczono: {data && data.profile_specialist?.case_studies_urls.length}
      {data && data.profile_specialist?.case_studies_urls.length
        ? <><ul>
          {data.profile_specialist?.case_studies_urls.map((e, i) =>
            <li key={i} className={'inline items-center'}>
              <button onClick={() => openLink(e)}>
                <AiOutlineFilePdf size={48} />
              </button>
            </li>
          )}
        </ul>
        <p>Uwaga! Nowe pliki nadpiszą stare!</p>
        </>
        : null
      }
      <UploadDropzone<OurFileRouter>
        endpoint="multipleFileUploader"
        onClientUploadComplete={async (res) => {
          if (res) {
            const items = res.map((e) => {
              return e.fileUrl;
            });
            return mutateAsync({
              case_studies_urls: items,
            }).then(() => {
              refetch();
              setShow(false);
            });
          }
        }}
        onUploadError={(error: Error) => {
          console.error(error);
        }}
      />
    </div>
  );
};

interface ITagsSpecializationsForm {
  setShow: Dispatch<SetStateAction<boolean>>
  refetch: () => void
  selectedTags: { tagsspecialization: tagsspecialization }[]
  customTags: string[]
}

export function TagsSpecializationsForm ({ setShow, refetch, selectedTags, customTags }: ITagsSpecializationsForm) {
  const { mutateAsync, error } = api.profile.updateTagsSpecializations.useMutation({ retry: 5 });
  const { data } = api.profile.getTagsSpecializations.useQuery();
  const { mutate: mutateCustomTags } = api.profile.updateSpecialistCustomTagSpecialization.useMutation({ retry: 5 });
  const { formatMessage: t } = useIntl();

  const selectedOptions = selectedTags.map(obj => obj.tagsspecialization);
  // @ts-ignore
  customTags.forEach((e) => selectedOptions.push({ id: '', value: e, name: e, __isNew__: true }));
  const TOP_OPTIONS = [
    'digital_marketing',
    'content_marketing',
    'social_media_marketing',
    'brand_management',
    'search_engine_optimization',
    'b2b_marketing',
    'email_marketing',
  ];
  const sortedData = data && data.sort((a, b) => {
    const aIndex = TOP_OPTIONS.indexOf(a.name);
    const bIndex = TOP_OPTIONS.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex; // Sort by top options index
    } else if (aIndex !== -1) {
      return -1; // a is a top option, so it comes first
    } else if (bIndex !== -1) {
      return 1; // b is a top option, so it comes first
    }

    return a.name.localeCompare(b.name); // Sort alphabetically
  });

  return (
    <StyledMain>
      <Formik
        initialValues={{ tagIds: selectedOptions }}
        validationSchema={toFormikValidationSchema(specialistFormTagsSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const customTagNames = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (item.__isNew__) return item.name;
            return [];
          });
          const tagIds = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (!item.__isNew__) return item.id;
            return [];
          });

          mutateCustomTags({ tagNames: customTagNames as unknown as string[] });
          mutateAsync({ tagIds: tagIds as unknown as string[] })
          .then(() => {
            resetForm();
            refetch();
            setShow(false);
          })
          .finally(() => {
            setSubmitting(false);
          });
        }}
      >
        {({
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>

            <div className="grid gap-6 mb-6">
              <CreatableSelect
                isMulti
                options={sortedData}
                defaultValue={selectedOptions}
                getOptionLabel={(option) => {
                  // @ts-ignore
                  if (option.__isNew__) return option.value;
                  return t({ id: `dashboard.settings.specialization.${option.name}` });
                }}
                getOptionValue={(option) => option.name}
                onChange={selectedOptions => {
                  const newestElement = selectedOptions[selectedOptions.length - 1];
                  // @ts-ignore
                  if (newestElement && newestElement.__isNew__) {
                    // @ts-ignore
                    selectedOptions.pop();
                    // @ts-ignore
                    selectedOptions.push({ ...newestElement, id: '', name: newestElement.value });
                  }
                  setFieldValue('tagIds', selectedOptions.map((item) => item));
                }}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}

interface ITagsLanguagesForm {
  setShow: Dispatch<SetStateAction<boolean>>
  refetch: () => void
  selectedTags: { tagslanguage: tagslanguage }[]
  customTags: string[]
}

export function TagsLanguagesForm ({ setShow, refetch, selectedTags, customTags }: ITagsLanguagesForm) {
  const { mutateAsync, error } = api.profile.updateTagsLanguages.useMutation({ retry: 5 });
  const { mutate: mutateCustomTags } = api.profile.updateSpecialistCustomTagLanguage.useMutation({ retry: 5 });
  const { data } = api.profile.getTagsLanguages.useQuery();
  const { formatMessage: t } = useIntl();

  const selectedOptions = selectedTags.map(obj => obj.tagslanguage);
  // @ts-ignore
  customTags.forEach((e) => selectedOptions.push({ id: '', value: e, name: e, __isNew__: true }));
  const TOP_OPTIONS = [
    'polish',
    'german',
    'french',
    'italian',
    'spanish',
    'english',
  ];
  const sortedData = data && data.sort((a, b) => {
    const aIndex = TOP_OPTIONS.indexOf(a.name);
    const bIndex = TOP_OPTIONS.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex; // Sort by top options index
    } else if (aIndex !== -1) {
      return -1; // a is a top option, so it comes first
    } else if (bIndex !== -1) {
      return 1; // b is a top option, so it comes first
    }

    return a.name.localeCompare(b.name); // Sort alphabetically
  });

  return (
    <StyledMain>
      <Formik
        initialValues={{ tagIds: selectedOptions }}
        validationSchema={toFormikValidationSchema(specialistFormTagsSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const customTagNames = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (item.__isNew__) return item.name;
            return [];
          });
          const tagIds = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (!item.__isNew__) return item.id;
            return [];
          });

          mutateCustomTags({ tagNames: customTagNames as unknown as string[] });
          mutateAsync({ tagIds: tagIds as unknown as string[] })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>

            <div className="grid gap-6 mb-6">
              <CreatableSelect
                isMulti
                options={sortedData}
                defaultValue={selectedOptions}
                getOptionLabel={(option) => {
                  // @ts-ignore
                  if (option.__isNew__) return option.value;
                  return t({ id: `dashboard.settings.language.${option.name}` });
                }}                getOptionValue={(option) => option.name}
                onChange={selectedOptions => {
                  const newestElement = selectedOptions[selectedOptions.length - 1];
                  // @ts-ignore
                  if (newestElement && newestElement.__isNew__) {
                    // @ts-ignore
                    selectedOptions.pop();
                    // @ts-ignore
                    selectedOptions.push({ ...newestElement, id: '', name: newestElement.value });
                  }
                  setFieldValue('tagIds', selectedOptions.map((item) => item));
                }}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}

interface ITagsIndustriesForm {
  setShow: Dispatch<SetStateAction<boolean>>
  refetch: () => void
  selectedTags: { tagsindustry: tagsindustry }[]
  customTags: string[]
}

export function TagsIndustriesForm ({ setShow, refetch, selectedTags, customTags }: ITagsIndustriesForm) {
  const { mutateAsync, error } = api.profile.updateTagsIndustries.useMutation({ retry: 5 });
  const { mutate: mutateCustomTags } = api.profile.updateSpecialistCustomTagIndustry.useMutation({ retry: 5 });
  const { data } = api.profile.getTagsIndustries.useQuery();
  const { formatMessage: t } = useIntl();

  const selectedOptions = selectedTags.map(obj => obj.tagsindustry);
  // @ts-ignore
  customTags.forEach((e) => selectedOptions.push({ id: '', value: e, name: e, __isNew__: true }));
  const TOP_OPTIONS = [
    'e-commerce_and_electronic_commerce',
    'fashion_and_clothing',
    'real_estate_and_property_development',
    'heavy_industry_and_manufacturing',
    'logistics_and_distribution_services',
  ];
  const sortedData = data && data.sort((a, b) => {
    const aIndex = TOP_OPTIONS.indexOf(a.name);
    const bIndex = TOP_OPTIONS.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex; // Sort by top options index
    } else if (aIndex !== -1) {
      return -1; // a is a top option, so it comes first
    } else if (bIndex !== -1) {
      return 1; // b is a top option, so it comes first
    }

    return a.name.localeCompare(b.name); // Sort alphabetically
  });

  return (
    <StyledMain>
      <Formik
        initialValues={{ tagIds: selectedOptions }}
        validationSchema={toFormikValidationSchema(specialistFormTagsSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const customTagNames = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (item.__isNew__) return item.name;
            return [];
          });
          const tagIds = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (!item.__isNew__) return item.id;
            return [];
          });

          mutateCustomTags({ tagNames: customTagNames as unknown as string[] });
          mutateAsync({ tagIds: tagIds as unknown as string[] })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>

            <div className="grid gap-6 mb-6">
              <CreatableSelect
                isMulti
                options={sortedData}
                defaultValue={selectedOptions}
                getOptionLabel={(option) => {
                  // @ts-ignore
                  if (option.__isNew__) return option.value;
                  return t({ id: `dashboard.settings.industry.${option.name}` });
                }}
                getOptionValue={(option) => option.name}
                onChange={selectedOptions => {
                  const newestElement = selectedOptions[selectedOptions.length - 1];
                  // @ts-ignore
                  if (newestElement && newestElement.__isNew__) {
                    // @ts-ignore
                    selectedOptions.pop();
                    // @ts-ignore
                    selectedOptions.push({ ...newestElement, id: '', name: newestElement.value });
                  }
                  setFieldValue('tagIds', selectedOptions.map((item) => item));
                }}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}

interface ITagsPlatformsForm {
  setShow: Dispatch<SetStateAction<boolean>>
  refetch: () => void
  selectedTags: { tagsplatform: tagsplatform }[]
  customTags: string[]
}

export function TagsPlatformsForm ({ setShow, refetch, selectedTags, customTags }: ITagsPlatformsForm) {
  const { mutate: mutateCustomTags } = api.profile.updateSpecialistCustomTagPlatform.useMutation({ retry: 5 });
  const { mutateAsync, error } = api.profile.updateTagsPlatforms.useMutation({ retry: 5 });
  const { data } = api.profile.getTagsPlatforms.useQuery();

  const selectedOptions = selectedTags.map(obj => obj.tagsplatform);
  // @ts-ignore
  customTags.forEach((e) => selectedOptions.push({ id: '', value: e, name: e, __isNew__: true }));
  const TOP_OPTIONS = [
    'instagram',
    'youtube',
    'linkedin',
    'tiktok',
    'facebook',
    'google',
  ];
  const sortedData = data && data.sort((a, b) => {
    const aIndex = TOP_OPTIONS.indexOf(a.name);
    const bIndex = TOP_OPTIONS.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex; // Sort by top options index
    } else if (aIndex !== -1) {
      return -1; // a is a top option, so it comes first
    } else if (bIndex !== -1) {
      return 1; // b is a top option, so it comes first
    }

    return a.name.localeCompare(b.name); // Sort alphabetically
  });

  return (
    <StyledMain>
      <Formik
        initialValues={{ tagIds: selectedOptions }}
        validationSchema={toFormikValidationSchema(specialistFormTagsSchema)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const customTagNames = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (item.__isNew__) return item.name;
            return [];
          });
          const tagIds = values.tagIds.flatMap((item) => {
            // @ts-ignore
            if (!item.__isNew__) return item.id;
            return [];
          });

          mutateCustomTags({ tagNames: customTagNames as unknown as string[] });
          mutateAsync({ tagIds: tagIds as unknown as string[] })
            .then(() => {
              resetForm();
              refetch();
              setShow(false);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>

            <div className="grid gap-6 mb-6">
              <CreatableSelect
                isMulti
                options={sortedData}
                defaultValue={selectedOptions}
                getOptionLabel={(option) => {
                  // @ts-ignore
                  if (option.__isNew__) return option.value;
                  return option.name.charAt(0).toUpperCase() + option.name.slice(1);
                }}
                getOptionValue={(option) => option.name}
                onChange={selectedOptions => {
                  const newestElement = selectedOptions[selectedOptions.length - 1];
                  // @ts-ignore
                  if (newestElement && newestElement.__isNew__) {
                    // @ts-ignore
                    selectedOptions.pop();
                    // @ts-ignore
                    selectedOptions.push({ ...newestElement, id: '', name: newestElement.value });
                  }
                  setFieldValue('tagIds', selectedOptions.map((item) => item));
                }}
              />
            </div>

            <Footer setShow={setShow} isSubmitting={isSubmitting} />
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
}