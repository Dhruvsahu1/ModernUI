'use client'
import React from "react"
import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BadgeButtonProps {
  children: React.ReactNode;
}

const BadgeButton = ({ children }: BadgeButtonProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 
                 bg-white text-sm sm:text-base text-neutral-800 
                 dark:border-white/20 dark:bg-neutral-900 dark:text-white"
    >
      <SparklesIcon className="mr-2 fill-[#EEBDE0] stroke-1 text-neutral-800 dark:text-white" />
      {children}
    </Badge>
  )
}

export default BadgeButton
