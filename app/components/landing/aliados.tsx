'use client'
import React, { useEffect, useState } from 'react'
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import Link from 'next/link';
import useDeviceType from '@/app/helpers/useDeviceType';

export default function Aliados() {
  const { isMobile } = useDeviceType();
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_LINK_WHATSAPP) {
      setWhatsAppLink(process.env.NEXT_PUBLIC_LINK_WHATSAPP);
    }
  }, []);
  return (
    <div className='bg-[#5A1482] text-white w-full bottom-0'>
    <Link className=' bottom-8 right-8 z-50 fixed' href={whatsAppLink} target='_blank'>
            <button className={`bg-green-600 hover:bg-green-700 w-[50px] h-[50px] rounded-full text-white font-bold text-[16px] flex items-center justify-center gap-2`}>
            <WhatsAppOutlined className='text-white text-2xl mb-1 font-medium' />
            </button>
          </Link>
    <div className=' py-4 w-full flex justify-center text-[12px] px-6'>
      Todos los derechos reservados. 2023
    </div>

    </div>
  )
}
