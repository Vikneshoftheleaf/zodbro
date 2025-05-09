import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (

        <div className="p-6 flex justify- items-center">

            <Link href={'/'} className='flex items-center gap-2'>

                <div>
                    <Image src={'/logo.png'} height={50} width={50} alt='logo' className='rounded-[100%]'></Image>
                </div>

                <div>
                    <p className="text-sm font-thin">Get Your Daily</p>
                    <h1 className="font-bold text-lg -mt-1">Horoscope</h1>

                </div>
            </Link>



        </div>
    )
}