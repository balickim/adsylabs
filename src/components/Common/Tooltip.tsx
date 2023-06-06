import React from 'react';

interface ITooltip {
  message?: string
  children: React.ReactNode;
}

export default function Tooltip ({ message, children }: ITooltip) {
  return (
    <div className="group relative flex">
      {children}
      <span className="z-10 absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message ?? 'Ta funkcja jest jeszcze niedostępna!'}
      </span>
    </div>
  );
}
