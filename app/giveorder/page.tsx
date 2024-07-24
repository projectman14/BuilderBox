"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { MdHealthAndSafety } from "react-icons/md";
import { Spotlight } from "@/components/ui/Spotlight";


const page = () => {

    const [data, setData] = useState({
        ProjectName: '',
        Budget: '',
        Description: '',
        Technology: '',
        HealthandSafty: '',
        HealthandSafty1: '',
        HealthandSafty2: '',
        HealthandSafty3: ''
    })

    const handleSmartContract = () => {

    }

    const handleOnChange = (e: any) => {
        const { name, value } = e.target

        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSmartContract();
        console.log("Form submitted", data);
        router.push('/')
    };
    return (
        <div className=" relative overflow-x-hidden h-[120vh] dark:bg-black-100">
            <div className=" mt-20  ">
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
                    className="h-[120vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-cente "
                >

                    <div
                        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                    />
                </div>

                <div className="flex justify-center relative -mt-16 z-10" id="form-inp">
                    <div className="flex items-center justify-center flex-col pt-2">
                        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100">
                            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                                Place your bid now
                            </h2>
                            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                Enter the inputs according to your requirement
                            </p>

                            <form className="mt-2" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                    <LabelInputContainer>
                                        <Label htmlFor="Project_name">Project Name</Label>
                                        <Input id="Project_name" placeholder="Tyler" type="text" name="ProjectName" onChange={handleOnChange} />
                                    </LabelInputContainer>
                                    <LabelInputContainer>
                                        <Label htmlFor="Budget">Budget</Label>
                                        <Input id="Budget" placeholder="$600" type="text" name="Budget" onChange={handleOnChange} />
                                    </LabelInputContainer>
                                </div>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="Description">Description</Label>
                                    <Input id="Description" placeholder="Description" type="text" name="Description" onChange={handleOnChange} />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="Technology">Technology</Label>
                                    <Input id="Technology" placeholder="rating" type="text" name="Technology" onChange={handleOnChange} />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="HeathandSafty">HeathandSafty</Label>
                                    <Input id="HeathandSafty" placeholder="rating" type="text" name="HealthandSafty" onChange={handleOnChange} />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="HeathandSafty">HeathandSafty</Label>
                                    <Input id="HeathandSafty" placeholder="rating" type="text" name="HealthandSafty1" onChange={handleOnChange} />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="HeathandSafty">HeathandSafty</Label>
                                    <Input id="HeathandSafty" placeholder="rating" type="text" name="HealthandSafty2" onChange={handleOnChange} />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="HeathandSafty">HeathandSafty</Label>
                                    <Input id="HeathandSafty" placeholder="rating" type="text" name="HealthandSafty3" onChange={handleOnChange} />
                                </LabelInputContainer>

                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Place Now &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                    onClick={() => router.push('/')}
                                >
                                    Cancel &rarr;
                                    <BottomGradient />
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

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

export default page