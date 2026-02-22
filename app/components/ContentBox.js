import React from 'react';
import { FaGlobe } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const ContentBox = () => {
    return (
        <div className='max-w-200 w-full mt-16 mx-auto neu rounded-[20px] p-5 '>
            <h2 className='text-lg font-bold text-justify mb-10 text-sky-950 dark:text-sky-100 dana'>برای اطلاع از جدیدترین محصولات در شبکه‌های اجتماعی ما عضو شوید 👇✨</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <a target='_blanck' href='https://t.me/novinmode_shop' className=' dark:text-sky-100 dana text-slate-900 neu py-3 px-2 rounded-2xl yekan flex justify-center items-center gap-1 sm:gap-2  max-xxs:gap-2 transition-all active:neu-pressed'>
                    کانال تلگرام
                    <img
                        className='w-6 h-6'
                        src='/telegram.svg'
                    />
                </a>
                <a target='_blanck' href='https://eitaa.com/novinmode_shop' className=' dark:text-sky-100 dana text-slate-900 neu py-3 px-2 rounded-2xl yekan flex justify-center items-center gap-1 sm:gap-2  max-xxs:gap-2 transition-all active:neu-pressed'>
                    کانال ایتا
                    <img
                        className='w-6 h-6'
                        src='/eitaa.png'
                    />
                </a>
                <a target='_blanck' href='https://novinmode.shop' className=' dark:text-sky-100 dana text-slate-900 neu py-3 px-2 rounded-2xl yekan flex justify-center items-center gap-1 sm:gap-2  max-xxs:gap-2 transition-all active:neu-pressed'>
                    وبسایت فروشگاه
                    <FaGlobe size={24} className='text-blue-500' />
                </a>
                <a target='_blanck' href='https://novinmode.shop' className=' dark:text-sky-100 dana text-slate-900 neu py-3 px-2 rounded-2xl yekan flex justify-center items-center gap-1 sm:gap-2  max-xxs:gap-2 transition-all active:neu-pressed'>
                    دانلود اپ فروشگاه
                    <FaDownload size={24} className='text-emerald-500' />
                </a>
            </div>
            <div className='mt-8 flex flex-col items-center w-full gap-5'>
                <a target='_blanck' href='https://basalam.com/novinmodewear' className='neu  w-full dark:text-sky-100 dana py-3 px-6 rounded-2xl yekan flex items-center max-xxs:flex-col justify-center gap-3 transition-all active:neu-pressed'>
                    غرفه باسلام
                    <img
                        className='w-6 h-6'
                        src='/baslam.ico'
                    />
                </a>
                <a href='tel:09153042198' className='neu  w-full dark:text-sky-100 dana py-3 px-6 rounded-2xl yekan flex items-center max-[400px]:flex-col justify-center gap-3 transition-all active:neu-pressed'>
                    <span className='font-semibold text-lg text-sky-950 text-right'>
                        شماره تماس:
                    </span>
                    <span className='flex gap-2 items-center text-xl!'>
                        09153042198
                        <FaPhone size={24} className='text-rose-600'/>
                    </span>
                    
                </a>
            </div>
            <div dir="rtl" className="w-full pb-4 mt-6 pt-1 text-center dana text-xl"><h3 className="font-semibold mb-2 text-sky-950">زمان پاسخگویی:</h3><p className="">همه روزه از ساعت 9 الی 18</p></div>
        </div>
    );
}

export default ContentBox;
