import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Discover = () => {
  const { t } = useTranslation();
  const discover = t('discover', { returnObjects: true });

  return (
    <div>
      <div className='text-center sm:mt-[100px] mt-[54px] px-5 mb-5'>
        <p className='sm:text-4xl text-[32px] leading-9 sm:leading-normal'>
          {discover.title}
        </p>
        <p className='text-[#F1CE5B] hidden sm:block text-sm tracking-widest mt-2'>
          {discover.description}
        </p>
        <p className='text-[#F1CE5B] block sm:hidden  tracking-widest mt-2'>
          {discover.miniDescription}
        </p>
      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 max-w-[1120px] mx-auto px-5 lg:gap-x-5 gap-y-5 sm:mt-14 mt-10'>
        <div className='shadow-box pb-14 rounded-2xl overflow-hidden'>
          <div className='rounded-tl-full rounded-bl-full border-[#3C3C3C] items-center py-3 ml-[12%]  my-12 flex justify-between px-5 bg-[#161616] inner-box'>
            {discover.webApps.map((app, index) => {
              return (
                <Image
                  key={index}
                  alt={app.alt}
                  src={app.src}
                  width={48}
                  height={48}
                />
              );
            })}
            <div className='text-[#747474] rounded bg-[#2C2C2C] h-[48px] w-[48px] flex items-center justify-center text-3xl'>
              +
            </div>
          </div>
          <div className='ml-[12%] flex gap-y-4 flex-col'>
            <p className='text-[#F1CE5B]'>{discover.firstContent.subTitle}</p>
            {discover.firstContent.title}
            <p className='text-sm text-[#92A5A6] mt-2'>
              {discover.firstContent.description}
            </p>
          </div>
        </div>
        <div className='col-span-2 grid grid-cols-2 gap-y-5 gap-x-5'>
          <div className='lg:col-span-2 md:col-span-1 col-span-2 '>
            <div className='h-full w-full shadow-box-2 flex lg:flex-row flex-col items-center rounded-2xl '>
              <Image
                src={discover.secondContent.desktopImage}
                width={310}
                height={200}
                alt={discover.secondContent.alt}
                className='sm:block hidden'
              />
              <div className='flex flex-col gap-y-3 px-10 -ml-5 py-5'>
                <p className='text-[#F1CE5B]'>
                  {discover.secondContent.subTitle}
                </p>
                <p className='text-2xl'>{discover.secondContent.title}</p>
                <p className='text-sm text-[#92A5A6]'>
                  {discover.secondContent.description}
                </p>
              </div>
              <Image
                src={discover.secondContent.mobileImage}
                width={310}
                height={200}
                alt={discover.secondContent.alt}
                className='sm:hidden block'
              />
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-1 col-span-2'>
            <div className='h-full w-full shadow-box flex lg:flex-row flex-col items-center rounded-2xl'>
              <Image
                src={discover.thirdContent.mobileImage}
                width={310}
                height={200}
                alt={discover.thirdContent.alt}
                className='sm:hidden block mt-5'
              />
              <div className='flex flex-col gap-y-3 px-10 -ml-5 py-5'>
                <p className='text-[#F1CE5B]'>
                  {discover.thirdContent.subTitle}
                </p>
                <p className='text-2xl'>{discover.thirdContent.title}</p>
                <p className='text-sm text-[#92A5A6]'>
                  {discover.thirdContent.description}
                </p>
              </div>
              <Image
                src={discover.thirdContent.mobileImage}
                width={310}
                height={200}
                alt={discover.thirdContent.alt}
                className='sm:block hidden'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
