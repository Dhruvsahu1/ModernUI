import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'
const AiInputCard = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-[24px] border dark:border-white/20 border-black/5 p-2 mt-10 shadow-sm px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[24px] border border-black/5 dark:border-white/20 bg-neutral-800/5 dark:bg-white/10 p-4 sm:p-5 shadow-sm">
        <BadgeButton>Latest Components</BadgeButton>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">AI Input</h3>
        <h5 className="text-lg sm:text-xl text-foreground mb-6 sm:mb-8">Seamless AI Chat Input box</h5>
        <AiInput />
        </div>
    </div>
  )
}

export default AiInputCard
