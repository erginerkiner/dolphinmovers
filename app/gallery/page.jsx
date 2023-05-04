"use client"
import { BiHome } from "react-icons/bi"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Image from "next/image"

export default function GalleryPage(){
    return(
        <main className="p-4 mx-2 md:mx-32 md:p-10 text-center text-lg font-normal">
            <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 mx-auto">
                <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-black hover:text-blue-900">
                    <BiHome /> 
                    Home
                </a>
                </li>

                <li aria-current="page">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-sm font-semibold text-gray-900 md:ml-2 dark:text-gray-900">Gallery</span>
                </div>
                </li>
            </ol>
            </nav>
            <h1 className="text-[#01096E] text-center text-xl font-bold py-6">GALLERY</h1>



<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <Image width={'400'} height={'400'} class="h-auto max-w-full rounded-lg" src={'/gallery/g1.jpg'} alt={''} />
    </div>
    <div>
        <Image width={'400'} height={'200'} class="h-auto max-w-full rounded-lg" src={'/gallery/g2.jpg'} alt={''} />
    </div>
    <div>
        <Image width={'400'} height={'400'} class="h-auto max-w-full rounded-lg" src={'/gallery/g3.jpg'} alt={''} />
    </div>
    <div>
        <Image width={'400'} height={'400'} class="h-auto max-w-full rounded-lg" src={'/gallery/g4.jpg'} alt={''} />
    </div>
    <div>
        <Image width={'400'} height={'400'} class="h-auto max-w-full rounded-lg" src={'/gallery/g5.jpg'} alt={''} />
    </div>
    <div>
        <Image width={'400'} height={'400'} class="h-auto max-w-full rounded-lg" src={'/gallery/g6.jpg'} alt={''} />
    </div>
</div>


        </main>
    )
}