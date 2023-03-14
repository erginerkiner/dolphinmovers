import Image from "next/image";
import Link from "next/link";

export default function WorldwideFreightPage(){
    return (
        <main className="p-4 mx-10 md:mx-32 md:p-10 text-center text-lg font-normal min-h-screen">

<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="/" class="inline-flex items-center text-sm font-medium text-black">
        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="/our-services" className="ml-1 text-sm font-medium text-black">Services</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span className="ml-1 text-sm font-semibold text-black">Worldwide Freight Forwarding</span>
      </div>
    </li>
  </ol>
</nav>

            <h1 className="text-[#01096E] text-center text-xl font-bold py-6">WORLDWIDE FREIGHT FORWARDING</h1>
            <div className="gap-4 grid md:flex min-w-screen">
                <div className="bg-gradient-to-r from-[#01096E] to-black rounded-md">
                    <Image className="w-full h-auto rounded-md" src={'/service-detail/wwff/b2b.svg'} alt={''} width={532} height={359} />
                    <h2 className="text-white text-center font-semibold font-lg py-4"><Link href={''} >Business to Business</Link></h2>
                </div>
                <div className="bg-gradient-to-r from-[#01096E] to-black rounded-md">
                    <Image className="w-full h-auto rounded-md" src={'/service-detail/wwff/storage.svg'} alt={''} width={532} height={359} />
                    <h2 className="text-white text-center font-semibold font-lg py-4"><Link href={''} >Storage</Link></h2>
                </div>
                <div className="bg-gradient-to-r from-[#01096E] to-black rounded-md">
                    <Image className="w-full h-auto rounded-md" src={'/service-detail/wwff/customs.svg'} alt={''} width={532} height={359} />
                    <h2 className="text-white text-center font-semibold font-lg py-4"><Link href={''} >Customs Warehouse</Link></h2>
                </div>
                <div className="bg-gradient-to-r from-[#01096E] to-black rounded-md">
                    <Image className="w-full h-auto rounded-md" src={'/service-detail/wwff/ramp.svg'} alt={''} width={532} height={359} />
                    <h2 className="text-white text-center font-semibold font-lg py-4"><Link href={''} >Weigh Bridge</Link></h2>
                </div>
                <div className="bg-gradient-to-r from-[#01096E] to-black rounded-md">
                    <Image className="w-full h-auto rounded-md" src={'/service-detail/wwff/forklift.svg'} alt={''} width={532} height={359} />
                    <h2 className="text-white text-center font-semibold font-lg py-4"><Link href={''} >Forklift & Ramp Services</Link></h2>
                </div>
            </div>

        </main>
    )
}