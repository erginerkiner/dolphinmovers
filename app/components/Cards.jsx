import Image from "next/image"

export default function Cards(){
    return(
        <main className="md:flex md:w-fit justify-center gap-4 p-24 md:mx-32 -mt-32 z-50">
        <div className="bg-gradient-to-l from-[#01096E] to-[#000000] grid justify-center w-full h-72 md:w-full rounded-xl py-4 px-2 mb-4">
            <Image className="flex justify-center m-auto" src={'/home/who.svg'} alt={''} width={'80'} height={'80'} />
            <h1 className="uppercase font-bold text-white text-center text-xl">Who We Are ?</h1>
            <p className="text-white font-normal text-sm text-center p-4">We ofter a convenient menu of standart freight management services to balance urgency 
            and cost - effectivenss for your  day-to -day shipments.</p>
        </div>
        <div className="bg-gradient-to-l from-[#000000] to-[#01096E] grid justify-center w-full h-72 md:w-full rounded-xl py-4 px-2 mb-4">
            <Image className="flex justify-center m-auto" src={'/home/who.svg'} alt={''} width={'80'} height={'80'} />
            <h1 className="uppercase font-bold text-white text-center text-xl">WHAT WE DO?</h1>
            <p className="text-white font-normal text-sm text-center p-4">As a full- service logistics company, we leverage on our wide network of 
            transportation carriers and warehaouses, along withb our industry - wide experience, to optimize your cargo.</p>
        </div>
        <div className="bg-gradient-to-l from-[#01096E] to-[#000000] grid justify-center w-full h-72 md:w-full rounded-xl py-4 px-2">
            <Image className="flex justify-center m-auto" src={'/home/who.svg'} alt={''} width={'80'} height={'80'} />
            <h1 className="uppercase font-bold text-white text-center text-xl">WHY CHOOSE US?</h1>
            <p className="text-white font-normal text-sm text-center p-4">Improving the daily lives and businesses of our customers is at 
            the heart of what we do at Glaube logistics. We keep exceeding expectations in foreign and local logistics task.</p>
        </div>
        </main>
        
    )
}