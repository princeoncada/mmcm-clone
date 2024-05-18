import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState({
        more_about: false,
        more_admission: false,
        more_program: false,
        more_shs: false,
        more_college: false,
        more_atycb: false,
        more_cas: false,
        more_ccis: false,
        more_cea: false,
        more_office: false
    });

    function handleMenu() {
        setMenu(x => !x);
    }

    function handleSubMenu(value) {
        setSubMenu((x) => {
            return {
                ...x,
                [value]: !x[value]
            };
        });
    }

    return (
        <>
            <div className="flex flex-row justify-evenly px-5">
                <a href="">
                    <img src="./mmcm-logo.png" className="w-1/4" alt="" />
                </a>
                <button onClick={handleMenu} className="flex flex-col gap-1 justify-center items-start">
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "rotate-45 translate-y-2.5" : "" }`}></span>
                    <span className={`h-1.5 bg-gray-900 transition-width ease-in-out duration-300 rounded ${menu ? "w-0" : "w-8" }`}></span>
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "-rotate-45 -translate-y-2.5" : "" }`}></span>
                </button>
            </div>
            <div>
                <div className={`relative  h-0 w-screen bg-opacity-90 transition ease-in-out duration-300 text-sm ${menu ? "" : "-translate-x-full"}`}>
                    <div className="flex flex-col bg-gray-900">
                        <div className="flex flex-col text-white">
                            <div className="flex flex-row justify-between items-center gap-3">
                                <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    About
                                </a>
                                <button className="w-8 h-8 mr-3" onClick={() => { handleSubMenu("more_about") }}>{ !subMenu["more_about"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i> }</button>
                            </div>
                            <div className={`pl-5 ${ !subMenu["more_about"] ? "hidden" : "block" }`}>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Mapua
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Meet the Administration
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Campus Facilities
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col text-white pr-3">
                            <div className="flex flex-row justify-between items-center gap-3">
                                <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Admissions
                                </a>
                                <button className="w-8 h-8" onClick={() => { handleSubMenu("more_admission") }}>{ !subMenu["more_admission"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                            </div>
                            <div className={`pl-5 ${ !subMenu["more_admission"] ? "hidden" : "block"}`}>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Frequently Asked Questions
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Protocols for Limited Face-to-Face Classes
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Scholarships
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Student Testimonies
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col text-white pr-3">
                            <div className="flex flex-row justify-between items-center gap-3">
                                <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Programs
                                </a>
                                <button className="w-8 h-8" onClick={() => { handleSubMenu("more_program") }}>{ !subMenu["more_program"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                            </div>
                            <div className={`pl-5 ${ !subMenu["more_program"] ? "hidden" : "block"}`}>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Junior High School (JHS)
                                </a>
                                <a className="text-white flex flex-row justify-between items-center flex-1">
                                    <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                        Senior High School (SHS)
                                    </a>
                                    <button className="w-8 h-8" onClick={() => { handleSubMenu("more_shs") }}>{ !subMenu["more_shs"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                </a>
                                <div className={`pl-5 ${!subMenu["more_shs"] ? "hidden" : "block"}`}>
                                    <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                        Humanities and Social Sciences
                                    </a>
                                    <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                        Information and Communications Technology
                                    </a>
                                    <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                        Science, Technology, Engineering, and Mathematics
                                    </a>
                                </div>
                                <a className="text-white flex flex-row justify-between items-center flex-1">
                                    <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                        College
                                    </a>
                                    <button className="w-8 h-8" onClick={() => { handleSubMenu("more_college") }}>{!subMenu["more_college"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                </a>
                                <div className={`pl-5 ${ !subMenu["more_college"] ? "hidden" : "block"}`}>
                                    <a className="text-white flex flex-row justify-between items-center flex-1">
                                        <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Alfonso T. Yuchengco College of Business
                                        </a>
                                        <button className="w-8 h-8" onClick={() => { handleSubMenu("more_atycb") }}>{!subMenu["more_atycb"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                    </a>
                                    <div className={`pl-5 ${!subMenu["more_atycb"] ? "hidden" : "block"}`}>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Accountancy
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Entrepreneurship
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Management Accounting
                                        </a>
                                    </div>
                                    <a className="text-white flex flex-row justify-between items-center flex-1">
                                        <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            College of Arts and Science
                                        </a>
                                        <button className="w-8 h-8" onClick={() => { handleSubMenu("more_cas") }}>{!subMenu["more_cas"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                    </a>
                                    <div className={`pl-5 ${!subMenu["more_cas"] ? "hidden" : "block"}`}>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Biology
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Communication
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Multimedia Arts
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Psychology
                                        </a>
                                    </div>
                                    <a className="text-white flex flex-row justify-between items-center flex-1">
                                        <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            College of Computer and Information Science
                                        </a>
                                        <button className="w-8 h-8" onClick={() => { handleSubMenu("more_ccis") }}>{!subMenu["more_ccis"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                    </a>
                                    <div className={`pl-5 ${!subMenu["more_ccis"] ? "hidden" : "block"}`}>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Computer Science
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Entertainment and Multimedia Computing
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Information Systems
                                        </a>
                                    </div>
                                    <a className="text-white flex flex-row justify-between items-center flex-1">
                                        <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            College of Engineering and Architecture
                                        </a>
                                        <button className="w-8 h-8" onClick={() => { handleSubMenu("more_cea") }}>{!subMenu["more_cea"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                                    </a>
                                    <div className={`pl-5 ${!subMenu["more_cea"] ? "hidden" : "block"}`}>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Architecture
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Chemical Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Civil Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Computer Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Electrical Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Electronics Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Industrial Engineering
                                        </a>
                                        <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                            Mechanical Engineering
                                        </a>
                                    </div>
                                    <a className="text-white flex flex-row  p-4 justify-between items-center flex-1">
                                        College of Health Sciences
                                    </a>
                                    <a className="text-white flex flex-row  p-4 justify-between items-center flex-1">
                                        MMCM Virtual Lifelong Learning Program
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col text-white pr-3">
                            <div className="flex flex-row justify-between items-center gap-3">
                                <a href="/" className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Offices
                                </a>
                                <button className="w-8 h-8" onClick={() => { handleSubMenu("more_office") }}>{!subMenu["more_office"] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>
                            </div>
                            <div className={`pl-5 ${!subMenu["more_office"] ? "hidden" : "block"}`}>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Registrar
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Treasury
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Clinic
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Guidance and Counseling
                                </a>
                                <a className="text-white p-4 flex flex-row justify-between items-center flex-1">
                                    Lifelong Learning
                                </a>
                            </div>
                        </div>

                        <a href="" className="text-white p-4">News</a>
                        <a href="" className="text-white p-4">Student Life</a>
                        <div className="p-4 flex">
                            <a href="" className="p-4 px-8 text-white bg-red-600">
                                Apply Now
                            </a>
                        </div>
                        <div className="p-4 pb-6 flex">
                            <a href="" className="p-4 px-8 text-white bg-blue-800">
                                Ask Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}