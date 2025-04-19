export default function RenderUI({ data, sign }) {
  return (
    <>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-4">


        <div className=" col-span-2 max-w-xl h-full mx-auto  px-6">
          <div className="min-h-full flex flex-col justify-center items-center gap-4 rounded-3xl bg-white/10 backdrop-blur-lg  shadow-inner-glow text-white p-8 transition hover:bg-white/20">
            <h2 className="text-3xl font-bold text-center mb-2">Gemini</h2>
            <p className="text-center text-sm text-gray-300 mb-4">05/21 - 06/20</p>
            <p className="text-gray-200 text-base font-extralight leading-relaxed text-center">
              Gemini is an air sign known for being curious, witty, and expressive.
              Today brings clarity in communication and opportunities to connect with new people. Embrace spontaneity and let your natural charm shine.
            </p>
          </div>
        </div>

        <div className="col-span-4 ">
          <div className="flex flex-col gap-2">
            <h1 className="">Today's Vibe: {data.todat_vibe}</h1>
            <p>Today's Horoscope: {data.today_horoscope}</p>
            <p>Love: {data.love}</p>
            <p>Career: {data.carrer}</p>
            <p>Wealth: {data.wealth}</p>
            <p>Health: {data.health}</p>
            <p>Good Time: {data.good_time}</p>
            <p>Bad Time: {data.bad_time}</p>
            <p>Lucky Elements: <ul> {data.lucky_elements.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}</ul></p>
          </div>
          <p>Mood Indicator: {data.mood_indicator}</p>

        </div>


      </div>
    </>
  )
}