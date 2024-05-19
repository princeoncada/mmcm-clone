export default function About() {
    return(
        <div className="p-4 xl:p-52" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./about/about-bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPositionX: '60%',
        }}>
            <div className="flex flex-col gap-5 md:gap-7 items-center md:items-start text-center md:text-start md:w-72 text-white p-4 py-20 xl:w-2/4">
                <div className="text-xl xl:text-2xl font-bold">
                    About Mapúa MCM
                </div>
                <div className="text-sm xl:text-base">
                    Mapúa Malayan Colleges Mindanao is a branch encompassing Mapua University&apos;s technological and academic excellence in Mindanao, building a community of competent and innovative leaders globally in demand.
                </div>
                <div className="p-2 xl:text-lg bg-red-600 px-6 hover:bg-blue-800 hover:scale-110 transition-all ease-in-out duration-300 rounded-sm transform">
                    Read More
                </div>
            </div>
        </div>
    );
}