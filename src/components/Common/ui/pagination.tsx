import styled from 'styled-components';
import tw from 'twin.macro';



interface IStyledButton {
  selected: boolean
}

const StyledButton = styled.button<IStyledButton>(
  ({ selected }) => [
    tw`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700`,
    selected
      ? tw`text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700`
      : tw``,
  ]
);

interface IPagination {
  pages: number
  skip: number
  setSkip: (index: number) => void
}

export default function Pagination ({
  pages,
  skip,
  setSkip,
}: IPagination) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center text-base shadow-2xl">
        <li>
          <button
            onClick={() => setSkip(skip - 1)}
            disabled={skip === 0}
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>
        {Array.from({ length: pages }).map((e, index) => {
          return <li key={index}>
            <StyledButton
              onClick={() => setSkip(index)}
              selected={skip === index}
            >
              {index + 1}
            </StyledButton>
          </li>;
        })}
        <li>
          <button
            onClick={() => setSkip(skip + 1)}
            disabled={skip === (pages - 1)}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}