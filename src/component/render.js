import Image from "next/image"
export default function RenderUI({ data, sign }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6 mt-4 lg:px-6">


        <div className="col-span-2 w-full h-full">
          <div className="min-h-full min-w-full flex flex-col justify-center items-center gap-4 lg:rounded-3xl rounded-bl-full rounded-br-full bg-white/10 backdrop-blur-lg  shadow-inner-glow text-white p-8 transition hover:bg-white/20">
            <Image src={`/signs/${sign}.png`} width={80} height={80}></Image>
            <h2 className="text-3xl font-bold text-center">{sign.toUpperCase()}</h2>
            <p className="text-center text-sm text-gray-300 mb-4">05/21 - 06/20</p>
            
          </div>
        </div>

        <div className="col-span-4 w-full lg:mt-0 mt-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="">Today's Vibe: {data.today_vibe}</h1>
            <p>Today's Horoscope: {data.today_horoscope}</p>
            <div className="flex gap-2 w-full">
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4"><p>Love: {data.love}</p></div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4 "><p>Career: {data.career}</p>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4"><p>Wealth: {data.wealth}</p></div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4 "><p>Health: {data.health}</p></div>
            </div>

            <div className="flex gap-2 w-full">
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4"><p>Good Time: {data.good_time}</p></div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg w-full p-4 "><p>Bad Time: {data.bad_time}</p></div>
            </div>
            <p>Lucky Elements: {data.lucky_elements.map((tip, idx) => (<span key={idx}>{tip}, </span>))}</p>

            <p>Mood Indicator: {data.mood_indicator}</p>

          </div>
        </div>

      </div>
    </>
  )
}