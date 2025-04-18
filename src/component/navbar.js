export default function Navbar() {
    return (

        <div className="p-6 flex justify-between items-center">

            <div>
                <p className="text-sm font-thin">Get Your Daily</p>
                <h1 className="font-bold text-2xl">Horoscope</h1>

            </div>

            <div className="flex gap-2  items-center justify-center">
                
                <div className="flex gap-4 items-center py-4 px-6 bg-white/10 backdrop-blur-lg rounded-full text-white text-center ">
                    <h2 className="text-xl font-semibold mb-1">♊  Viknesh</h2>
                </div>

            </div>

        </div>
    )
}