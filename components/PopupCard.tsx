"use client";

import { GlareCard } from "@/components/ui/glare-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface Props {
    projectname: string;
    description: string;
    onClose: () => void;
}

export function GlareCardDemo({ projectname, description, onClose }: Props) {
    const [data, setData] = useState({
        charges: ''
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleOnSubmit = () => {
        console.log(data, "Submited")
        onClose();
        setData({
            charges: ''
        })
    }

    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Project Name : {projectname}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <div className="flex flex-col items-center z-[100] mt-5 relative">
                        <LabelInputContainer>
                            <Input
                                className="z-[100] cursor-pointer"
                                id="charges"
                                placeholder="$600"
                                type="number"
                                value={data.charges}
                                name="charges"
                                onChange={handleOnChange}
                            />
                        </LabelInputContainer>
                    </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={'p'}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                        onClick={onClose}
                    >
                        Cancel→
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        onClick={handleOnSubmit}
                    >
                        Place Bid
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
