import React from 'react';

const Banner = () => {
    return (
      <div className="w-full bg-[#005052] h-143.5 relative mb-20 px-5 md:px-20">
        <div className=" w-full h-full pt-5 flex justify-between items-center gap-6 max-w-330 mx-auto">
          <img
            className='max-[1200px]:hidden block'
            src="heroheader.webp"
          />
          <div className="h-full text-white flex flex-col gap-6 justify-center pb-5">
            <p className="yekan text-2xl max-[350px]:text-xl">
              فروشگاهی به وسعت ایران
            </p>
            <h1 className="min-[830px]:text-[40px] font-bold dana pb-4 max-[350px]:text-2xl text-3xl sm:text-4xl">
              از کارگاه تولیدی تا فروش مستقیم به شما
            </h1>
            <p className="yekan text-[20px] sm:text-[22px] text-justify pb-20 md:p-5 max-[350px]:text-lg">
              نوین مد در سال ۱۴۰۴ متولد شد، اما ریشه‌های آن به ۲۰ سال قبل و یک کارگاه تولید کت و شلوار بازمی‌گردد. با درک شرایط اقتصادی و نیاز به شفافیت، ما مسیر خود را از تولید عمده به فروش مستقیم و بدون واسطه تغییر دادیم.
            </p>
          </div>

        </div>
        <div className="absolute left-1/2 -bottom-28 translate-x-[-50%] w-60 h-60 z-50 rounded-full overflow-hidden shadow-2xl shadow-gray-400/20 mt-5">
          <img className="w-full h-full" src="/Asset4.png" />
        </div>
      </div>
    );
}

export default Banner;
