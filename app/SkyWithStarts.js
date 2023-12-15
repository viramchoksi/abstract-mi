import Image from 'next/image';
import React from 'react';
import { siteData } from '@/data/allApps';
import { useTranslation } from 'react-i18next';

const SkyWithStarts = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-full'>
      <Image src={'/images/SkyFullOfStars.svg'} className='absolute top-[150px] sm:min-h-[420px] min-h-[280px] object-cover' alt='sky' width={2000} height={400}  />
      <div className='z-0 sm:min-h-[400px] min-h-[300px] sm:pt-14 pt-5'>
        <p className='text-center text-[#F1CE5B] mt-2'>
          {t('header.subTitle')}
        </p>
        <p className='text-center sm:text-[56px] text-2xl sm:leading-[62px] mt-2'>
        {t('header.title_first')}
          <br />
          {t('header.title_second')}
        </p>
        <p className='text-center max-w-[500px] mt-5 text-[#6A7A7B] mx-auto h-full px-5'>
          {t('header.description')}
        </p>
      </div>
    </div>
  );
};

export default SkyWithStarts;
