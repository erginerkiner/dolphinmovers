"use client"
import Image from 'next/image'
import Hero from './components/Hero'
import Features from './components/Features'
import Cards from './components/Cards'
import Follow from './components/Follow'

export default function Home() {
  return (
    <main>
     <Hero />
     <Cards />   
     <Follow />  
     <Features />
     <div>
      <h1 className='text-2xl font-bold text-[#01096E] text-center p-2'>HOW DOLPHIN MARITIME FREIGHT WORKS?</h1>
      <Image className='md:flex md:mx-auto md:w-3/4 p-10' src={"/home/workflow.png"} alt={''} width={'1440'}height={'734'} />
     </div>
     <div className='bg-gradient-to-r from-[#01096E] to-[#000000] rounded-xl p-10'>
      <p className='text-white text-center font-normal'>We’re proud to be experts in quick, cost-effective deliveries to Europe and across the globe.
      Our team are determined to provide a professional and reliable service every time. We offer comprehensive range of services that include domestic and inteernationl removals, vehicle shipping, corporate moves, freight forwarding, 
        storage, including self  storage and fine art shipping.<br/><br/>
From commercial deliveries on behalf of retailers, manufacturers and exporters, to freight sent by individuals looking to import or ship their goods and belongings abroad, 
we have the experience necessary to complete efficient and dedicated delivery freight shipments across Europe.<br/><br/>

We are based at in North London by the M25 and only 20 minutes away from Central London. Our facility comprises 88,000 sq ft of high bay pallet storage space and 
2,000 pallet locations. Our purpose – built warehouse is fully alarmed and monitored bt CCTV 24 hours a day, seven days a week. 
Our workforce is experienced, enthusiastic and supportive and they work alongside a global network trusted partners and agents in over one hundred countries. <br/><br/>

Our promise is to strive to understand and serve the distinct needs of each customer in an adept, courteous and cost effctive manner.<br/><br/>

We have a number of other services available including the arrangement of insurance on behalf of clients for commercial shipments, 
tail lift delivery services across much of Europe and we even specialise in pallet delivery via road, sea or air depending on your requirements
and the final destination of your freight.<br/><br/>

If you’re interested in any of our freight delivery services, feel free to use our online quote form today for a quick but completely free delivery quote.
Alternatively, if you have any further questions feel free to take a look around our site, or get in touch today for more information.</p>
     </div>
    </main>
  )
}
