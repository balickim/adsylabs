/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

import { PAY_PLANS } from 'utils/constants/index';
import { IPreRegistration } from 'root/types';

const initialState: IPreRegistration = {
  step: 0,
  puuid: '',
  userId: '',
  name: '',
  companyName: '',
  payPlan: PAY_PLANS.BASIC,
};

interface IActions {
  setName: (value: IPreRegistration['name']) => void
  setCompanyName: (value: IPreRegistration['companyName']) => void
  setPayPlan: (value: IPreRegistration['payPlan']) => void
  setStep: (value: IPreRegistration['step']) => void
  setPuuid: () => void
  setUserId: (value: IPreRegistration['userId']) => void
  resetStore: () => void
}

export const usePreRegistrationStore = create<IPreRegistration & IActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      setName (value: IPreRegistration['name']) {
        set((state: IPreRegistration) => ({
          name: state.name = value,
        }));
      },

      setCompanyName (value: IPreRegistration['companyName']) {
        set((state: IPreRegistration) => ({
          companyName: state.companyName = value,
        }));
      },

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

      setPuuid () {
        set((state: IPreRegistration) => ({
          puuid: state.puuid = uuidv4(),
        }));
      },

      setUserId (value: IPreRegistration['userId']) {
        set((state: IPreRegistration) => ({
          userId: state.userId = value,
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
