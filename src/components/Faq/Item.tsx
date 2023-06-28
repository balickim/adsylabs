import React from 'react';

interface IItem {
  index: string
  title: string
  children: React.ReactNode;
}

export const Item = ({ index, title, children }: IItem) => {
  return (
    <section className={'mx-auto mt-12 md:w-4/5'}>
      <h2 className={'flex gap-1 font-bold mb-6 text-base md:text-xl md:leading-10'}>
        <p>{index}</p>
        <p>{title}</p>
      </h2>
      <span className={'text-textBase'}>
        {children}
      </span>
    </section>
  );
};