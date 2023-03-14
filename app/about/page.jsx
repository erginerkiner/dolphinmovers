export default function AboutPage(){
    return(
        <main className="p-4 mx-10 md:mx-32 md:p-10 text-center text-lg font-normal">
            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold py-6">DOLPHIN SHIPPING</h1>
                <p className="text-black font-normal pb-8">As freight forwarders we are specialists in overseeing the timely, efficient and cost-effective transportation of your goods. 
                    We can offer the best shipping solutions for you and your business, along with specialist advice and support.</p>
            </div>
            <div>
                <h1 className="text-[#01096E] text-center text-xl font-bold  py-6">WORLDWIDE FREIGHT FORWARDING ASSOCIATIONS & ACCREDITATIONS</h1>
                <p className="text-black font-normal py-8">Passion for quality, service and customer satisfaction are the emblems of Dolphin Movers and 
                    we demand high standards of ourselves whether we are carrying out a home moving service within the 
                    UK or large scale European business removals and storage. We are forever striving to be one of the 
                    best international moving companies in Europe, continually improving and expanding our domestic 
                    and international moving, shipping and logistics services.</p>
            </div>
            <div>
                <h3 className="text-[#FA4040] font-bold py-6 inline-block">Dolphin Movers is proud to be a member and achiever of the following:</h3>
            </div>
            <div className="md:flex md:max-w-fit h-auto justify-evenly gap-4">
                <div className="mb-4 md:w-1/3 md:justify-center md:mx-auto  text-center py-16 px-8 rounded-lg bg-gradient-to-r from-[#01096E] to-[#000000] text-white text-xl">British International Freight Association <span className="font-bold"><br/>(BIFA)</span></div>
                <div className="mb-4 md:w-1/3 md:justify-center text-center py-16 px-8 rounded-lg bg-gradient-to-r from-[#01096E] to-[#000000] text-white text-xl">United Kingdom Warehousing Association <span className="font-bold"><br/>(UKWA)</span></div>
                <div className="mb-4 md:w-1/3 md:h-auto md:justify-center text-center py-16 px-8 rounded-lg bg-gradient-to-r from-[#01096E] to-[#000000] text-white">Membership of UKWA provides the support business' needs to grow and succeed in fast-moving, rapidly changing and increasingly competitive marketplace</div>
            </div>
            <div className="py-6">
                <h1 className="text-[#01096E] text-center text-xl font-bold">HMRC APPROVED DEPOSITORY</h1>
                <p className="text-black font-normal py-8">The significance of this facility is mainly relevant for 
                inward business relocation services. Businesses and individual employees will understand that when 
                bringing over their possessions they will need to submit these to customs inspection and vetting. 
                In order to save the issue of inspections at their point of arrival where one item can cause the 
                whole consignment to be delayed, we can offer our depository.<br/><br/>
                This means that the whole consignment can go to our depository, and any items causing delay at customs 
                can be retained by us, but the remainder forwarded to their new property.</p>
            </div>
            <div className="py-6">
                <h1 className="text-[#01096E] text-center text-xl font-bold">ROAD HAULAGE ASSOCIATION INTERNATIONAL MEMBER</h1>
                <p className="text-black font-normal py-8">This membership gives us access to important sources of 
                information and industry news which helps us to stay ahead of the game. Timely information, 
                for instance about ongoing travel incidents and events, allows us to plan our customer's 
                moves more efficiently and keep customers informed of any changes or events which may affect their move.</p>
            </div>
            
        </main>
    )
}