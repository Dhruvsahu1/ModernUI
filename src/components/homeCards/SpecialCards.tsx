import React from 'react'
import BadgeButton from '../ui/badge-button'
import { SkiperCard } from '../ui/skiper-card'
import { cn } from '@/lib/utils'
const SpecialCards = () => {
  return (
    <div className="my-16 sm:my-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto border rounded-3xl p-4 sm:p-5">
        <BadgeButton>Specially Curated Components</BadgeButton>
        <h2 className='text-foreground text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-8'>Tailwind + Framer + React</h2>
        <h4 className='text-foreground text-center font-bold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8'>Everything you need to ship</h4>
        <SkiperCard
            title="Components  that  pop"
            step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  step4imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  description="Make your app 🤌"
                  bgClass="lg:bg-gradient-to-tr"
                  //  eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //   @ts-ignore
            image={{
                    step1light1: "/images/c1.webp",
                    step1light2: "/images/c2.webp",
                    step2light1: "/images/c3.webp",
                    step2light2: "/images/c4.webp",
                    step3light: "/images/c5.webp",
                    step4light: "/images/c6.webp",
                    alt: "Something",
                  }}
        />
      </div>
    </div>
  )
}

export default SpecialCards
