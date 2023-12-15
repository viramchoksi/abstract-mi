import Image from 'next/image';
import React from 'react';

const HeaderLinks = () => {
  return (
    <div>
      <li>
        <a className="md:p-2  font-semibold text-gray-400  py-1 items-center flex justify-between hover:text-white" href="#" title="Home">
          <p>Developers</p>
          <Image src={'images/aroow.svg'} height={20} width={20} alt='arrow' className='sm:hidden' />
        </a>
      </li>
      <li>
        <a className="md:p-2  font-semibold  text-gray-400  py-1 items-center flex justify-between hover:text-white" href="#" title="Vídeos">
          <p>Documentation</p>
          <Image src={'images/aroow.svg'} height={20} width={20} alt='arrow' className='sm:hidden' />
        </a>
      </li>
      <li>
        <a className=" md:p-2  font-semibold  text-gray-400  py-1 items-center flex justify-between hover:text-white" href="#" title="Projetos">
          <div className='flex items-center gap-x-1'>
            <p>Integrations</p>
            <div className='text-xs text-[#F1CE5B] bg-[#453224] rounded-full py-1 px-2'>12</div>
          </div>
          <Image src={'images/aroow.svg'} height={20} width={20} alt='arrow' className='sm:hidden' />

        </a>
      </li>
    </div>
  );
};

export default HeaderLinks;