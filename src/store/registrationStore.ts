import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PAY_PLANS } from '@prisma/client';

interface IPreRegistration {
  step: number;
  profileId: string;
  payPlan: PAY_PLANS
}

const initialState: IPreRegistration = {
  step: 0,
  profileId: '',
  payPlan: PAY_PLANS.BASIC,
};

interface IActions {
  setPayPlan: (value: IPreRegistration['payPlan']) => void
  setStep: (value: IPreRegistration['step']) => void
  setProfileId: (value: IPreRegistration['profileId']) => void
  resetStore: () => void
}

export const usePreRegistrationStore = create<IPreRegistration & IActions>()(
  devtools(
    (set) => ({
      ...initialState,

      setPayPlan (value: IPreRegistration['payPlan']) {
        set((state: IPreRegistration) => ({
          payPlan: state.payPlan = value,
        }));
      },

      setStep (value: IPreRegistration['step']) {
        set((state: IPreRegistration) => ({
          step: state.step = value,
        }));
      },

      setProfileId (value: IPreRegistration['profileId']) {
        set((state: IPreRegistration) => ({
          profileId: state.profileId = value,
        }));
      },

      resetStore () {
        set(initialState);
      },
    }),
    {
      name: 'preRegistrationStore',
    }
  )
);
