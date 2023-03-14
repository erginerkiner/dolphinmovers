import Link from "next/link"
import Image from "next/image"

export default function Features(){
  return(
    <main className="md:flex md:px-48 justify-center py-10">
        <div>
          <Link href={'/our-services'}><Image className="md:w-full" src={'/home/multimodal.png'} alt={''} width={'500'} height={'300'}/></Link>        
        </div>
        <div>
          <Link href={'/our-services'}><Image className="md:w-full" src={'/home/seafright.png'} alt={''} width={'500'} height={'300'}/></Link>
        </div>
        <div>
          <Link href={'/our-services'}><Image className="md:w-full" src={'/home/airfreight.png'} alt={''} width={'500'} height={'300'}/></Link>
        </div>
        <div>
          <Link href={'/our-services'}><Image className="md:w-full" src={'/home/warehousing.png'} alt={''} width={'500'} height={'300'}/></Link>
        </div>
        <div>
          <Link href={'/our-services'}><Image className="md:w-full" src={'/home/cargoins.png'} alt={''} width={'500'} height={'300'}/></Link>
        </div>
    </main>
  )
}