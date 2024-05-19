/* eslint-disable react/no-unknown-property */
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

    const [cslMenu, setCslMenu] = useState({
        csl: false
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
        if (value === "csl") {
            setCslMenu((x) => {
                return {
                    ...x,
                    [value]: true
                };
            });
        } else if (value === "college" || value === "shs") {
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
        if (value === "csl") {
            setCslMenu((x) => {
                return {
                    ...x,
                    [value]: false
                };
            });
        } else if (value === "college" || value === "shs") {
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
            <div className="flex flex-row justify-between h-16 md:h-24 lg:h-28 xl:h-20 items-center lg:justify-between px-5 sticky top-12 xl:top-14 z-50 bg-white">
                <a href="" className="lg:hidden">
                    <img src="./mmcm-logo.png" className="h-16 md:h-24" alt="" />
                </a>
                <a href="" className="hidden lg:flex py-3 w-1/4 h-auto xl:h-20">
                    <img src="./mmcm-logo2.png" alt="" />
                </a>
                <div className="hidden xl:flex justify-center items-center font-medium z-50">

                    <DesktopMenu more={true} stateKey={ "about" } state={ subMenu } handlerEnter={ handleBorderOnEnter } handlerLeave={ handleBorderOnLeave }>
                        About
                        <div href="#">
                            Mapua
                        </div>
                        <div>
                            Meet the Administration
                        </div>
                        <div>
                            Campus Facilities
                        </div>
                    </DesktopMenu>

                    <DesktopMenu more={true} stateKey={"admission"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={ handleBorderOnLeave }>
                        Admission
                        <div>
                            Frequently Asked Questions
                        </div>
                        <div>
                            Scholarships
                        </div>
                        <div>
                            Student Testimonies
                        </div>
                        <div>
                            Protocols for Limited Face-to-Face Classes
                        </div>
                    </DesktopMenu>

                    <DesktopMenu more={true} stateKey={"program"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={handleBorderOnLeave}>
                        Program
                        <div>
                            Junior High School (JHS)
                        </div>
                        <div more={true} subStateKey={"shs"} subState={programMenu}>
                            Senior High School (SHS)
                            <div href="#">
                                Humanities and Social Sciences
                            </div>
                            <div href="#">
                                Information and Communications Technology
                            </div>
                            <div>
                                Science, Technology, Engineering, and Mathematics
                            </div>
                        </div>
                        <div more={true} subStateKey={"college"} subState={programMenu}>
                            College
                            <div href="#">
                                Alfonso T. Yuchengco College of Business
                            </div>
                            <div href="#">
                                College of Arts and Science
                            </div>
                            <div>
                                College of Computer and Information Science
                            </div>
                            <div>
                                College of Engineering and Architecture
                            </div>
                            <div>
                                College of Health Sciences
                            </div>
                            <div>
                                MMCM Virtual Lifelong Learning Program
                            </div>
                        </div>
                    </DesktopMenu>

                    <DesktopMenu more={true} stateKey={"office"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={handleBorderOnLeave}>
                        Offices
                        <div>
                            Treasurer&apos;s Office
                        </div>
                        <div>
                            Registrar&apos;s Office
                        </div>
                        <div>
                            Lifelong Learning
                        </div>
                        <div>
                            Center for Health Services and Wellness
                        </div>
                        <div>
                            Guidance and Counseling
                        </div>
                        <div>
                            Office for Research, Development and Innovation
                        </div>
                        <div>
                            Quality Assurance and Enhancement Office
                        </div>
                        <div>
                            Office for Corporate Partnerships
                        </div>
                        <div more={ true } subState={cslMenu} subStateKey={"csl"}>
                            Center for Service-Learning and Community Engagement
                            <div>
                                Project H.E.L.P.
                            </div>
                        </div>
                        <div>
                            Human Resources Management
                        </div>
                        <div>
                            Library
                        </div>
                    </DesktopMenu>

                    <DesktopMenu stateKey={"student_life"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={handleBorderOnLeave}>
                        Student Life
                    </DesktopMenu>

                    <DesktopMenu stateKey={"news"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={handleBorderOnLeave}>
                        News
                    </DesktopMenu>

                    <DesktopMenu stateKey={"sustainability"} state={subMenu} handlerEnter={handleBorderOnEnter} handlerLeave={handleBorderOnLeave}>
                        Sustainability
                    </DesktopMenu>

                    <div className="flex flex-row gap-2 ml-3">
                        <div>
                            <a href="" className="p-4 text-white bg-red-600 hover:bg-red-700 transition-colors ease-in-out duration-300 text-sm border-b-4 border-white">Ask Us</a>
                        </div>
                        <div>
                            <a href="" className="p-4 text-white bg-blue-800 hover:bg-blue-900 transition-colors ease-in-out duration-300 text-sm border-b-4 border-white">Apply Now</a>
                        </div>
                    </div>

                </div>
                <button onClick={handleMenu} className="flex flex-col gap-1 justify-center items-start xl:hidden z-50">
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "rotate-45 translate-y-2.5" : "" }`}></span>
                    <span className={`h-1.5 bg-gray-900 transition-width ease-in-out duration-300 rounded ${menu ? "w-0" : "w-8" }`}></span>
                    <span className={`w-8 h-1.5 bg-gray-900 transition ease-in-out duration-300 rounded ${ menu ? "-rotate-45 -translate-y-2.5" : "" }`}></span>
                </button>
            </div>
            <div className="xl:hidden">
                <div className={`fixed mt-4 top-24 md:top-32 md:mt-4 lg:top-36 lg:mt-4 h-0 w-screen bg-opacity-90 transition ease-in-out duration-300 text-sm ${menu ? "" : "-translate-x-full"} max-w-full z-50`}>
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