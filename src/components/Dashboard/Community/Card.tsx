import { DASHBOARD_IMAGES_PATH } from 'utils/constants';
import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { useIntl } from 'react-intl';
import { inferRouterOutputs } from '@trpc/server';
import { AppRouter } from 'server/api/root';
import { CtaButton } from 'components/Common/styled';

type RouterOutput = inferRouterOutputs<AppRouter>;

interface ICard {
  specialist: RouterOutput['community']['getSpecialists'][0],
}


const StyledTagSpanContainer = tw.div`max-w-full flex flex-row flex-wrap gap-2`;
const StyledTagSpan = tw.span`flex justify-center items-center shadow text-black p-1 text-xs w-fit rounded-xl`;

export default function Card ({ specialist }: ICard) {
  const t = useIntl().formatMessage;
  const tagsPlatform = specialist?.profile_specialist?.tagsplatform;
  const tagsSpecialization = specialist?.profile_specialist?.tagsspecialization;
  const tagsLanguage = specialist?.profile_specialist?.tagslanguage;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`./community/${specialist.id}`}
    >
      <div className={'flex w-full h-48 bg-white shadow-2xl rounded-2xl transition-colors hover:bg-primaryLighten'}>
        <div className={'w-1/6 h-full flex justify-center items-center'}>
          <Image
            src={specialist?.image_url ? specialist.image_url : DASHBOARD_IMAGES_PATH.AVATAR}
            alt="profile image"
            width={110}
            height={110}
            className={'rounded-full'}
          />
        </div>
        <div className={'w-4/6 h-full flex flex-col justify-center'}>
          <h3>{specialist?.name}</h3>
          <span>{specialist.profile_specialist?.title}</span>

          <StyledTagSpanContainer>
            {tagsPlatform && (
              <>{tagsPlatform.map((e, i) => {
                if (i < 5) {
                  return <StyledTagSpan key={e.tagsplatform.id}>
                    {e.tagsplatform.name.charAt(0).toUpperCase() + e.tagsplatform.name.slice(1)}
                  </StyledTagSpan>;
                }
              })}
              {(tagsPlatform.length > 5) && <StyledTagSpan>
                + {tagsPlatform.length - 5}
              </StyledTagSpan>}
              </>
            )}
          </StyledTagSpanContainer>
          <StyledTagSpanContainer>
            {tagsSpecialization && (
              <>{tagsSpecialization.map((e, i) => {
                if (i < 5) {
                  return <StyledTagSpan key={e.tagsspecialization.id}>
                    {t({ id: `dashboard.settings.specialization.${e.tagsspecialization.name}` })}
                  </StyledTagSpan>;
                }
              })}
              {(tagsSpecialization.length > 5) && <StyledTagSpan>
                + {tagsSpecialization.length - 5}
              </StyledTagSpan>}
              </>
            )}
          </StyledTagSpanContainer>
          <StyledTagSpanContainer>
            {tagsLanguage && (
              <>{tagsLanguage.map((e, i) => {
                if (i < 5) {
                  return <StyledTagSpan key={e.tagslanguage.id}>
                    {t({ id: `dashboard.settings.language.${e.tagslanguage.name}` })}
                  </StyledTagSpan>;
                }
              })}
              {(tagsLanguage.length > 5) && <StyledTagSpan>
                + {tagsLanguage.length - 5}
              </StyledTagSpan>}
              </>
            )}
          </StyledTagSpanContainer>
        </div>
        <div className={'w-1/6 h-full flex justify-center items-center'}>
          <CtaButton version={'primary'}>
            Nawiąż kontakt
          </CtaButton>
        </div>
      </div>
    </a>
  );
}