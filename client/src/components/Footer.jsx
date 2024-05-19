export default function Footer() {
    return (
        <div>
            <div className="bg-neutral-500 ">
                <div className="flex flex-col xl:hidden justify-center items-center p-8 gap-5">
                    <img className="w-1/4 md:w-1/5" src="./mmcm-footer.png" alt="" />
                    <div className="text-sm text-white text-center leading-6 md:hidden">
                        Gen. Douglas MacArthur Hwy, Matina, Davao City
                        <br />
                        8000 Davao del Sur, Philippines
                        <br />
                        admissions@mcm.edu.ph | support@mcm.edu.ph
                        <br />
                        0918 918 1626 | 0999 227 7493 | 0917 831 8048
                    </div>
                    <div className="hidden md:flex text-white flex-row gap-4 font-semibold">
                        <a href="">About</a>
                        <a href="">Admissions</a>
                        <a href="">Programs</a>
                        <a href="">Offices</a>
                        <a href="">Student Life</a>
                        <a href="">News</a>
                    </div>
                    <div className="hidden md:flex flex-row text-white gap-6 text-sm">
                        <div className="flex flex-row items-center gap-5">
                            <div>
                                <i className='bx bxs-map-pin text-2xl' ></i>
                            </div>
                            <div>
                                Gen. Douglas MacArthur Hwy
                                <br />
                                Matina, Davao City 8000
                                <br />
                                Davao del Sur, Philippines
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <div>
                                <i className='bx bx-at text-2xl'></i>
                            </div>
                            <div>
                                admissions@mcm.edu.ph
                                <br />
                                support@mcm.edu.ph
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <div>
                                <i className='bx bx-mobile text-2xl' ></i>
                            </div>
                            <div>
                                0918 918 1626
                                <br />
                                0999 227 7493
                                <br />
                                0917 831 8048
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 text-4xl text-white">
                        <a className='bx bxl-facebook' ></a>
                        <a className='bx bxl-linkedin' ></a>
                        <a className='bx bxl-youtube' ></a>
                        <a className='bx bxl-twitter' ></a>
                        <a className='bx bxl-instagram' ></a>
                    </div>
                </div>






                <div className="hidden flex-row xl:flex justify-center items-center p-16 gap-24">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="text-white flex flex-row gap-4 font-semibold">
                            <a href="">About</a>
                            <a href="">Admissions</a>
                            <a href="">Programs</a>
                            <a href="">Offices</a>
                            <a href="">Student Life</a>
                            <a href="">News</a>
                        </div>
                        <div className="flex flex-row text-white gap-8 text-sm">
                            <div className="flex flex-row items-center gap-5">
                                <div>
                                    <i className='bx bxs-map-pin text-2xl' ></i>
                                </div>
                                <div>
                                    Gen. Douglas MacArthur Hwy
                                    <br />
                                    Matina, Davao City 8000
                                    <br />
                                    Davao del Sur, Philippines
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div>
                                    <i className='bx bx-at text-2xl'></i>
                                </div>
                                <div>
                                    admissions@mcm.edu.ph
                                    <br />
                                    support@mcm.edu.ph
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div>
                                    <i className='bx bx-mobile text-2xl' ></i>
                                </div>
                                <div>
                                    0918 918 1626
                                    <br />
                                    0999 227 7493
                                    <br />
                                    0917 831 8048
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-7">
                        <img className="w-1/4 md:w-1/5 xl:w-32" src="./mmcm-footer.png" alt="" />
                        <div className="flex flex-row gap-6 text-4xl text-white">
                            <a className='bx bxl-facebook' ></a>
                            <a className='bx bxl-linkedin' ></a>
                            <a className='bx bxl-youtube' ></a>
                            <a className='bx bxl-twitter' ></a>
                            <a className='bx bxl-instagram' ></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-white bg-black text-xs p-3 font-semibold">
                Copyright 2022 | Mapúa Malayan College Mindanao | All Rights Reserved | Cloned by Prince Oncada
            </div>
        </div>
    );
}