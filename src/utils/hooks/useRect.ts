import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useEffectInEvent = (event: 'resize' | 'scroll', useCapture?: boolean, set?: () => void ) => {
  useEffect(() => {
    if (set) {
      set();
      window.addEventListener(event, set, useCapture);
      return () => window.removeEventListener(event, set, useCapture);
    }
  }, []);
};

export const useRect = <T extends Element>(): [
    DOMRect | undefined,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRect>();

  const set = () => setRect(ref.current?.getBoundingClientRect());

  // @ts-ignore
  useEffectInEvent('resize', set);
  useEffectInEvent('scroll', true, set);

  return [rect, ref];
};