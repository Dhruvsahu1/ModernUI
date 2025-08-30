import React from "react";

const Templatecard: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[24px] border dark:border-white/20 border-black/5 p-2 mt-10 shadow-sm">
        <div className="relative rounded-[24px] border border-black/5 dark:border-white/20 bg-neutral-800/5 dark:bg-white/10 p-2 shadow-sm">
          <div className="inline-flex items-center px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground absolute left-4 top-6 rounded-[14px] border border-black/10 dark:border-white/20 dark:bg-white/20 text-sm sm:text-base md:left-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-ice-cream-cone fill-[#D2F583] stroke-1 text-neutral-800"
            >
              <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path>
              <path d="M17 7A5 5 0 0 0 7 7"></path>
              <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path>
            </svg>
            Templates
          </div>

          <div className="dark flex flex-col justify-center mt-5 space-y-4 rounded-[34px] p-3 pt-12">
            <div className="relative grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* --- Card 1 --- */}
              <a href="LandingPage">
                <div className="rounded-[24px] bg-neutral-50 hover:bg-neutral-100 shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] relative p-2 no-underline shadow-sm transition-colors dark:bg-neutral-800/90 dark:hover:bg-neutral-800/80">
                  <div className="relative mb-6 h-[160px] sm:h-[190px] w-full rounded-[20px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
                    <img
                      alt="Landing Page"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      className="absolute inset-0 size-full rounded-[16px] object-cover"
                      src="https://i.giphy.com/sZ7wUinnbIQYlucMXv/giphy.gif"
                    />
                  </div>
                  <h3 className="mt-2 px-1 text-base sm:text-lg font-semibold leading-tight w-full text-neutral-200">
                    Landing Page
                  </h3>
                  <p className="px-1 pb-2 text-xs sm:text-sm text-neutral-400">
                    Modern landing page template featuring Framer Motion
                    animations, custom navigation components, and responsive
                    design optimized for conversions.
                  </p>
                </div>
              </a>

              {/* --- Card 2 --- */}
              <a href="Manifest">
                <div className="rounded-[24px] bg-neutral-50 hover:bg-neutral-100 shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] relative p-2 no-underline shadow-sm transition-colors dark:bg-neutral-800/90 dark:hover:bg-neutral-800/80">
                  <div className="relative mb-6 h-[160px] sm:h-[190px] w-full rounded-[20px]">
                    <img
                      alt="Manifest"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      className="absolute inset-0 size-full rounded-[16px] object-cover"
                      src="https://media.giphy.com/media/SM08k77xWhQtQDDluI/giphy.gif"
                    />
                  </div>
                  <h3 className="mt-2 px-1 text-base sm:text-lg font-semibold leading-tight w-full text-neutral-200">
                    Manifest
                  </h3>
                  <p className="px-1 pb-2 text-xs sm:text-sm text-neutral-400">
                    Vector embedding solution for building Perplexity-style AI
                    applications with RAG retrieval, real-time source citations,
                    and pgvector search functionality.
                  </p>
                </div>
              </a>

              {/* --- Card 3 --- */}
              <a href="Portfolio">
                <div className="rounded-[24px] bg-neutral-50 hover:bg-neutral-100 shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] relative p-2 no-underline shadow-sm transition-colors dark:bg-neutral-800/90 dark:hover:bg-neutral-800/80">
                  <div className="relative mb-6 h-[160px] sm:h-[190px] w-full rounded-[20px]">
                    <img
                      alt="Dev Portfolio"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      className="absolute inset-0 size-full rounded-[16px] object-cover"
                      src="https://media4.giphy.com/media/L9F8Kt6IYdRvHbcHvl/giphy.gif"
                    />
                    <div className="inline-flex items-center px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 absolute bottom-4 right-4 rounded-[9px] border border-black/10 bg-[#D2F583] text-xs sm:text-sm text-neutral-900">
                      New
                    </div>
                  </div>
                  <h3 className="mt-2 px-1 text-base sm:text-lg font-semibold leading-tight w-full text-neutral-200">
                    Dev Portfolio
                  </h3>
                  <p className="px-1 pb-2 text-xs sm:text-sm text-neutral-400">
                    Comprehensive SEO analysis tool with web crawling,
                    performance testing, and AI-powered optimization
                    recommendations for website improvement.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templatecard;
