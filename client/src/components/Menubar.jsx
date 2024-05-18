import { useState } from "react";
import SubMenu from "./menubar/SubMenu.jsx";

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
                    <div>
                        <a href="" onMouseEnter={() => { handleBorderOnEnter("about") }} onMouseLeave={() => { handleBorderOnLeave("about") }} className={`p-4 transition-border-color ease-in-out duration-300 border-b-4 ${ subMenu["about"] ? "border-gray-700" : "border-white" }`}>About <i className='bx bx-caret-down'></i></a>
                        <div className={`${ subMenu["about"] ? "opacity-100" : "opacity-0 invisible" } flex flex-col absolute transition-all ease-out duration-300`} style={{
                            transform: 'translateY(1.15rem)'
                        }}>
                            <a onMouseEnter={() => { handleBorderOnEnter("about") }} onMouseLeave={() => { handleBorderOnLeave("about") }}  href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Mapua
                            </a>
                            <a onMouseEnter={() => { handleBorderOnEnter("about") }} onMouseLeave={() => { handleBorderOnLeave("about") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Meet the Administration
                            </a>
                            <a onMouseEnter={() => { handleBorderOnEnter("about") }} onMouseLeave={() => { handleBorderOnLeave("about") }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
                                Campus Facilities
                            </a>
                        </div>
                    </div>

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
                    
                        <SubMenu href="#" more={true} label="About" stateKey="about" state={subMenu} handler={handleSubMenu} >
                            About
                            <SubMenu href="#">
                                Mapua
                            </SubMenu>
                            <SubMenu href="#">
                                Meet the Administration
                            </SubMenu>
                            <SubMenu href="#">
                                Campus Facilities
                            </SubMenu>
                        </SubMenu>

                        <SubMenu href="#" more={true} stateKey="admission" state={subMenu} handler={handleSubMenu} >
                            Admissions
                            <SubMenu href="#">
                                Frequently Asked Questions
                            </SubMenu>
                            <SubMenu href="#">
                                Protocols for Limited Face-to-Face Classes
                            </SubMenu>
                            <SubMenu href="#">
                                Scholarships
                            </SubMenu>
                            <SubMenu href="#">
                                Student Testimonies
                            </SubMenu>
                        </SubMenu>

                        <SubMenu href="#" more={true} stateKey="program" state={subMenu} handler={handleSubMenu} >
                            Programs
                            <SubMenu href="#">
                                Junior High School (JHS)
                            </SubMenu>
                            <SubMenu href="#" more={true} stateKey="shs" state={programMenu} handler={handleProgramMenu} >
                                Senior High School (SHS)
                                <SubMenu>
                                    Humanities and Social Sciences
                                </SubMenu>
                                <SubMenu>
                                    Information and Communications Technology
                                </SubMenu>
                                <SubMenu>
                                    Science, Technology, Engineering, and Mathematics
                                </SubMenu>
                            </SubMenu>
                            <SubMenu href="#" more={true} stateKey="college" state={programMenu} handler={handleProgramMenu} >
                                College
                                <SubMenu href="#" more={true} stateKey="more_atycb" state={collegeMenu} handler={handleCollegeMenu}>
                                    Alfonso T. Yuchengco College of Business
                                    <SubMenu>
                                        Accountancy
                                    </SubMenu>
                                    <SubMenu>
                                        Entrepreneurship
                                    </SubMenu>
                                    <SubMenu>
                                        Management Accounting
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu href="#" more={true} stateKey="more_cas" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Arts and Science
                                    <SubMenu>
                                        Biology
                                    </SubMenu>
                                    <SubMenu>
                                        Communication
                                    </SubMenu>
                                    <SubMenu>
                                        Multimedia Arts
                                    </SubMenu>
                                    <SubMenu>
                                        Psychology
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu href="#" more={true} stateKey="more_ccis" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Computer and Information Science
                                    <SubMenu>
                                        Computer Science
                                    </SubMenu>
                                    <SubMenu>
                                        Entertainment and Multimedia Computing
                                    </SubMenu>
                                    <SubMenu>
                                        Information Systems
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu href="#" more={true} stateKey="more_cea" state={collegeMenu} handler={handleCollegeMenu}>
                                    College of Engineering and Architecture
                                    <SubMenu>
                                        Architecture
                                    </SubMenu>
                                    <SubMenu>
                                        Chemical Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Civil Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Computer Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Electrical Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Electronics Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Industrial Engineering
                                    </SubMenu>
                                    <SubMenu>
                                        Mechanical Engineering
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu>
                                    College of Health Sciences
                                </SubMenu>
                                <SubMenu>
                                    MMCM Virtual Lifelong Learning Program
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>

                        <SubMenu href="#" more={true} stateKey="office" state={subMenu} handler={handleSubMenu} >
                            Offices
                            <SubMenu href="#">
                                Registrar
                            </SubMenu>
                            <SubMenu href="#">
                                Treasury
                            </SubMenu>
                            <SubMenu href="#">
                                Clinic
                            </SubMenu>
                            <SubMenu href="#">
                                Guidance and Counseling
                            </SubMenu>
                            <SubMenu href="#">
                                Lifelong Learning
                            </SubMenu>
                        </SubMenu>

                        <SubMenu href="#">
                            News
                        </SubMenu>
                        <SubMenu href="#">
                            Student Life
                        </SubMenu>

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