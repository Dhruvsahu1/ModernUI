import React from "react"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

import { cn } from "@/lib/utils"

interface WrapButtonProps {
  className?: string
  children: React.ReactNode
  href?: string
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link href={href}>
          <div
            className={cn(
              "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2 h-[56px] sm:h-[60px] md:h-[64px] flex items-center p-[8px] sm:p-[10px] md:p-[11px] rounded-full",
              className
            )}
          >
            <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[38px] sm:h-[40px] md:h-[43px] rounded-full flex items-center justify-center text-white">
              <p className="font-medium tracking-tight mr-2 sm:mr-3 ml-1 sm:ml-2 flex items-center gap-1 sm:gap-2 justify-center text-sm sm:text-base">
                {children}
              </p>
            </div>
            <div className="text-[#3b3a3a] group-hover:ml-2 ease-in-out transition-all size-[22px] sm:size-[24px] md:size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
              <ArrowRight
                size={16}
                className="sm:w-[18px] sm:h-[18px] group-hover:rotate-45 ease-in-out transition-all"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2 h-[56px] sm:h-[60px] md:h-[64px] flex items-center p-[8px] sm:p-[10px] md:p-[11px] rounded-full",
            className
          )}
        >
          <div className="border border-[#3B3A3A] bg-[#fe7500] h-[38px] sm:h-[40px] md:h-[43px] rounded-full flex items-center justify-center text-white">
            <Globe className="mx-1 sm:mx-2 animate-spin w-4 h-4 sm:w-5 sm:h-5" />
            <p className="font-medium tracking-tight mr-2 sm:mr-3 text-sm sm:text-base">
              {children ? children : "Get Started"}
            </p>
          </div>
          <div className="text-[#3b3a3a] group-hover:ml-2 ease-in-out transition-all size-[22px] sm:size-[24px] md:size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
            <ArrowRight
              size={16}
              className="sm:w-[18px] sm:h-[18px] group-hover:rotate-45 ease-in-out transition-all"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WrapButton
