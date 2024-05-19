/* eslint-disable react/prop-types */
export default function MoreAbout() {

    function Text({ children }) {
        return (
            <div className="text-sm px-8 md:text-lg">
                { children }
            </div>
        );
    } 
    
    function Header({ children }) {
        return (
            <div className="text-2xl font-bold px-9 italic md:mt-6">
                { children }
            </div>
        )
    }
    
    function Image({ src }) {
        return (
            <div className="">
                <img src={src} alt="" />
            </div>
        )
    }

    function Card({ children, reverse=false }) {
        return(
            <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row" } p-2 gap-6 md:gap-0 lg:p-0`}>
                <div className="md:w-1/2">
                    {children[0]}
                </div>
                <div className={`md:w-1/2 ${reverse ? "md:text-end" : "md:text-start" } flex flex-col justify-center gap-4`}>
                    {children[1]}
                    {children[2]}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col p-5 justify-center items-center gap-4 text-center xl:w-9/12 xl:mx-auto">
            <div className="text-2xl font-semibold leading-10 tracking-wide md:text-3xl md:mb-10 mt-10">Excellent Mapúa Education in Mindanao</div>
            <div className="flex flex-col gap-10 lg:gap-0">

                <Card reverse={true}>
                    <Image src="./more_about/about1.jpg" />
                    <Header>
                        Learner-Centered
                        <br />
                        Outcomes-Based Education
                    </Header>
                    <Text>
                        Through learner-centered, outcomes-based education (LC-OBE), MMCM ensures that students have access to personalized learning, focused on attaining industry standards through clearly defined outcomes. 
                    </Text>
                </Card>

                <Card>
                    <Image src="./more_about/about2.png" />
                    <Header>
                        Effective Learning Spaces
                    </Header>
                    <Text>
                        By fusing innovative physical learning spaces and digital learning environments, MMCM provides an inspiring environment to study, learn, and collaborate with peers. MMCM provides WiFi inside the campus, cutting-edge learning resources, and a robust digital learning management system.
                    </Text>
                </Card>

                <Card reverse={true}>
                    <Image src="./more_about/about3.jpg" />
                    <Header>
                        Mapúa Legacy
                    </Header>
                    <Text>
                        The academic excellence that Mapúa is known for is embedded in MMCM’s DNA. MMCM brings to Mindanao the World-Class Mapúa Education that produces graduates who are highly preferred by industries here and abroad.
                    </Text>
                </Card>

            </div>
            <a className="p-2 px-6 bg-red-600 text-white mt-10 rounded-sm transform hover:scale-110 hover:bg-blue-800 transition-all duration-300 ease-in-out">Read More</a>
        </div>
    );
}