import React, { Dispatch, SetStateAction } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

interface IModal {
  title: string
  body: React.ReactNode
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export default function Modal ({
  title,
  body,
  show,
  setShow,
}: IModal) {
  return (
    <>
      {show ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="w-full relative mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-xl font-semibold">
                  {title}
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShow(false)}
                >
                  <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <AiFillCloseCircle />
                  </span>
                </button>
              </div>
              
              {body}

            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}