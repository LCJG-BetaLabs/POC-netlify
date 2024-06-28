'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TypewriterEffect } from './common/components/ui/typeWriter'
import { EvervaultCard } from './common/components/ui/visibleCard'
import { Vortex } from './common/components/ui/vortex'
import { HoveredLink, Menu, MenuItem } from './common/components/ui/navMemu'

import { cn } from '../../utils/cn'

export default function Home() {
  const router = useRouter()
  const [active, setActive] = useState<string | null>(null)

  const words = [
    {
      text: 'Think',
      className: 'text-white-500 dark:text-white-500',
    },
    {
      text: 'big',
      className: 'text-white-500 dark:text-white-500',
    },
    {
      text: 'and',
      className: 'text-white-500 dark:text-white-500',
    },
    {
      text: 'start',
      className: 'text-white-500 dark:text-white-500',
    },
    {
      text: 'small.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50')}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/members">Team</HoveredLink>
              <HoveredLink href="/products">Products</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-2 w-full h-full"
      >
        <div className="flex flex-col items-center justify-center h-[40rem] ">
          <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
            Welcome to BetaLabs
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button
              className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
              onClick={() =>
                router.push('https://hk.linkedin.com/company/betalabs-hk')
              }
            >
              Join now
            </button>
            <button
              className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
              onClick={() => router.push('https://www.betalabs.ai/')}
            >
              Contact us
            </button>
          </div>

          <div className="flex flex-col items-start max-w-md mx-auto p-4 relative h-[20rem]">
            <EvervaultCard content="Beta Labs was founded by the iconic Lane Crawford Joyce Group headquartered in Hong Kong, catering to the most distinguished clients in the fashion, beauty, and lifestyle retail industry.Our expertise lies in providing Analytics and AI/Machine Learning solutions to brands and retailers with a presence in Greater China and Southeast Asia, delivering operational excellence and personalized customer experiences." />
          </div>
        </div>
      </Vortex>
    </div>
  )
}
