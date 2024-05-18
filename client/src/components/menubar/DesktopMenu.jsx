/* eslint-disable react/prop-types */
import DesktopMenuItem from "./DesktopMenuItem";

export default function DesktopMenu({ stateKey, state, handlerEnter, handlerLeave, children }) {
    return (
        <div>
            <a href="" onMouseEnter={() => { handlerEnter(stateKey) }} onMouseLeave={() => { handlerLeave(stateKey) }} className={`p-4 transition-border-color ease-in-out duration-300 border-b-4 ${ state[stateKey] ? "border-gray-700" : "border-white"}`}>About <i className='bx bx-caret-down'></i></a>
            <div className={`${ state[stateKey] ? "opacity-100" : "opacity-0 invisible"} flex flex-col absolute transition-all ease-out duration-300`} style={{
                transform: 'translateY(1.15rem)'
            }}> 
                {
                    children.map((child, index) => {
                        return (
                            <DesktopMenuItem key={index} stateKey={ stateKey } handlerEnter={handlerEnter} handlerLeave={handlerLeave}>
                                { child }
                            </DesktopMenuItem>
                        );
                    })
                }
            </div>
        </div>
    );
}