"use client"

import React, { useState } from 'react'
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from 'next/image';
import { GlareCardDemo } from '@/components/PopupCard';
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter()

    const [cardData, setCardData] = useState([
        { projectName: 'Stark Tower', Description: 'Hover over this card to unleash the power of CSS perspective' },
        { projectName: 'Tony Tower', Description: 'Hover over this card to unleash the power of CSS perspective' },
        { projectName: 'Honey Tower', Description: 'Hover over this card to unleash the power of CSS perspective' }
    ]);

    const [submitCardData, setSubmitCardData] = useState({
        projectName: '',
        Description: ''
    });

    const [isApplying, setIsApplying] = useState(false);

    const applyBid = (id: any) => () => {
        setSubmitCardData({
            projectName: cardData[id].projectName,
            Description: cardData[id].Description
        });
        setIsApplying(true);
    }

    return (
        <div className="relative overflow-hidden h-[100vh]">
            <div className="mt-20">
                <div className="overflow-x-hidden">
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight
                        className="h-[80vh] w-[50vw] top-10 left-full"
                        fill="purple"
                    />
                    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
                </div>

                <div
                    className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                    absolute top-0 left-0 flex items-center justify-center"
                >
                    <div
                        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                    />
                </div>

                <div className="flex flex-col justify-center items-center relative -mt-16 z-10">

                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 cursor-pointer" onClick={() => router.push('/')}>
                        BuilderBox Home
                    </p>
                    <TextGenerateEffect
                        words="Apply on the bids here"
                        className="text-center text-[40px] md:text-5xl lg:text-5xl font-sans"
                    />
                </div>

                <div className='flex flex-wrap justify-around'>
                    {cardData.map((card, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border overflow-hidden">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Project Name: {card.projectName}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {card.Description}
                                </CardItem>
                                <div className="flex justify-center items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as={'p'}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                                        onClick={applyBid(index)}
                                    >
                                        Try now →
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>

            <div className={`absolute top-[10rem] left-[38rem] ${isApplying ? 'flex' : 'hidden'}`}>
                <GlareCardDemo projectname={submitCardData.projectName} description={submitCardData.Description} onClose={() => setIsApplying(false)} />
            </div>
        </div>
    );
}

export default Page;
