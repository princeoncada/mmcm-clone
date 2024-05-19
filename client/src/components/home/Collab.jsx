export default function Collab() {
    return(
        <div className="w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url("./collab/collab.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '50%'
        }}>
            <div className="h-full flex flex-row md:flex-col items-center py-56 lg:gap-0 gap-10 lg:flex-row">
                <div className="lg:pl-12">
                    <img src="./collab/asu-logo.png" alt="" />
                </div>
                <div className="hidden md:flex flex-col px-24 md:px-0 lg:text-start lg:items-start text-center items-center lg:pr-32 xl:pr-64 gap-8">
                    <div className="text-4xl font-semibold text-blue-800" style={{
                        lineHeight: '3rem'
                    }}>
                        Global excellence in Business and Health Sciences education <br />
                        <span className="italic font-bold text-red-600"> in collaboration with Arizona State University</span>
                    </div>
                    <div className=" text-sky-800">
                        Through this groundbreaking collaboration with Arizona State University, ranked #1 in the US for innovation, students will gain access to uniquely tailored educational opportunities in business and health sciences providing global immersion and readiness, advanced and immersive facilities, real-world experiential learning and digital mastery.
                    </div>
                    <a className="p-2 px-6 text-white rounded-sm bg-red-600 hover:bg-blue-800 transform hover:scale-110 transition-all ease-in-out duration-300">Read More</a>
                </div>
            </div>
        </div>
    );
}