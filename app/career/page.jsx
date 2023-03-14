"use client"

import Link from "next/link"
import { FormLabel } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

export default function CareerPage(){
    return(
        <main className="p-4 mx-2 md:mx-32 md:p-10 text-center text-lg font-normal">
            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold py-6">CAREER</h1>
                <p className="text-black font-normal pb-8">As Dolphin Movers, we’re always looking for qualified people to join our team. For over 30 years, 
                our employees have enjoyed both the satisfaction that comes from contributing to the success of a rapidly growing company, 
                and being rewarded for a job well done. <br/><br/>
                People who are curious, passionate and excited to explore the ideas that will shape the future.<br/><br/>
                Start your search fro the career of a lifetime here!</p>
            </div>
            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold py-6">MAIL US</h1>
                <p className="text-black font-normal pb-8">For Career opportunities at Dolphin Movers post your resume to <Link href={'mailto:info@dolphinmovers.com'}>info@dolphinmovers.com</Link>.
                We will get back to you when we need your contribution.</p>
            </div>
            <div className="min-w-fit md:w-96 md:mx-auto rounded-xl py-8 mx-8 gap-4 bg-gradient-to-r from-[#01096E] to-black">
                <form className="grid p-4 md:p-8 gap-4">
                    <input className="rounded-md p-2" type={'email'} placeholder={'your@e-mail.com'} required></input>
                    <input className="rounded-md p-2" type={'text'} placeholder={'Full Name'} required></input>
                    <input className="rounded-md p-2" type={'tel'} placeholder={'Phone Number'} required></input>
                    <FormLabel className="text-gray-500 bg-white p-2 rounded-md w-full">Choose file to upload<br/><input type={'file'} placeholder={'Choose file to upload'}></input></FormLabel>
                    <input className="rounded-md p-2 h-auto" type={'text'} placeholder={'Message'}></input>
                    <Button type="submit" className="bg-[#FA4040] w-fit m-auto flex justify-center">Submit</Button>
                </form>
            </div>
        </main>
    )
}