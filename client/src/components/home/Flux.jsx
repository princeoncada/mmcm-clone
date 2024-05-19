export default function Flux() {
    return (
        <>
            <div className="p-5 py-40 md:py-20 flex justify-center xl:hidden" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./flux/flux.jpg)',
                backgroundSize: 'cover',
                backgroundPositionX: '40%',
                backgroundPositionY: '50%',
            }}>
                <div className="bg-white py-10 px-8 text-sm text-center flex flex-col items-center gap-6 md:w-96">
                    <div className="text-2xl font-bold">About Mapúa MCM FLUX</div>
                    <div>The hybrid flexible course format offers in-person, synchronous, or asynchronous online classes.</div>
                    <a className="bg-red-600 p-2.5 text-white">Read More</a>
                </div>
            </div>
            <div className="relative h-96 overflow-hidden hidden xl:block">
                <div className="absolute inset-0 bg-fixed" style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./flux/flux.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                }}>
                </div>
                <div className="relative z-10 p-5 py-40 md:py-20 flex justify-center items-center h-full">
                    <div className="bg-white py-10 px-8 text-sm text-center flex flex-col items-center gap-6 md:w-96">
                        <div className="text-2xl font-bold">About Mapúa MCM FLUX</div>
                        <div>The hybrid flexible course format offers in-person, synchronous, or asynchronous online classes.</div>
                        <a className="bg-red-600 p-2.5 px-4 text-white rounded-sm hover:bg-blue-800 hover:scale-110 transition-all duration-300 ease-in-out">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
}