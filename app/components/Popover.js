import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
];

export default function PopoverMenu({
  title,
  menu,
  haveExtra,
  content,
  left = 'left-1/2',
  textwidth
}) {
  return (
    <div className='md:fixed flex-1'>
      <Popover className='md:relative'>
        {({ open }) => (
          <>
            <Popover.Button className='md:p-2 w-full font-semibold  text-gray-400  py-1 items-center flex justify-between hover:text-white'>
              {haveExtra ? (
                <div className='flex items-center gap-x-2'>
                  <p>Integrations</p>
                  <div className='text-xs text-[#F1CE5B] bg-[#453224] rounded-xl py-1 px-2'>
                    12
                  </div>
                </div>
              ) : (
                <span>{title}</span>
              )}
              <Image
                src={'images/aroow.svg'}
                height={10}
                width={10}
                alt='arrow'
                className='md:hidden'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <div>
                <div className='absolute left-1/2 -translate-x-1/2 top-[10px] -z-10'>
                  <Image
                    src='/images/rect.svg'
                    width={40}
                    height={40}
                    alt='rect'
                  />
                </div>
                <Popover.Panel
                  className={`absolute top-0 z-10 md:mt-0 mt-0 overflow-y-auto w-screen md:max-w-lg -translate-x-1/2 transform px-5 md:px-0 lg:max-w-xl xl:max-w-2xl max-h-[85dvh] ${left}`}
                >
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5'>
                    <div className='relative bg-[#141414] rounded-lg p-7 md:mt-6'>
                      {content}
                    </div>
                  </div>
                </Popover.Panel>
              </div>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path
        d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z'
        stroke='#FB923C'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path
        d='M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27'
        stroke='#FB923C'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 21L18.804 30Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <rect x='13' y='32' width='2' height='4' fill='#FDBA74' />
      <rect x='17' y='28' width='2' height='8' fill='#FDBA74' />
      <rect x='21' y='24' width='2' height='12' fill='#FDBA74' />
      <rect x='25' y='20' width='2' height='16' fill='#FDBA74' />
      <rect x='29' y='16' width='2' height='20' fill='#FB923C' />
      <rect x='33' y='12' width='2' height='24' fill='#FB923C' />
    </svg>
  );
}
