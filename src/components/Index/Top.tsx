import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image';
import styled from 'styled-components';

import { IMAGES } from 'constants/index';
import { SubTitle, Title } from 'components/Common/styled';
import { twConfig } from 'helpers/tailwind';

const StyledImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin-top: 5rem;
`;

const Top = () => {
  return (
    <section className="grid grid-cols-1 sm:mt-4 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-16">
        <Title>
          Zatrudnij specjalistów marketingu, bez ryzyka
        </Title>
        <SubTitle>
          Adsbridge.pl pomoże Ci znaleźć, zatrudnić i zarządzać zweryfikowanymi
          specjalistami ds. marketingu i reklamy
        </SubTitle>
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500
                focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
                dark:focus:ring-blue-500"
              placeholder="Wyszukaj Specjalista Facebook Ads etc."
              required
            />
          </div>
          <button
            type="submit"
            className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800
              focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="flex justify-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={twConfig?.theme?.colors?.secondary as string}
            />
            Nie znajdziesz kandydata? Nie płacisz.
          </span>
          <span className="flex items-center gap-1">
            <AiFillCheckCircle
              size={20}
              color={twConfig?.theme?.colors?.secondary as string}
            />
            60 dniowa gwarancja
          </span>
        </div>
      </div>
      <div className='flex justify-center'>
        <StyledImageContainer>
          <Image
            fill
            priority
            src={`/images/${IMAGES.ROB_KATARZYNA}`}
            alt="how it works"
            style={{ objectFit: 'cover', overflow: 'visible' }}
          />
        </StyledImageContainer>
      </div>
    </section>
  );
};

export default Top;
