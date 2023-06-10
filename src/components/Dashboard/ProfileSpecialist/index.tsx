import React, { HTMLProps, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import tw from 'twin.macro';
import Image from 'next/image';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useIntl } from 'react-intl';
import { useAuth } from '@clerk/nextjs';

import { CtaButton } from 'components/Common/styled';
import Modal from 'components/Common/Modal';
import {
  BackgroundImageForm,
  CaseStudiesForm,
  DescriptionForm,
  NameSurnameForm,
  ProfileImageForm,
  TagsIndustriesForm,
  TagsLanguagesForm,
  TagsPlatformsForm,
  TagsSpecializationsForm,
  TitleForm,
} from 'components/Dashboard/settings/settingsModalForms';
import { api } from 'utils/api';
import { DASHBOARD_IMAGES_PATH } from 'utils/constants';
import { openLink } from 'utils/helpers';
import { ProfileLoader } from 'utils/helpers/skeletonLoaders';

const StyledTagSpan = tw.span`flex justify-center items-center text-white p-2 text-xxs w-fit rounded-xl md:text-sm`;

interface IProfileSpecialist {
  canEdit: boolean
}

interface IEditButton {
  classes?: HTMLProps<HTMLElement>['className']
  size?: number
  modalBody: JSX.Element
  modalTitle: string
}

