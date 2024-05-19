/* eslint-disable react/prop-types */
export default function Program() {

    function Component({ href, children }) {
        return (
            <div className="flex flex-col items-center justify-between gap-5 bg-white p-5 py-16 rounded-lg">
                <div className="flex flex-col gap-5">
                    <div className="text-center text-xl font-bold">
                        {children[0].props.children}
                    </div>
                    <div className="text-center text-sm lg:px-8">
                        {children[1].props.children}
                    </div>
                </div>
                <a href={href} className="mt-4 p-2 border-sky-700 text-sky-700 rounded-sm transform hover:scale-110 hover:bg-sky-700 hover:text-white transition-all duration-300 ease-in-out" style={{
                    borderWidth: '1px'
                }}>
                    Read More
                </a>
            </div>
        );
    }

    return (
        <div className="bg-gray-300 p-5 py-9 flex flex-col md:flex-row gap-9 xl:p-20 xl:px-40">
            <Component>
                <div>Junior High School</div>
                <div>Mapúa MCM JHS equips essential competencies for SHS and College with globally competitive education.</div>
            </Component>
            <Component>
                <div>Senior High School</div>
                <div>Mapúa MCM SHS is setting the bar in the delivery of outcomes-based education in Mindanao and the rest of the world.</div>
            </Component>
            <Component>
                <div>College</div>
                <div>Mapúa MCM delivers world-class education, producing graduates highly preferred by industries here and abroad.</div>
            </Component>
        </div>
    );
}