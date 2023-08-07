import React, { HTMLProps, useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import tw from 'twin.macro';
import Image from 'next/image';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useIntl } from 'react-intl';
import { useAuth } from '@clerk/nextjs';

import { CtaButton } from 'components/Common/styled';
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
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Modal from 'components/Common/Modal';
import Tooltip from 'components/Common/Tooltip';

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
  const { query } = useRouter();
  const { id } = query;
  const {
    data,
    refetch,
    isLoading,
    isError,
  } = api.profile.getProfile.useQuery({ id: id as string }, { enabled: isLoaded, retry: 3 });

  useEffect(() => {
    if (isError) {
      toast.error('Wystąpił błąd. Odśwież stronę lub skontaktuj się z z nami na contact@adsylabs.com');
    }
  }, [isError]);

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

  if (isLoading) return <ProfileLoader />;

  return (
    <>
      <Modal
        key={modalTitle}
        title={modalTitle}
        body={modalBody}
        show={showModal}
        setShow={setShowModal}
      />
      <main className={'bg-white rounded-3xl p-4 min-h-screen'}>
        <EditButtonContainer>
          <div className={'flex bg-gray-200 rounded-3xl justify-center items-center w-full h-60 text-gray-400 font-bold'}>
            {data && data.background_image_url
              ? <div className={'relative h-full w-full left-0 top-0'}>
                <Image
                  src={data.background_image_url}
                  alt="profile background image"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div> : <p>
                {canEdit ? <>Kliknij i ustaw swoje zdjęcie w tle</> : null}
              </p>}
          </div>
          <EditButton
            classes={'mt-[0px]'}
            modalTitle={'Ustaw zdjęcie w tle'}
            modalBody={<BackgroundImageForm setShow={setShowModal} refetch={refetch} /> }
          />
        </EditButtonContainer>

        <div className={'md:hidden'}>
          <div className={'flex justify-center'}>
            <EditButtonContainer>
              <Image
                src={data!.image_url ? data!.image_url : DASHBOARD_IMAGES_PATH.AVATAR}
                alt="profile image"
                width={80}
                height={80}
                className={'rounded-full z-10 mt-[-60px]'}
              />
              <EditButton
                classes={'mt-[-60px]'}
                modalTitle={'Ustaw zdjęcie profilowe'}
                modalBody={<ProfileImageForm setShow={setShowModal} refetch={refetch} /> }
              />
            </EditButtonContainer>
          </div>

          <h2 className={'flex justify-center text-dashboardPrimary text-lg text-center my-2 font-bold'}>
            <EditButtonContainer>{data!.name} {data!.surname}
              <EditButton modalBody={<NameSurnameForm setShow={setShowModal} refetch={refetch} />} modalTitle={'Ustaw imię i nazwisko'} />
            </EditButtonContainer>
          </h2>
          <span className={'flex justify-center text-textBase text-center'}>
            <EditButtonContainer>{data!.profile_specialist!.title
              ? data!.profile_specialist!.title
              : 'Np. Jestem specjalistą Facebook Ads z 5 letnim doswiadczeniem.'
            }
            <EditButton classes={'mt-[-5px]'} modalTitle={'Ustaw swój tytuł'} modalBody={<TitleForm setShow={setShowModal} refetch={refetch} />} />
            </EditButtonContainer>
          </span>
        </div>

        <div className={'hidden md:block'}>
          <div className={'flex justify-start md:ml-14'}>
            <EditButtonContainer>
              <Image
                src={data!.image_url ? data!.image_url : DASHBOARD_IMAGES_PATH.AVATAR}
                alt="profile image"
                width={150}
                height={150}
                className={'rounded-full z-10 mt-[-40px]'}
              />
              <EditButton
                classes={'mt-[-40px]'}
                modalTitle={'Ustaw zdjęcie profilowe'}
                modalBody={<ProfileImageForm setShow={setShowModal} refetch={refetch} /> }
              />
            </EditButtonContainer>

            <div className={'flex flex-col ml-4 mt-8'}>
              <h2 className={'flex text-dashboardPrimary text-lg text-center my-2 font-bold'}>
                <EditButtonContainer>{data!.name} {data!.surname}
                  <EditButton modalBody={<NameSurnameForm setShow={setShowModal} refetch={refetch} />} modalTitle={'Ustaw imię i nazwisko'} />
                </EditButtonContainer>
              </h2>
              <div className={'flex justify-center text-textBase text-center max-w-2xl md:justify-start md:text-left'}>
                <EditButtonContainer>{data!.profile_specialist!.title
                  ? data!.profile_specialist!.title
                  : 'Np. Jestem specjalistą Facebook Ads z 5 letnim doswiadczeniem.'
                }
                <EditButton classes={'mt-[-5px]'} modalTitle={'Ustaw swój tytuł'} modalBody={<TitleForm setShow={setShowModal} refetch={refetch} />} />
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
              <EditButton modalTitle={'Ustawi swój opis'} modalBody={<DescriptionForm setShow={setShowModal} refetch={refetch} /> } />
            </EditButtonContainer>
          </div>
          <div className={'text-textBase max-w-4xl'}>
            {data!.profile_specialist!.description
              ? data!.profile_specialist!.description
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
              <EditButton classes={'mt-0'} modalTitle={'Zamieść swoje Case Studies'} modalBody={<CaseStudiesForm refetch={refetch} setShow={setShowModal} /> } />
            </EditButtonContainer>
          </div>
          {data!.profile_specialist!.case_studies_urls.length
            ? <ul>
              {data!.profile_specialist!.case_studies_urls.map((e, i) =>
                <Tooltip key={i} message={'Pobierz'}>
                  <li className={'inline items-center'}>
                    <button onClick={() => openLink(e)}>
                      <AiOutlineFilePdf className={'md:hidden'} size={40} />
                      <AiOutlineFilePdf className={'hidden md:block'} size={60} />
                    </button>
                  </li>
                </Tooltip>
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
                  refetch={refetch}
                  selectedTags={data!.profile_specialist!.tagsspecialization}
                  customTags={data!.profile_specialist!.custom_tags_specialization}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {data!.profile_specialist!.tagsspecialization.length || data!.profile_specialist!.custom_tags_specialization.length
            ? data!.profile_specialist!.tagsspecialization.map((e) =>
              <StyledTagSpan key={e.tagsspecialization.id} className={'bg-green-500'}>
                {t({ id: `dashboard.settings.specialization.${e.tagsspecialization.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {data!.profile_specialist!.custom_tags_specialization.length
            ? data!.profile_specialist!.custom_tags_specialization.map((e) =>
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
                  refetch={refetch}
                  selectedTags={data!.profile_specialist!.tagsindustry}
                  customTags={data!.profile_specialist!.custom_tags_industry}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {data!.profile_specialist!.tagsindustry.length || data!.profile_specialist!.custom_tags_industry.length
            ? data!.profile_specialist!.tagsindustry.map((e) =>
              <StyledTagSpan key={e.tagsindustry.id} className={'bg-fuchsia-600'}>
                {t({ id: `dashboard.settings.industry.${e.tagsindustry.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {data!.profile_specialist!.custom_tags_industry.length
            ? data!.profile_specialist!.custom_tags_industry.map((e) =>
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
                  refetch={refetch}
                  selectedTags={data!.profile_specialist!.tagslanguage}
                  customTags={data!.profile_specialist!.custom_tags_language}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {data!.profile_specialist!.tagslanguage.length || data!.profile_specialist!.custom_tags_language.length
            ? data!.profile_specialist!.tagslanguage.map((e) =>
              <StyledTagSpan key={e.tagslanguage.id} className={'bg-blue-800'}>
                {t({ id: `dashboard.settings.language.${e.tagslanguage.name}` })}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {data!.profile_specialist!.custom_tags_language.length
            ? data!.profile_specialist!.custom_tags_language.map((e) =>
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
                  refetch={refetch}
                  selectedTags={data!.profile_specialist!.tagsplatform}
                  customTags={data!.profile_specialist!.custom_tags_platform}
                />
                }
              />
            </EditButtonContainer>
          </div>
        </div>
        <div className={'max-w-4xl flex flex-wrap gap-2 md:ml-14'}>
          {data!.profile_specialist!.tagsplatform.length || data!.profile_specialist!.custom_tags_platform.length
            ? data!.profile_specialist!.tagsplatform.map((e) =>
              <StyledTagSpan key={e.tagsplatform.id} className={'bg-orange-600'}>
                {e.tagsplatform.name.charAt(0).toUpperCase() + e.tagsplatform.name.slice(1)}
              </StyledTagSpan>
            )
            : <p className={'font-bold'}>Brak</p>
          }
          {data!.profile_specialist!.custom_tags_platform.length
            ? data!.profile_specialist!.custom_tags_platform.map((e) =>
              <StyledTagSpan key={e} className={'shadow !text-black'}>
                {e}
              </StyledTagSpan>
            )
            : null
          }
        </div>

        <div className={'h-52'} />
      </main>
    </>
  );
}