export default function ProfileSpecialist ({ canEdit }: IProfileSpecialist) {
  const { isLoaded } = useAuth();
  const {
    data: dataProfile,
    refetch: refetchProfile,
    isLoading,
    error: errorProfile,
  } = api.profile.getProfile.useQuery(undefined, { enabled: isLoaded });
  const {
    data: dataProfileSpecialist,
    refetch: refetchProfileSpecialist,
    isLoading: isLoadingSpecialist,
    error: errorProfileSpecialist,
  } = api.profile.getProfileSpecialist.useQuery(undefined, { enabled: isLoaded });

  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState<JSX.Element>();
  const [modalTitle, setModalTitle] = useState<string>('');
  const t = useIntl().formatMessage;

  const EditButtonContainer = canEdit
    ? tw.div`flex items-start justify-end gap-x-1`
    : tw.div``;
  const EditButton = ({ classes, size, modalBody, modalTitle }: IEditButton) => (
    canEdit
      ? <button onClick={() => {
        setModalBody(modalBody);
        setModalTitle(modalTitle);
        setShowModal(true);
      }} className={`text-black z-10 w-0 ${classes}`}>
        <FiEdit size={size ?? 20} />
      </button>
      : null
  );

  if (errorProfile || errorProfileSpecialist) return <div className={'text-red-500'}>{JSON.stringify(errorProfile)} {JSON.stringify(errorProfileSpecialist)}</div>;
  if (isLoading || isLoadingSpecialist || !dataProfile || !dataProfileSpecialist) return <ProfileLoader />;

  return (
    <>
      <Modal
        key={modalTitle}
        title={modalTitle}
        body={modalBody}
        show={showModal}
        setShow={setShowModal}
      />
      <main className={'bg-white rounded-3xl p-4'}>
        <EditButtonContainer>
          <div className={'flex bg-gray-200 rounded-3xl justify-center items-center w-full h-60 text-gray-400 font-bold'}>
            {dataProfile && dataProfile.background_image_url
              ? <div className={'relative h-full w-full left-0 top-0'}>
                <Image
                  src={dataProfile.background_image_url}
                  alt="profile background image"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div> : <p>
                Kliknij i ustaw swoje zdjęcie w tle
              </p>}
          </div>
          <EditButton
            classes={'mt-[0px]'}
            modalTitle={'Ustaw zdjęcie w tle'}
            modalBody={<BackgroundImageForm setShow={setShowModal} refetch={refetchProfile} /> }
          />
        </EditButtonContainer>

        <div className={'md:hidden'}>
          <div className={'flex justify-center'}>
            <EditButtonContainer>
              <Image
                src={dataProfile.image_url ? dataProfile.image_url : DASHBOARD_IMAGES_PATH.AVATAR}
                alt="profile image"
                width={80}
                height={80}
                className={'rounded-full z-10 mt-[-60px]'}
              />
              <EditButton
                classes={'mt-[-60px]'}
                modalTitle={'Ustaw zdjęcie profilowe'}
                modalBody={<ProfileImageForm setShow={setShowModal} refetch={refetchProfile} /> }
              />
            </EditButtonContainer>
          </div>

          <h2 className={'flex justify-center text-dashboardPrimary text-lg text-center my-2 font-bold'}>
            <EditButtonContainer>{dataProfile.name} {dataProfile.surname}
              <EditButton modalBody={<NameSurnameForm setShow={setShowModal} refetch={refetchProfile} />} modalTitle={'Ustaw imię i nazwisko'} />
            </EditButtonContainer>
          </h2>
          <span className={'flex justify-center text-gray-500 text-center'}>
            <EditButtonContainer>{dataProfileSpecialist.title
              ? dataProfileSpecialist.title
              : 'Np. Jestem specjalistą Facebook Ads z 5 letnim doswiadczeniem.'
            }
            <EditButton classes={'mt-[-5px]'} modalTitle={'Ustaw swój tytuł'} modalBody={<TitleForm setShow={setShowModal} refetch={refetchProfileSpecialist} />} />
            </EditButtonContainer>
          </span>
        </div>

        <div className={'hidden md:block'}>
          <div className={'flex justify-start md:ml-14'}>
            <EditButtonContainer>
              <Image
                src={dataProfile.image_url ? dataProfile.image_url : DASHBOARD_IMAGES_PATH.AVATAR}
                alt="profile image"
                width={150}
                height={150}
                className={'rounded-full z-10 mt-[-40px]'}
              />
              <EditButton
                classes={'mt-[-40px]'}
                modalTitle={'Ustaw zdjęcie profilowe'}
                modalBody={<ProfileImageForm setShow={setShowModal} refetch={refetchProfile} /> }
              />
            </EditButtonContainer>

            <div className={'flex flex-col ml-4 mt-8'}>
              <h2 className={'flex text-dashboardPrimary text-lg text-center my-2 font-bold'}>
                <EditButtonContainer>{dataProfile.name} {dataProfile.surname}
                  <EditButton modalBody={<NameSurnameForm setShow={setShowModal} refetch={refetchProfile} />} modalTitle={'Ustaw imię i nazwisko'} />
                </EditButtonContainer>
              </h2>
              <div className={'flex justify-center text-gray-500 text-center max-w-2xl md:justify-start md:text-left'}>
                <EditButtonContainer>{dataProfileSpecialist.title
                  ? dataProfileSpecialist.title
                  : 'Np. Jestem specjalistą Facebook Ads z 5 letnim doswiadczeniem.'
                }
                <EditButton classes={'mt-[-5px]'} modalTitle={'Ustaw swój tytuł'} modalBody={<TitleForm setShow={setShowModal} refetch={refetchProfileSpecialist} />} />
                </EditButtonContainer>
              </div>
            </div>
          </div>
        </div>

        {canEdit ? null : <div className={'flex justify-center mt-2'}>
          <CtaButton version={'primary'}>
            Nawiąż kontakt
          </CtaButton>
        </div>}

        <div className={'mt-4 md:ml-14 md:mt-10'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg my-2'}>O mnie</div>
              <EditButton modalTitle={'Ustawi swój opis'} modalBody={<DescriptionForm setShow={setShowModal} refetch={refetchProfileSpecialist} /> } />
            </EditButtonContainer>
          </div>
          <div className={'text-gray-500 max-w-4xl'}>
            {dataProfileSpecialist.description
              ? dataProfileSpecialist.description
              : `Np. Jestem doświadczonym specjalistą Facebook Ads z ponad 5 latami
                  doświadczenia w branży reklamowej. Moja pasja do marketingu online i
                  analizy danych pozwala mi na tworzenie kampanii reklamowych,
                  które generują wyniki i przynoszą zyski dla klientów.
                  Posiadam szeroką wiedzę na temat różnych formatów reklamowych Facebook Ads,
                  takich jak kampanie retargetingowe, kampanie na podstawie zainteresowań,
                  kampanie video i wiele innych. Potrafię także tworzyć spójne strategie reklamowe,
                  które uwzględniają cele biznesowe klienta i potrzeby ich rynku docelowego.`
            }
          </div>
        </div>

        <div className={'max-w-4xl md:ml-14 md:mt-10'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg mt-2'}>Case studies</div>
              <EditButton classes={'mt-0'} modalTitle={'Zamieść swoje Case Studies'} modalBody={<CaseStudiesForm refetch={refetchProfileSpecialist} setShow={setShowModal} /> } />
            </EditButtonContainer>
          </div>
          {dataProfileSpecialist.case_studies_urls.length
            ? <ul>
              {dataProfileSpecialist.case_studies_urls.map((e, i) =>
                <li key={i} className={'inline items-center'}>
                  <button onClick={() => openLink(e)}>
                    <AiOutlineFilePdf className={'md:hidden'} size={48} />
                    <AiOutlineFilePdf className={'hidden md:block'} size={84} />
                  </button>
                </li>
              )}
            </ul>
            : <p className={'font-bold'}>Brak</p>
          }
        </div>

        <div className={'mt-4 md:ml-14'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg my-2'}>Specjalizacja</div>
              <EditButton
                classes={'mt-0'}
                modalTitle={'Ustaw specjalizacje'}
                modalBody={<TagsSpecializationsForm
                  setShow={setShowModal} 
                  refetch={refetchProfileSpecialist}
                  selectedTags={dataProfileSpecialist.tagsspecialization}
                  customTags={dataProfileSpecialist.custom_tags_specialization}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {dataProfileSpecialist.tagsspecialization.length || dataProfileSpecialist.custom_tags_specialization.length
            ? dataProfileSpecialist.tagsspecialization.map((e) =>
              <StyledTagSpan key={e.tagsspecialization.id} className={'bg-green-500'}>
                {t({ id: `dashboard.settings.specialization.${e.tagsspecialization.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {dataProfileSpecialist.custom_tags_specialization.length
            ? dataProfileSpecialist.custom_tags_specialization.map((e) =>
              <StyledTagSpan key={e} className={'shadow !text-black'}>
                {e}
              </StyledTagSpan>
            )
            : null
          }
        </div>

        <div className={'mt-4 md:ml-14'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg my-2'}>Branże które najlepiej rozumiem</div>
              <EditButton
                classes={'mt-0'}
                modalTitle={'Ustaw branże'}
                modalBody={<TagsIndustriesForm
                  setShow={setShowModal}
                  refetch={refetchProfileSpecialist}
                  selectedTags={dataProfileSpecialist.tagsindustry}
                  customTags={dataProfileSpecialist.custom_tags_industry}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {dataProfileSpecialist.tagsindustry.length || dataProfileSpecialist.custom_tags_industry.length
            ? dataProfileSpecialist.tagsindustry.map((e) =>
              <StyledTagSpan key={e.tagsindustry.id} className={'bg-fuchsia-600'}>
                {t({ id: `dashboard.settings.industry.${e.tagsindustry.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {dataProfileSpecialist.custom_tags_industry.length
            ? dataProfileSpecialist.custom_tags_industry.map((e) =>
              <StyledTagSpan key={e} className={'shadow !text-black'}>
                {e}
              </StyledTagSpan>
            )
            : null
          }
        </div>

        <div className={'mt-4 md:ml-14'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg my-2'}>Języki</div>
              <EditButton
                classes={'mt-0'}
                modalTitle={'Ustaw języki'}
                modalBody={<TagsLanguagesForm
                  setShow={setShowModal}
                  refetch={refetchProfileSpecialist}
                  selectedTags={dataProfileSpecialist.tagslanguage}
                  customTags={dataProfileSpecialist.custom_tags_language}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {dataProfileSpecialist.tagslanguage.length || dataProfileSpecialist.custom_tags_language.length
            ? dataProfileSpecialist.tagslanguage.map((e) =>
              <StyledTagSpan key={e.tagslanguage.id} className={'bg-blue-800'}>
                {t({ id: `dashboard.settings.language.${e.tagslanguage.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {dataProfileSpecialist.custom_tags_language.length
            ? dataProfileSpecialist.custom_tags_language.map((e) =>
              <StyledTagSpan key={e} className={'shadow !text-black'}>
                {e}
              </StyledTagSpan>
            )
            : null
          }
        </div>

        <div className={'mt-4 md:ml-14'}>
          <div className={'flex'}>
            <EditButtonContainer>
              <div className={'flex text-dashboardPrimary font-bold text-lg my-2'}>Platformy</div>
              <EditButton
                classes={'mt-0'}
                modalTitle={'Ustaw platformy'}
                modalBody={<TagsPlatformsForm
                  setShow={setShowModal}
                  refetch={refetchProfileSpecialist}
                  selectedTags={dataProfileSpecialist.tagsplatform}
                  customTags={dataProfileSpecialist.custom_tags_platform}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {dataProfileSpecialist.tagsplatform.length || dataProfileSpecialist.custom_tags_platform.length
            ? dataProfileSpecialist.tagsplatform.map((e) =>
              <StyledTagSpan key={e.tagsplatform.id} className={'bg-orange-600'}>
                {e.tagsplatform.name.charAt(0).toUpperCase() + e.tagsplatform.name.slice(1)}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {dataProfileSpecialist.custom_tags_platform.length
            ? dataProfileSpecialist.custom_tags_platform.map((e) =>
              <StyledTagSpan key={e} className={'shadow !text-black'}>
                {e}
              </StyledTagSpan>
            )
            : null
          }
        </div>
      </main>
    </>
  );
}