"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@chakra-ui/react"

export default function ContactPage(){
    return(
        <main className="p-4 mx-2 md:mx-32 md:p-10 text-center text-lg font-normal">
            <h1 className="text-[#01096E] text-center text-xl font-bold py-6">OUR MANAGEMENT TEAM</h1> 
            <div className="flex flex-col md:flex-row min-w-screen h-auto justify-between gap-4 md:gap-2">        
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team1.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">HAKAN BAYRAM</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447572457889'}>+44 7572 457889</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:director@dolphingroup.info'}>director@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team2.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">MUSTAFA KASAP</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+905391049996'}>+90 539 104 99 96</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:mk@dolphingroup.info'}>mk@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team3.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">CEM OĞUZ</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447841343697'}>+44 7841 343697</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:co@dolphingroup.info'}>co@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team4.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">ADNAN SHAIKH</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447967178760'}>+44 7967 178760</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:as@dolphingroup.info'}>as@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team5.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">LEVENT RUSSO</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:lr@dolphingroup.info'}>lr@dolphingroup.info</Link></h3>
                    </div>
            </div>

            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold py-6">CONTACT US</h1>
                <p className="text-black font-normal pb-8">If you want to contact us please use this form below. 
                Or send the email to <Link className="font-semibold hover:text-blue-900" href={'mailto:info@dolphinmovers.info'}>info@dolphinmovers.info</Link></p>
            </div>
            <div className="min-w-fit md:w-96 md:mx-auto rounded-xl py-8 mx-8 gap-4 bg-gradient-to-r from-[#01096E] to-black">
                <h2 className="text-white uppercase font-semibold"> Contact Form</h2>
                <p className="text-white font-light py-2">If you have any question please send this from.</p>
                <form className="grid p-4 md:p-8 gap-4">
                    <input className="rounded-md p-2" type={'email'} placeholder={'your@e-mail.com'} required></input>
                    <input className="rounded-md p-2" type={'text'} placeholder={'Full Name'} required></input>
                    <input className="rounded-md p-2" type={'tel'} placeholder={'Phone Number'} required></input>                    
                    <input className="rounded-md p-2 h-auto" type={'text'} placeholder={'Message'}></input>
                    <div className="flex justify-between">                        
                        <Button type="reset" className="border border-white text-white hover:text-black w-fit m-auto flex justify-center">Reset</Button>
                        <Button type="submit" className="bg-[#FA4040] text-white hover:text-black w-fit m-auto flex justify-center">Send Now</Button>
                    </div>
                </form>
            </div>
        </main>
    )
}