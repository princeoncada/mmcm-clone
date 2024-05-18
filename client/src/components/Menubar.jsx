import { useState } from "react";
import MobileMenu from "./menubar/MobileMenu.jsx";
import DesktopMenu from "./menubar/DesktopMenu.jsx";

export default function MenuBar() {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState({
        about: false,
        admission: false,
        program: false,
        office: false,
        student_life: false,
        news: false,
        sustainability: false
    });

    const [programMenu, setProgramMenu] = useState({
        shs: false,
        college: false
    });

    const [collegeMenu, setCollegeMenu] = useState({
        atycb: false,
        cas: false,
        ccis: false,
        cea: false
    });

    function handleMenu() {
        setMenu(x => !x);
    }

    function handleSubMenu(value) {
        setSubMenu((x) => {
            return {
                ...!x,
                [value]: !x[value]
            };
        });
    }

    function handleProgramMenu(value) {
        setProgramMenu((x) => {
            return {
                ...!x,
                [value]: !x[value]
            };
        });
    }

    function handleCollegeMenu(value) {
        setCollegeMenu((x) => {
            return {
                ...!x,
                [value]: !x[value]
            };
        });
    }

    function handleBorderOnEnter(value) {
        if (value === "college" || value === "shs") {
            setProgramMenu((x) => {
                return {
                    ...x,
                    [value]: true
                };
            });
        } else {
            setSubMenu((x) => {
                return {
                    ...x,
                    [value]: true
                };
            });
        }
    }

    function handleBorderOnLeave(value) {
        if (value === "college" || value === "shs") {
            setProgramMenu((x) => {
                return {
                    ...x,
                    [value]: false
                };
            });
        } else {
            setSubMenu((x) => {
                return {
                    ...x,
                    [value]: false
                };
            });
        }
    }

    return (
        <>
            <div className="flex flex-row justify-evenly lg:justify-between px-5 lg:h-24">
                <a href="" className="lg:hidden">
                    <img src="./mmcm-logo.png" className="w-1/4" alt="" />
                </a>
                <a href="" className="hidden lg:flex py-3">
                    <img src="./mmcm-logo2.png" alt="" />
                </a>
                <div className="hidden lg:flex justify-center items-center font-medium z-20">

                    <DesktopMenu stateKey={ "about" } state={ subMenu } handlerEnter={ handleBorderOnEnter } handlerLeave={ handleBorderOnLeave }>
                        <div>
                            Mapua
                        </div>
                        <div>
                            Meet the Administration
                        </div>
                        <div>
                            Campus Facilities
                        </div>
                    </DesktopMenu>

                    <div>
                        <a href="" onMouseEnter={() => { handleBorderOnEnter("admission") }} onMouseLeave={() => { handleBorderOnLeave("admission") }} className={`p-4 transition-border-color ease-in-out duration-300 border-b-4 ${ subMenu["admission"] ? "border-gray-700" : "border-white"}`}>Admission <i className='bx bx-caret-down'></i></a>
                        <div className={`${ subMenu["admission"] ? "opacity-100" : "opacity-0 invisible"} flex flex-col absolute transition-all ease-out duration-300`} style={{
                            transform: 'translateY(1.15rem)'
                        }}>
                            <a onMouseEnter={() => { handleBorderOnEnter("admission") }} onMouseLeave={() => { handleBorderOnLeave("admission") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Frequently Asked Questions
                            </a>
                            <a onMouseEnter={() => { handleBorderOnEnter("admission") }} onMouseLeave={() => { handleBorderOnLeave("admission") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Scholarships
                            </a>
                            <a onMouseEnter={() => { handleBorderOnEnter("admission") }} onMouseLeave={() => { handleBorderOnLeave("admission") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Student Testimonies
                            </a>
                            <a onMouseEnter={() => { handleBorderOnEnter("admission") }} onMouseLeave={() => { handleBorderOnLeave("admission") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Protocols for Limited Face-to-Face Classes
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <a href="" onMouseEnter={() => { handleBorderOnEnter("program") }} onMouseLeave={() => { handleBorderOnLeave("program") }} className={`p-4 transition-border-color ease-in-out duration-300 border-b-4 ${ subMenu["program"] ? "border-gray-700" : "border-white"}`}>Program <i className='bx bx-caret-down'></i></a>
                        <div className={`${ subMenu["program"] ? "opacity-100" : "opacity-0 invisible"} flex flex-col absolute transition-all ease-out duration-300`} style={{
                            transform: 'translateY(1.15rem)'
                        }}>
                            <a onMouseEnter={() => { handleBorderOnEnter("program") }} onMouseLeave={() => { handleBorderOnLeave("program") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Frequently Asked Questions
                            </a>
                            <div className="flex flex-row relative">
                                <a onMouseEnter={() => { handleBorderOnEnter("program"); handleBorderOnEnter("college") }} onMouseLeave={() => { handleBorderOnLeave("program"); handleBorderOnLeave("college") }} href="" className="flex-1 flex flex-row items-center justify-between p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                    College <i className='bx bx-caret-right'></i>
                                </a>
                                <div className={`${ programMenu["college"] ? "opacity-100" : "opacity-0 invisible"} flex flex-col absolute transition-all ease-out duration-300`} style={{
                                    transform: 'translateX(14.65rem)'
                                }}>
                                    <a href="" onMouseEnter={() => { handleBorderOnEnter("program"); handleBorderOnEnter("college") }} onMouseLeave={() => { handleBorderOnLeave("program"); handleBorderOnLeave("college") }} className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300 m-auto">
                                        Alfonso T. Yuchengco College of Business
                                    </a>
                                    <a href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                        College of Arts and Science
                                    </a>
                                    <a href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                        College of Computer and Information Science
                                    </a>
                                    <a href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                        College of Engineering and Architecture
                                    </a>
                                    <a href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                        College of Health Sciences
                                    </a>
                                    <a href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                        MMCM Virtual Lifelong Learning Program
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="" className="p-4">Offices <i className='bx bx-caret-down'></i></a>
                    <a href="" className="p-4">Student Life</a>
                    <a href="" className="p-4">News</a>
                    <a href="" className="p-4">Sustainability</a>
                </div>
                <button onClick={handleMenu} className="flex flex-col gap-1 justify-center items-start lg:hidden">
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "rotate-45 translate-y-2.5" : "" }`}></span>
                    <span className={`h-1.5 bg-gray-900 transition-width ease-in-out duration-300 rounded ${menu ? "w-0" : "w-8" }`}></span>
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "-rotate-45 -translate-y-2.5" : "" }`}></span>
                </button>
            </div>
            <div className="lg:hidden">
                <div className={`relative  h-0 w-screen bg-opacity-90 transition ease-in-out duration-300 text-sm ${menu ? "" : "-translate-x-full"} max-w-full z-20`}>
                    <div className="flex flex-col bg-gray-900">
                    
                        <MobileMenu href="#" more={true} label="About" stateKey="about" state={subMenu} handler={handleSubMenu} >
                            About
                            <MobileMenu href="#">
                                Mapua
                            </MobileMenu>
                            <MobileMenu href="#">
                                Meet the Administration
                            </MobileMenu>
                            <MobileMenu href="#">
                                Campus Facilities
                            </MobileMenu>
                        </MobileMenu>

                        <MobileMenu href="#" more={true} stateKey="admission" state={subMenu} handler={handleSubMenu} >
                            Admissions
                            <MobileMenu href="#">
                                Frequently Asked Questions
                            </MobileMenu>
                            <MobileMenu href="#">
                                Protocols for Limited Face-to-Face Classes
                            </MobileMenu>
                            <MobileMenu href="#">
                                Scholarships
                            </MobileMenu>
                            <MobileMenu href="#">
                                Student Testimonies
                            </MobileMenu>
                        </MobileMenu>

                        <MobileMenu href="#" more={true} stateKey="program" state={subMenu} handler={handleSubMenu} >
                            Programs
                            <MobileMenu href="#">
                                Junior High School (JHS)
                            </MobileMenu>
                            <MobileMenu href="#" more={true} stateKey="shs" state={programMenu} handler={handleProgramMenu} >
                                Senior High School (SHS)
                                <MobileMenu>
                                    Humanities and Social Sciences
                                </MobileMenu>
                                <MobileMenu>
                                    Information and Communications Technology
                                </MobileMenu>
                                <MobileMenu>
                                    Science, Technology, Engineering, and Mathematics
                                </MobileMenu>
                            </MobileMenu>
                            <MobileMenu href="#" more={true} stateKey="college" state={programMenu} handler={handleProgramMenu} >
                                College
                                <MobileMenu href="#" more={true} stateKey="more_atycb" state={collegeMenu} handler={handleCollegeMenu}>
                                    Alfonso T. Yuchengco College of Business
                                    <MobileMenu>
                                        Accountancy
                                    </MobileMenu>
                                    <MobileMenu>
                                        Entrepreneurship
                                    </MobileMenu>
                                    <MobileMenu>
                                        Management Accounting
                                    </MobileMenu>
                                </MobileMenu>
                                <MobileMenu href="#" more={true} stateKey="more_cas" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Arts and Science
                                    <MobileMenu>
                                        Biology
                                    </MobileMenu>
                                    <MobileMenu>
                                        Communication
                                    </MobileMenu>
                                    <MobileMenu>
                                        Multimedia Arts
                                    </MobileMenu>
                                    <MobileMenu>
                                        Psychology
                                    </MobileMenu>
                                </MobileMenu>
                                <MobileMenu href="#" more={true} stateKey="more_ccis" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Computer and Information Science
                                    <MobileMenu>
                                        Computer Science
                                    </MobileMenu>
                                    <MobileMenu>
                                        Entertainment and Multimedia Computing
                                    </MobileMenu>
                                    <MobileMenu>
                                        Information Systems
                                    </MobileMenu>
                                </MobileMenu>
                                <MobileMenu href="#" more={true} stateKey="more_cea" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Engineering and Architecture
                                    <MobileMenu>
                                        Architecture
                                    </MobileMenu>
                                    <MobileMenu>
                                        Chemical Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Civil Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Computer Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Electrical Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Electronics Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Industrial Engineering
                                    </MobileMenu>
                                    <MobileMenu>
                                        Mechanical Engineering
                                    </MobileMenu>
                                </MobileMenu>
                                <MobileMenu>
                                    College of Health Sciences
                                </MobileMenu>
                                <MobileMenu>
                                    MMCM Virtual Lifelong Learning Program
                                </MobileMenu>
                            </MobileMenu>
                        </MobileMenu>

                        <MobileMenu href="#" more={true} stateKey="office" state={subMenu} handler={handleSubMenu} >
                            Offices
                            <MobileMenu href="#">
                                Registrar
                            </MobileMenu>
                            <MobileMenu href="#">
                                Treasury
                            </MobileMenu>
                            <MobileMenu href="#">
                                Clinic
                            </MobileMenu>
                            <MobileMenu href="#">
                                Guidance and Counseling
                            </MobileMenu>
                            <MobileMenu href="#">
                                Lifelong Learning
                            </MobileMenu>
                        </MobileMenu>

                        <MobileMenu href="#">
                            News
                        </MobileMenu>
                        <MobileMenu href="#">
                            Student Life
                        </MobileMenu>

                        <div className="p-4 flex">
                            <a href="" className="py-2 px-8 text-white bg-red-600">
                                Apply Now
                            </a>
                        </div>
                        <div className="pl-4 pb-8 flex">
                            <a href="" className="py-2 px-8 text-white bg-blue-800">
                                Ask Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}