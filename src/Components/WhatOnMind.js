import React from 'react'
import { IMG_LOGO } from '../utils/constant';
import { useSelector } from 'react-redux';

const WhatOnMind = () => {
    const img = useSelector(store=> store?.img?.imgLogo);  
  return (
    <div className='px-10 border-b-2 mx-16 mb-10'>
        <h1 className='text-3xl font-bold mb-4'>What's on your mind?</h1>
        {/* <div className='flex overflow-x-scroll flex-nowrap scroll-smooth animate-infinite-scroll'>
            {
                img?.map((i) => (
                    <img src={IMG_LOGO + i?.imageId} className="w-[170px] mr-4" />
                ))
            }
        </div> */}
        <div class="inline-flex flex-nowrap">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                {
                    img?.map((i) => (
                        <li><img src={IMG_LOGO + i?.imageId} className="w-[170px] mr-4 hover:-translate-y-1 hover:scale-110" /></li>
                    ))
                }
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                {
                    img?.map((i) => (
                        <li><img src={IMG_LOGO + i?.imageId} className="w-[170px] mr-4 hover:-translate-y-1 hover:scale-110" /></li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default WhatOnMind