/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PAY_PLANS } from 'constants/index';
import { SpecialistPreRegistration } from 'types';

const initialState: SpecialistPreRegistration = {
  step: 1,
  name: '',
  companyName: '',
  payPlan: PAY_PLANS.BASIC,
};

interface IActions {
  setName: (value: SpecialistPreRegistration['name']) => void
  setCompanyName: (value: SpecialistPreRegistration['companyName']) => void
  setPayPlan: (value: SpecialistPreRegistration['payPlan']) => void
  setStep: (value: SpecialistPreRegistration['step']) => void
  resetStore: () => void
}

export const useSpecialistsPreRegistrationStore = create<SpecialistPreRegistration & IActions>()(
  devtools(
    (set) => ({
      ...initialState,

      setName (value: SpecialistPreRegistration['name']) {
        set((state: SpecialistPreRegistration) => ({
          name: state.name = value,
        }));
      },

      setCompanyName (value: SpecialistPreRegistration['companyName']) {
        set((state: SpecialistPreRegistration) => ({
          companyName: state.companyName = value,
        }));
      },

      setPayPlan (value: SpecialistPreRegistration['payPlan']) {
        set((state: SpecialistPreRegistration) => ({
          payPlan: state.payPlan = value,
        }));
      },

      setStep (value: SpecialistPreRegistration['step']) {
        set((state: SpecialistPreRegistration) => ({
          step: state.step = value,
        }));
      },

      resetStore () {
        set(initialState);
      },
    }),
    {
      name: 'specialistsPreRegistrationStore',
    }
  )
);
