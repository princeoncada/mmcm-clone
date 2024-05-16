export default function Header() {
    return (
        <div className="flex flex-row justify-evenly md:justify-end bg-slate-100 text-gray-500 p-2 md:pr-10">
                <div className="flex flex-row justify-center md:pr-10 lg:pr-10 text-center">
                    <a href="" className="p-2 lg:px-4 text-xs lg:text-lg">MapúaMCM Digital</a>
                    <a href="" className="p-2 lg:px-4 text-xs lg:text-lg">Library</a>
                    <a href="" className="p-2 lg:px-4 text-xs lg:text-lg">Downloadables</a>
                </div>
                <div className="flex items-center">
                    <i className='bx bx-search text-2xl font-thin'></i>
                </div>
            </div>
    );
}