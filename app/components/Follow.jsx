import Image from "next/image"
import Link from "next/link"

export default function FollowUs(){
    return(
        <main className="p-8">
            <div className="flex justify-center m-auto gap-8 items-center">
                <Image src={"/home/followus.svg"} alt={''} width={'100'} height={'100'} />
                <Link href={''}><Image className="w-full" src={"/home/facebook.svg"} alt={''} width={64} height={64} /></Link>
                <Link href={''}><Image className="w-full" src={"/home/Instagram.svg"} alt={''} width={64} height={64} /></Link>
                <Link href={''}><Image className="w-full" src={"/home/Twitter.svg"} alt={''} width={64} height={64} /></Link>
                <Link href={''}><Image className="w-full" src={"/home/Linkdin.svg"} alt={''} width={64} height={64} /></Link>
            </div>
        </main>
    )
}