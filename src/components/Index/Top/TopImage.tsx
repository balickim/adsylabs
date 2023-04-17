import Image from 'next/image';

import { STATIC } from 'constants/index';

const TopImage = () => {
  return (
    <div className='flex justify-center relative h-96 md:h-auto'>
      <Image
        fill
        priority
        src={`${STATIC.STAIN_1}`}
        alt="stain"
        style={{ objectFit: 'contain' }}
      />
      <Image
        fill
        priority
        src={`${STATIC.ROB_KATARZYNA}`}
        alt="how it works"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default TopImage;
