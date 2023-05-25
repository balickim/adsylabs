import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';


interface ILocalStorage {
  wasOnboarded: boolean;
}

const initialState: ILocalStorage = {
  wasOnboarded: false,
};

interface IActions {
  setWasOnboarded: (value: ILocalStorage['wasOnboarded']) => void
}

export const useLocalStorageStore = create<ILocalStorage & IActions>()(
  persist(
    devtools(
      (set) => ({
        ...initialState,

        setWasOnboarded (value: ILocalStorage['wasOnboarded']) {
          set((state: ILocalStorage) => ({
            wasOnboarded: state.wasOnboarded = value,
          }));
        },
      }),
      {
        name: 'preRegistrationStore',
      }
    ),
    {
      name: 'storage',
    }
  )
);
