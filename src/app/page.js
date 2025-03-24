import Link from "next/link";

const zodiacSigns = [
  { name: "Aries", date: "Mar 21 - Apr 19", icon: "♈" },
  { name: "Taurus", date: "Apr 20 - May 20", icon: "♉" },
  { name: "Gemini", date: "May 21 - Jun 20", icon: "♊" },
  { name: "Cancer", date: "Jun 21 - Jul 22", icon: "♋" },
  { name: "Leo", date: "Jul 23 - Aug 22", icon: "♌" },
  { name: "Virgo", date: "Aug 23 - Sep 22", icon: "♍" },
  { name: "Libra", date: "Sep 23 - Oct 22", icon: "♎" },
  { name: "Scorpio", date: "Oct 23 - Nov 21", icon: "♏" },
  { name: "Sagittarius", date: "Nov 22 - Dec 21", icon: "♐" },
  { name: "Capricorn", date: "Dec 22 - Jan 19", icon: "♑" },
  { name: "Aquarius", date: "Jan 20 - Feb 18", icon: "♒" },
  { name: "Pisces", date: "Feb 19 - Mar 20", icon: "♓" },
];

export const metadata = {
  title: "Zodbro | Daily  horoscope",
  description: "Daily horoscope for all the zodiac signs.",
};


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Daily Horoscope</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <Link key={sign.name} href={`/sign/${sign.name.toLowerCase()}`} passHref>
            <div className="bg-white shadow-lg rounded-xl p-4 text-center cursor-pointer hover:bg-gray-100 transition">
              <div className="text-4xl">{sign.icon}</div>
              <h2 className="font-semibold text-lg mt-2">{sign.name}</h2>
              <p className="text-sm text-gray-500">{sign.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
