import Link from "next/link";
import Image from "next/image";

import Aries from "@/signs/aries.png"
import Taurus from "@/signs/taurus.png"
import Gemini from "@/signs/gemini.png"
import Cancer from "@/signs/cancer.png"
import Leo from "@/signs/leo.png"
import Virgo from "@/signs/virgo.png"
import Libra from "@/signs/libra.png"
import Scorpio from "@/signs/scorpio.png"
import Sagittarius from "@/signs/sagittarius.png"
import Capricorn from "@/signs/capricorn.png"
import Aquarius from "@/signs/aquarius.png"
import Pisces from "@/signs/pisces.png"

const zodiacSigns = [
  { name: "Aries", date: "03/21 - 04/19", icon: "♈", image: Aries },
  { name: "Taurus", date: "04/20 - 05/20", icon: "♉", image: Taurus },
  { name: "Gemini", date: "05/21 - 06/20", icon: "♊", image: Gemini },
  { name: "Cancer", date: "06/21 - 07/22", icon: "♋", image: Cancer },
  { name: "Leo", date: "07/23 - 08/22", icon: "♌", image: Leo },
  { name: "Virgo", date: "08/23 - 09/22", icon: "♍", image: Virgo },
  { name: "Libra", date: "09/23 - 10/22", icon: "♎", image: Libra },
  { name: "Scorpio", date: "10/23 - 11/21", icon: "♏", image: Scorpio },
  { name: "Sagittarius", date: "11/22 - 12/21", icon: "♐", image: Sagittarius },
  { name: "Capricorn", date: "12/22 - 01/19", icon: "♑", image: Capricorn },
  { name: "Aquarius", date: "01/20 - 02/18", icon: "♒", image: Aquarius },
  { name: "Pisces", date: "02/19 - 03/20", icon: "♓", image: Pisces },
];


export const metadata = {
  title: "Zodbro | Daily  horoscope",
  description: "Daily horoscope for all the zodiac signs.",
};


export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4">

      <div className="col-span-4 grid grid-cols-3 md:grid-cols-4 gap-6 ">
        {zodiacSigns.map((sign) => (
          <Link key={sign.name} href={`/sign/${sign.name.toLowerCase()}`} passHref className="flex flex-col justify-center items-center">
            <div className="rounded-full text-center cursor-pointer transition  brightness-0 invert">
              <Image src={sign.image} alt={sign.name} height={64} width={64} style={{ filter: 'invert(1) brightness(0)' }}></Image>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xk mt-2">{sign.name}</h2>
              <p className="text-xs font-thin text-gray-200">{sign.date}</p>
            </div>
          </Link>

        ))}
      </div>

      <div className="hidden lg:block col-span-2 max-w-xl h-full mx-auto  px-6">
        <div className="min-h-full flex flex-col justify-center items-center gap-4 rounded-3xl bg-white/10 backdrop-blur-lg  shadow-inner-glow text-white p-8 transition hover:bg-white/20">
        <Image src={Gemini} alt="gemini" height={80} width={80} className=" invert"></Image>
          <h2 className="text-3xl font-bold text-center mb-2">Gemini</h2>
          <p className="text-center text-sm text-gray-300 mb-4">05/21 - 06/20</p>
          <p className="text-gray-200 text-base font-extralight leading-relaxed text-center">
            Gemini is an air sign known for being curious, witty, and expressive.
            Today brings clarity in communication and opportunities to connect with new people. Embrace spontaneity and let your natural charm shine.
          </p>
        </div>
      </div>

    </div>
  );
}
