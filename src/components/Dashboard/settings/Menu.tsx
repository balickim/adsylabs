import { Dispatch, SetStateAction } from 'react';

interface IMenu {
  item: number
  setItem: Dispatch<SetStateAction<number>>
}

export default function Menu ({ item, setItem }: IMenu) {
  return (
    <div className={'flex flex-wrap gap-2 mb-6'}>
      <button
        onClick={() => setItem(0)}
        className={`${item === 0 ? 'text-primary font-bold' : 'text-gray-500'}`}
      >
        | Twój profil specjalisty
      </button>

      <button
        disabled
        onClick={() => setItem(1)}
        className={`blur-[2px] ${item === 1 ? 'text-primary font-bold' : 'text-gray-500'}`}
      >
        | Konto
      </button>

      <button
        onClick={() => setItem(2)}
        className={`${item === 2 ? 'text-primary font-bold' : 'text-gray-500'}`}
      >
        | Bezpieczeństwo
      </button>

      <button
        disabled
        onClick={() => setItem(3)}
        className={`blur-[2px] ${item === 3 ? 'text-primary font-bold' : 'text-gray-500'}`}
      >
        | Powiadomienia
      </button>
    </div>
  );
}