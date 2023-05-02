import Image from "next/image"
import Link from "next/link"

export default function OurTeam(){
    return(
        <main className="p-4 mx-2 md:mx-32 md:p-10 text-center text-lg font-normal">
            <h1 className="text-[#01096E] text-center text-xl font-bold py-6">OUR MANAGEMENT TEAM</h1>
            <div className="flex flex-col md:flex-row min-w-screen h-auto justify-between gap-4 md:gap-2">        
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team1.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">HAKAN BAYRAM</h2>
                    <h2 className="font-semibold">Managing Director</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447572457889'}>+44 7572 457889</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:director@dolphingroup.info'}>director@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team2.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">MUSTAFA KASAP</h2>
                    <h2 className="font-semibold">Director - EU Operations</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+905391049996'}>+90 539 104 99 96</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:mk@dolphingroup.info'}>mk@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team3.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">ALI MUSTAFA</h2>
                    <h2 className="font-semibold">Director - UK Operations</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+905391049996'}>+90 539 104 99 96</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:mk@dolphingroup.info'}>ali@dolphingroup.info</Link></h3>
                    </div>
            </div>

            <h1 className="text-[#01096E] text-center text-xl font-bold py-6">OPERATIONS TEAM</h1>
            <div className="flex flex-col md:flex-row min-w-screen h-auto justify-between gap-4 md:gap-2">        
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team1.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">HASAN IŞIMAN</h2>
                    <h2 className="font-semibold">Office Manager</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447572457889'}>+44 7572 457889</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:hi@dolphingroup.info'}>hi@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team2.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">HALİDE KARAMANSOYLU</h2>
                    <h2 className="font-semibold">Sales and Marketing Manager</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+905391049996'}>+90 539 104 99 96</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:hk@dolphingroup.info'}>hk@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team3.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">LEVENT RUSO</h2>
                    <h2 className="font-semibold">Commercial Manager</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+905391049996'}>+90 539 104 99 96</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:lr@dolphingroup.info'}>lr@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team3.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">CEM OĞUZ</h2>
                    <h2 className="font-semibold">Warehouse Manager</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447841343697'}>+44 7841 343697</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:co@dolphingroup.info'}>co@dolphingroup.info</Link></h3>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row min-w-screen h-auto justify-between gap-4 md:gap-2">                    
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team4.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">HAKAN BOZKURT</h2>
                    <h2 className="font-semibold">Vehicle Shipping Specialist</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+447967178760'}>+44 7967 178760</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:hb@dolphingroup.info'}>hb@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team5.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">MUSTAFA KIRIS</h2>
                    <h2 className="font-semibold">Vehicle Shipping Specialist</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:km@dolphingroup.info'}>km@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team1.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">TIBEL RAHME DINC</h2>
                    <h2 className="font-semibold">Removals Specialist</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:td@dolphingroup.info'}>td@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team2.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">JAN DJEMAL</h2>
                    <h2 className="font-semibold">Removals Specialist</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:jd@dolphingroup.info'}>jd@dolphingroup.info</Link></h3>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row min-w-screen h-auto justify-between gap-4 md:gap-2">                    
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team3.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">GONUL IRFANOGULLARI</h2>
                    <h2 className="font-semibold">Sales and Marketing Operations</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:gi@dolphingroup.info'}>gi@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team4.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">ELIT AYDIN</h2>
                    <h2 className="font-semibold">Shipping Coordinator</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:ea@dolphingroup.info'}>ea@dolphingroup.info</Link></h3>
                    </div>
                    <div className="mb-2 md:w-full">
                    <Image className="m-auto" src={'/team/team5.png'} alt={''} width={'272'} height={'224'} />
                    <h2 className="font-bold">AYTEN KAPTANOGLU</h2>
                    <h2 className="font-semibold">Accounts Ledger</h2>
                    <h3>Call Direct : <Link className="hover:text-[#01096E]" href={'tel://+44 7810 432373'}>+44 7810 432373</Link></h3>
                    <h3>Email : <Link className="hover:text-[#01096E]" href={'mailto:ak@dolphingroup.info'}>ak@dolphingroup.info</Link></h3>
                    </div>
            </div>
        </main>
    )
}