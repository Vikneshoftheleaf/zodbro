import Image from "next/image"
export default function RenderUI({ data, sign }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6 lg:px-6">


        <div className="col-span-2 w-full h-full">
          <div className="min-h-full min-w-full flex flex-col justify-center items-center gap-4 lg:rounded-3xl rounded-bl-full rounded-br-full bg-white/10 backdrop-blur-lg  shadow-inner-glow text-white p-8 transition hover:bg-white/20">
            <Image src={`/signs/${sign}.png`} width={150} height={150}></Image>
            <h2 className="text-3xl font-bold text-center">{sign.toUpperCase()}</h2>
            <p className="text-center text-sm text-gray-300 mb-4">05/21 - 06/20</p>

          </div>
        </div>

        <div className="col-span-4 w-full lg:mt-0 mt-4 p-4">
          <div className="flex flex-col gap-6">

            <blockquote class="text-2xl font-semibold">
              <svg class="w-8 h-8 text-gray-400 dark:text-zinc-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p>{data.today_horoscope}</p>

            </blockquote>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

              <div className="flex gap-2 flex-col justify-center">

                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4 ">
                  <h1 className="text-center text-sm">Today's Vibe</h1>
                  <p className="text-center text-2xl">{data.today_vibe}</p></div>
              </div>


              <div className="flex flex-col justify-center">
                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4 flex flex-col gap-2">
                  <h1 className="text-center text-sm">Mood Meter</h1>
                  <div className="w-full bg-zinc-600 rounded-full dark:bg-gray-700">
                    <div
                      className={`text-base font-medium text-zinc-100 text-center p-0.5 leading-none rounded-full ${data.mood_indicator <= 20
                        ? 'bg-red-600'
                        : data.mood_indicator <= 40
                          ? 'bg-rose-600'
                          : data.mood_indicator <= 60
                            ? 'bg-blue-600'
                            : data.mood_indicator <= 80
                              ? 'bg-teal-600'
                              : 'bg-green-600'
                        }`}
                      style={{ width: `${data.mood_indicator}%` }}
                    >
                      {data.mood_indicator}%
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 -my-2">

              <div className="flex flex-col justify-center items-center gap-2 relative">

                <span
                  className={`absolute hidden -z-10 top-0 -right-2 lg:flex w-8 h-8 me-3 rounded-full ${data.luck === 1
                    ? 'bg-red-500'
                    : data.luck === 2
                      ? 'bg-rose-500'
                      : data.luck === 3
                        ? 'bg-blue-500'
                        : data.luck === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />

                <span
                  className={`absolute z-50 -top-1 -right-4 flex w-3 h-3 me-3 rounded-full ${data.luck === 1
                    ? 'bg-red-500'
                    : data.luck === 2
                      ? 'bg-rose-500'
                      : data.luck === 3
                        ? 'bg-blue-500'
                        : data.luck === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />


                <div className="rounded-md z-10 bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="text-sm text-center"> Luck</h1>
                  <p className="text-center text-2xl">{
                    (data.luck == 1) ? "Very Bad" : (data.luck == 2) ? "Bad" : (data.luck == 3) ? "Fair" : (data.luck == 4) ? "Good" : "Very Good"
                  }</p>

                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 relative">

                <span
                  className={`absolute hidden top-0 -right-2 lg:flex w-8 h-8 me-3 rounded-full ${data.health === 1
                    ? 'bg-red-500'
                    : data.health === 2
                      ? 'bg-rose-500'
                      : data.health === 3
                        ? 'bg-blue-500'
                        : data.health === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />

                <span
                  className={`absolute z-50 -top-1 -right-4 flex w-3 h-3 me-3 rounded-full ${data.health === 1
                    ? 'bg-red-500'
                    : data.health === 2
                      ? 'bg-rose-500'
                      : data.health === 3
                        ? 'bg-blue-500'
                        : data.health === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />

                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="text-sm text-center">Health</h1>

                  <p className="text-center text-2xl">{
                    (data.health == 1) ? "Very Bad" : (data.health == 2) ? "Bad" : (data.health == 3) ? "Fair" : (data.health == 4) ? "Good" : "Very Good"
                  }</p>

                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 relative">

                <span
                  className={`absolute hidden top-0 -right-2 lg:flex w-8 h-8 me-3 rounded-full ${data.mind === 1
                    ? 'bg-red-500'
                    : data.mind === 2
                      ? 'bg-rose-500'
                      : data.mind === 3
                        ? 'bg-blue-500'
                        : data.mind === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />

                <span
                  className={`absolute z-50 -top-1 -right-4 flex w-3 h-3 me-3 rounded-full ${data.mind === 1
                    ? 'bg-red-500'
                    : data.mind === 2
                      ? 'bg-rose-500'
                      : data.mind === 3
                        ? 'bg-blue-500'
                        : data.mind === 4
                          ? 'bg-teal-500'
                          : 'bg-green-500'
                    }`}
                />

                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="text-sm text-center">Mindset</h1>

                  <p className="text-center text-2xl">{
                    (data.mind == 1) ? "Very Bad" : (data.mind == 2) ? "Bad" : (data.mind == 3) ? "Fair" : (data.mind == 4) ? "Good" : "Very Good"
                  }</p>

                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 relative">

                <span
                  className={`absolute hidden top-0 -right-2 lg:flex w-8 h-8 me-3 rounded-full ${data.productivity === 1
                      ? 'bg-red-500'
                      : data.productivity === 2
                        ? 'bg-rose-500'
                        : data.productivity === 3
                          ? 'bg-blue-500'
                          : data.productivity === 4
                            ? 'bg-teal-500'
                            : 'bg-green-500'
                    }`}
                />

                <span
                  className={`absolute z-50 -top-1 -right-4 flex w-3 h-3 me-3 rounded-full ${data.productivity === 1
                      ? 'bg-red-500'
                      : data.productivity === 2
                        ? 'bg-rose-500'
                        : data.productivity === 3
                          ? 'bg-blue-500'
                          : data.productivity === 4
                            ? 'bg-teal-500'
                            : 'bg-green-500'
                    }`}
                />


                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="text-sm text-center">Productivity</h1>

                  <p className="text-center text-2xl">{
                    (data.productivity == 1) ? "Very Bad" : (data.productivity == 2) ? "Bad" : (data.productivity == 3) ? "Fair" : (data.productivity == 4) ? "Good" : "Very Good"
                  }</p>

                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="flex items-center justify-center text-sm"><span class="flex w-3 h-3 me-3 bg-teal-500 rounded-full"></span> Good Time</h1>
                  <p className="text-center text-2xl">{data.good_time}</p></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="rounded-md bg-white/10 backdrop-blur-lg w-full p-4">
                  <h1 className="flex items-center justify-center text-sm"><span class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span> Bad Time</h1>
                  <p className="text-center text-2xl">{data.bad_time}</p></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}