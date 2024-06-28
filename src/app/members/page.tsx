'use client'
import Image from 'next/image'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '../common/components/ui/3dCard'
import { AnimatedTooltip } from '../common/components/ui/toolTips'

export default function Members() {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: '/icon.jpeg',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: '/icon.jpeg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: '/icon.jpeg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: '/icon.jpeg',
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: '/icon.jpeg',
    },
    {
      id: 6,
      name: 'Dora',
      designation: 'The Explorer',
      image: '/icon.jpeg',
    },
  ]

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <div className="flex flex-row items-center justify-center h-[15rem] ">
        <AnimatedTooltip items={people} />
      </div>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] md:w-64 h-auto rounded-xl p-6 border ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Team
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Member description
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/icon.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Contact
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
