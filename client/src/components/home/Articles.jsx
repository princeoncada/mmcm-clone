export default function Articles() {
    return(
        <div className="bg-gray-100 flex flex-col justify-center items-center p-8">
            <div className="text-2xl font-bold tracking-wide mb-5">Featured Articles</div>
            <div className="flex flex-row gap-8">
                <div className="p-8 pr-0 flex flex-col gap-10 items-start md:items-end md:w-1/2">
                    <div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col items-center text-red-500">
                                <div className="font-bold text-base tracking-tight">SEP</div>
                                <div className="font-bold text-2xl tracking-wide">27</div>
                            </div>
                            <div className="flex flex-col gap-1 mt-0.5">
                                <div className="flex flex-row items-center gap-1 text-red-500 font-bold"><i className='bx bx-time bx-flip-horizontal'></i> 8:00 am - 5:00 pm </div>
                                <div className="font-bold text-xl text-gray-500 md:w-64 lg:w-80">College Graduation Day</div>
                                <a className="text-sm mt-1.5 text-gray-500">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col items-center text-red-500">
                                <div className="font-bold text-base tracking-tight">JUL</div>
                                <div className="font-bold text-2xl tracking-wide">27</div>
                            </div>
                            <div className="flex flex-col gap-1 mt-0.5">
                                <div className="flex flex-row items-center gap-1 text-red-500 font-bold"><i className='bx bx-time bx-flip-horizontal'></i> All day </div>
                                <div className="font-bold text-xl text-gray-500 md:w-64 lg:w-80">End of Midyear Class - High School</div>
                                <a className="text-sm mt-1.5 text-gray-500">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col items-center text-red-500">
                                <div className="font-bold text-base tracking-tight">JUL</div>
                                <div className="font-bold text-2xl tracking-wide">22</div>
                            </div>
                            <div className="flex flex-col gap-1 mt-0.5">
                                <div className="flex flex-row items-center gap-1 text-red-500 font-bold"><i className='bx bx-time bx-flip-horizontal'></i> July 22 - July 27 </div>
                                <div className="font-bold text-xl text-gray-500 md:w-64 lg:w-80">Final Assessment for Midyear Class - High School</div>
                                <a className="text-sm mt-1.5 text-gray-500">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden flex-col md:w-1/2 md:flex p-8 gap-4 pl-0 justify-start">
                    <div className="bg-white p-4 flex flex-col gap-4 rounded xl:w-96">  
                        <div>
                            ISO 21001:2018: Ensuring Mapúa MCM’s Excellence and Relevance through Quality Assurance and Enhancement			
                        </div>
                        <div className="text-xs">
                            Mapúa Malayan Colleges Mindanao continues its journey towards international excellence in education after having received the ISO 21001:2018 EOMS Standard for the …
                        </div>
                    </div>
                    <div className="bg-white p-4 flex flex-col gap-4 rounded xl:w-96"> 
                        <div>
                            The Future of the Online Classroom: Flipped Learning			
                        </div>
                        <div className="text-xs">
                            The twenty-first century has introduced us to a new wave of the future, including the rapidly advancing segments in higher education. This …
                        </div>
                    </div>
                </div>
            </div>
            <a className="p-2 px-4 border-sky-700 text-sky-700 hover:scale-110 rounded-sm hover:bg-sky-700 hover:text-white transition-all duration-300 ease-in-out" style={{
                borderWidth: '1px',
            }}>
                View All
            </a>
        </div>
    );
}