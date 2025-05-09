'use client'

import Link from "next/link";
import Image from "next/image";

const zodiacSigns = [
  {
    name: "Aries",
    date: "03/21 - 04/19",
    planet: "Mars",
    color: { text: "text-red-600", bg: "bg-red-700" }
  },
  {
    name: "Taurus",
    date: "04/20 - 05/20",
    planet: "Venus",
    color: { text: "text-green-700", bg: "bg-emerald-800" }
  },
  {
    name: "Gemini",
    date: "05/21 - 06/20",
    planet: "Mercury",
    color: { text: "text-yellow-400", bg: "bg-sky-400" }
  },
  {
    name: "Cancer",
    date: "06/21 - 07/22",
    planet: "Moon",
    color: { text: "text-gray-200", bg: "bg-cyan-200" }
  },
  {
    name: "Leo",
    date: "07/23 - 08/22",
    planet: "Sun",
    color: { text: "text-yellow-500", bg: "bg-orange-500" }
  },
  {
    name: "Virgo",
    date: "08/23 - 09/22",
    planet: "Mercury",
    color: { text: "text-lime-700", bg: "bg-lime-200" }
  },
  {
    name: "Libra",
    date: "09/23 - 10/22",
    planet: "Venus",
    color: { text: "text-pink-400", bg: "bg-blue-200" }
  },
  {
    name: "Scorpio",
    date: "10/23 - 11/21",
    planet: "Pluto",
    color: { text: "text-gray-900", bg: "bg-rose-900" }
  },
  {
    name: "Sagittarius",
    date: "11/22 - 12/21",
    planet: "Jupiter",
    color: { text: "text-purple-600", bg: "bg-indigo-700" }
  },
  {
    name: "Capricorn",
    date: "12/22 - 01/19",
    planet: "Saturn",
    color: { text: "text-neutral-800", bg: "bg-green-900" }
  },
  {
    name: "Aquarius",
    date: "01/20 - 02/18",
    planet: "Uranus",
    color: { text: "text-cyan-500", bg: "bg-blue-500" }
  },
  {
    name: "Pisces",
    date: "02/19 - 03/20",
    planet: "Neptune",
    color: { text: "text-indigo-300", bg: "bg-teal-300" }
  }
];



export default function HomeComponent()
{
    return(
        <div className="w-screen">

      <div className="m-auto lg:w-2/3 w-full grid grid-cols-3 md:grid-cols-4 gap-6 ">
        {zodiacSigns.map((sign) => (
          <Link key={sign.name} href={`/sign/${sign.name.toLowerCase()}`} passHref className="flex flex-col gap-2 justify-center items-center">
            <div className="rounded-full text-center cursor-pointer hover:bg-white/20 transition">

              <Image src={`/signs/${sign.name.toLowerCase()}.png`} alt={sign.name} height={80} width={80} ></Image>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xl ">{sign.name}</h2>
              <p className="flex items-center justify-center text-sm bg-white/10 px-2 py-1 rounded-full "><span class={`flex w-3 h-3 me-1 ${sign.color.bg} rounded-full`}></span>{sign.planet}</p>
            </div>
          </Link>

        ))}
      </div>

    

    </div>
    )
}