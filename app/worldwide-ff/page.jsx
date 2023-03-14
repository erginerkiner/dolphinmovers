import Image from "next/image";
import Link from "next/link";

export default function WorldwideFreightPage(){
    return (
        <main className="p-4 mx-10 md:mx-32 md:p-10 text-center text-lg font-normal min-h-screen">
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