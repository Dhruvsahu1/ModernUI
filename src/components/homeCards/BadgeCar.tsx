import React from "react";

const BadgeCar: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
        <div className="mx-auto flex h-[70px] sm:h-[80px] md:h-[90px] max-w-[320px] sm:max-w-[400px] md:max-w-[480px] items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-3xl border-2 border-dashed px-4 sm:px-5 md:px-6">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.67236 6.66675V14.6667Z" fill="#6AF9D7" />
              <path
                d="M4.67236 6.66675V14.6667"
                stroke="#0A0A0A"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* …rest of your paths… */}
            </svg>

            <h3 className="flex text-lg sm:text-xl font-bold">
              {/* Replace number-flow-react with a counter */}
              <span>69</span>%
            </h3>
          </div>

          <p className="text-sm sm:text-base md:text-lg opacity-60">
            of Next.js SaaS Products look similar right? Let&apos;s change the
            approach
          </p>
        </div>

        {/* …rest of your component… */}
      </div>
    </div>
  );
};

export default BadgeCar;
