import Link from "next/link";
import Image from "next/image";

const zodiacSigns = [
  { name: "Aries", date: "03/21 - 04/19" },
  { name: "Taurus", date: "04/20 - 05/20" },
  { name: "Gemini", date: "05/21 - 06/20" },
  { name: "Cancer", date: "06/21 - 07/22" },
  { name: "Leo", date: "07/23 - 08/22" },
  { name: "Virgo", date: "08/23 - 09/22" },
  { name: "Libra", date: "09/23 - 10/22" },
  { name: "Scorpio", date: "10/23 - 11/21" },
  { name: "Sagittarius", date: "11/22 - 12/21" },
  { name: "Capricorn", date: "12/22 - 01/19" },
  { name: "Aquarius", date: "01/20 - 02/18" },
  { name: "Pisces", date: "02/19 - 03/20" },
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
            <div className="rounded-full text-center cursor-pointer hover:bg-white/20 transition">

              <Image src={`/signs/${sign.name.toLowerCase()}.png`} alt={sign.name} height={80} width={80} ></Image>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xl mt-2">{sign.name}</h2>
              <p className="text-sm font-thin text-gray-200">{sign.date}</p>
            </div>
          </Link>

        ))}
      </div>

      <div className="hidden lg:block col-span-2 max-w-xl h-full mx-auto  px-6">
        <div className="min-h-full flex flex-col justify-center items-center gap-4 rounded-3xl bg-white/10 backdrop-blur-lg  shadow-inner-glow text-white p-8 transition hover:bg-white/20">
          <Image src={'/signs/gemini.png'} alt="gemini" height={80} width={80} className=""></Image>
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
