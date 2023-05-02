import Image from "next/image"

export default function AboutPage(){
    return(
        <main className="p-4 mx-10 md:mx-32 md:p-10 text-center text-lg font-normal">
            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold py-6">BUSINESS STORAGE</h1>
                <p className="text-black font-normal pb-8">Most commercial removals will require an element of storage, 
                either short or long term. At Dolphin we can provide a complete business removals and storage service, 
                including:</p>
            </div>
            <div className="md:flex md:w-3/4 h-auto m-auto justify-between md:justify-center md:px-32 gap-4 md:gap-2">
                <div className="mb-4 md:w-1/2 md:justify-center md:mx-auto  text-center py-16 px-8 rounded-lg bg-gradient-to-r from-[#01096E] to-[#000000] text-white text-xl">
                    <h2 className="text-[#FA4040] font-semibold mb-4">Pallet Distribution & Warehousing</h2>
                    <p className="text-white font-light">Dolphin Movers operates substantial and high-quality state-of-the-art warehousing and distribution 
                    facilities strategically situated in key transportation regions to meet both customer and operational needs.</p>
                </div>
                <div className="mb-4 md:w-1/2 md:justify-center text-center py-16 px-8 rounded-lg bg-gradient-to-r from-[#01096E] to-[#000000] text-white text-xl">
                    <h2 className="text-[#FA4040] font-semibold mb-4">Shipping Container Storage</h2>
                    <p className="text-white font-light">We utilize many different types of containers for storage, and we guarantee that they are watertight, 
                    structurally sound, and appropriate for use as safe storage containers.</p>    
                </div>
            </div>
            <div className="py-4 px-2 flex m-auto md:justify-center">
                <ul className="list-disc text-left">
                    <li>Short/long term business storage & records management.</li>
                    <li>Individual container storage modules.</li>
                    <li>48,000 sq.ft of enclosed & open storage capability.</li>
                    <li>Short notice packing, collection & re-delivery service.</li>
                    <li>Porterage, document shredding & waste disposal.</li>
                    <li>Crates, cases, cartons & packing materials delivered.</li>
                    <li>On-site survey & competitive pricing.</li>
                    <li>Fully comprehensive storage insurance.</li>
                    <li>BAR accredited.</li>
                </ul>
            </div>
            <div className="flex justify-between min-w-fit align-middle items-center gap-16 mb-8">
                <div>
                    <Image className="md:w-56 min-w-max align-middle md:my-auto flex m-auto" src={'/service-detail/onsite.svg'} alt={''} width={'1000'} height={180} />
                </div>
                <div>
                    <p className="text-left">From the outset we do our best to make sure your particular requirements for 
                        business removals and storage are met and that no specific issue is left unanswered. 
                        Our solution for this is to provide a free survey for planning your move. 
                        Our experienced professional surveyors will view the items to be moved and go through 
                        what you wish to take or store, as well as ensuring the small details are kept in check.</p>
                </div>
            </div>
            <div className="flex justify-between min-w-fit align-middle md:my-auto items-center gap-16 mb-8">
                <div>
                    <Image className="md:w-64 min-w-max align-middle flex m-auto" src={'/service-detail/quote.svg'} alt={''} width={1000} height={180} />
                </div>
                <div>
                    <p className="text-left">Whether it be from one of our professional surveyors, 
                    or an online request or telephone query, one of the dedicated sales consultants will address 
                    any points raised to them, provide a professional and competitive quote for you to peruse at your leisure. 
                    If, however, any particular quote does not quite meet what you were hoping for, 
                    the team will do everything within their power to help you attain the quote you want.</p>
                </div>
            </div>
            <div className="flex justify-between min-w-fit align-middle md:my-auto items-center gap-16">
                <div>
                    <Image className="md:w-96 min-w-max align-middle flex m-auto" src={'/service-detail/packnload.svg'} alt={''} width={1000} height={180} />
                </div>
                <div>
                    <p className="text-left">One of the most critical aspects of any move is the quality of packing, 
                    technique of handling and even the quality of the packing material itself. We choose our packing crew 
                    and the quality of our packing materials with infinite care. 
                    As specialists in moving, all our packing crews are trained and experienced and up to date 
                    in all the latest packing techniques. Our packers, drivers and porters work for Dolphin Movers 
                    on a full time basis.<br/><br/>
                    Where export packing is required, we begin preparing prior to the moving day using only the best available 
                    materials. Our materials are purpose made specifically to protect the items whilst in transit.<br/><br/>
                    We use waterproofed padded blanket furniture wrap, acid free tissue paper, bubble wrap, a vast array of 
                    reinforced cartons, jiffy foam and extra strong sealing tape. We have specific smaller cartons for 
                    heavier objects and larger cartons for lighter objects. Fragile items such fine art, antiques, 
                    grandfather clocks, glass display cabinets, paintings etc, will be packed using the appropriate materials 
                    and cased or crated for added protection. We design and build made to measure timber crates and cases tailored 
                    to your needs.<br/><br/>
                    Sturdy plastic Tea Crates are also used for any files, papers, computers and other desk contents to be moved in 
                    an organised manner.</p>
                </div>
            </div>
            <div className="flex justify-between min-w-fit align-middle md:my-auto items-center gap-16">
                <div>
                    <Image className="md:w-96 min-w-max align-middle flex m-auto" src={'/service-detail/delivery.svg'} alt={''} width={1000} height={180} />
                </div>
                <div>
                    <p className="text-left">On arrival of your consignment to destination our agents will make contact with 
                    you to arrange and perform that very important final stage of your move. 
                    They will arrange a convenient time with you in advance and on delivery they will unload, 
                    unpack and positioning all the items into relevant rooms and remove all used packing 
                    materials and debris.</p>
                </div>
            </div>
            
        </main>
    )
}