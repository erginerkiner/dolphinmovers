import Image from "next/image"
import Link from "next/link"

export default function ServicesPage(){
    return(
        <main className="p-4 mx-10 md:mx-32 md:p-10 text-center text-lg font-normal">
             <h1 className="text-[#01096E] text-center text-xl font-bold py-6">SERVICES</h1>
            <div className="md:w-3/4 md:m-auto flex flex-col items-center bg-gradient-to-r from-[#01096E] to-black  rounded-lg shadow md:flex-row md:max-w-screen">
                <Image className="object-cover w-full rounded-t-lg h-auto md:h-96 md:w-2/4 md:rounded-none md:rounded-l-lg" src="/servicepics/service1.png" alt="" width={320} height={160} />
                <div className="flex flex-col justify-between leading-normal py-2 px-4 text-left">
                    <h5 className="py-2 text-xl font-bold tracking-tight text-white">Worldwide Freight Forwarding</h5>
                    <p className="py-2 font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link className="mb-2 flex justify-center m-auto md:mx-0 md:inline-flex w-fit rounded-md text-white font-semibold bg-[#FA4040] py-2 px-4" href={'/wwff'}>Read More</Link>
                </div>
            </div>
            <div className="md:w-3/4 md:m-auto mt-4 md:mt-8 flex flex-col items-center bg-gradient-to-r from-[#01096E] to-black  rounded-lg shadow md:flex-row md:max-w-screen">
                
                <div className="flex flex-col justify-between leading-normal py-2 px-4 text-left">
                    <h5 className="py-2 text-xl font-bold tracking-tight text-white">Warehousing & Supply Chain Management</h5>
                    <p className="py-2 font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link className="mb-2 flex justify-center m-auto md:mx-0 md:inline-flex w-fit rounded-md text-white font-semibold bg-[#FA4040] py-2 px-4" href={'/warehousing'}>Read More</Link>
                </div>
                <Image className="object-cover w-full rounded-t-lg h-auto md:h-96 md:w-2/4 md:rounded-none md:rounded-l-lg" src="/servicepics/service2.png" alt="" width={320} height={160} />
            </div>
            <div className="md:w-3/4 md:m-auto mt-4 md:mt-8 flex flex-col items-center bg-gradient-to-r from-[#01096E] to-black  rounded-lg shadow md:flex-row md:max-w-screen">
                <Image className="object-cover w-full rounded-t-lg h-auto md:h-96 md:w-2/4 md:rounded-none md:rounded-l-lg" src="/servicepics/service3.png" alt="" width={320} height={160} />
                <div className="flex flex-col justify-between leading-normal py-2 px-4 text-left">
                    <h5 className="py-2 text-xl font-bold tracking-tight text-white">Worldwide Relocations</h5>
                    <p className="py-2 font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link className="mb-2 flex justify-center m-auto md:mx-0 md:inline-flex w-fit rounded-md text-white font-semibold bg-[#FA4040] py-2 px-4" href={'/relocation'}>Read More</Link>
                </div>
            </div>
            
            <div className="md:w-3/4 md:m-auto mt-4 md:mt-8 flex flex-col items-center bg-gradient-to-r from-[#01096E] to-black  rounded-lg shadow md:flex-row md:max-w-screen">
                
                <div className="flex flex-col justify-between leading-normal py-2 px-4 text-left">
                    <h5 className="py-2 text-xl font-bold tracking-tight text-white">Warehousing & Supply Chain Management</h5>
                    <p className="py-2 font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link className="mb-2 flex justify-center m-auto md:mx-0 md:inline-flex w-fit rounded-md text-white font-semibold bg-[#FA4040] py-2 px-4" href={'/warehousing'}>Read More</Link>
                </div>
                <Image className="object-cover w-full rounded-t-lg h-auto md:h-96 md:w-2/4 md:rounded-none md:rounded-l-lg" src="/servicepics/service2.png" alt="" width={320} height={160} />
            </div>
           
            
        </main>
    )
}