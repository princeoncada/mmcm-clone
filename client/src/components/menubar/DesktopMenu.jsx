/* eslint-disable react/prop-types */
import DesktopMenuItem from "./DesktopMenuItem";

export default function DesktopMenu({ more, href, stateKey, state, handlerEnter, handlerLeave, children }) {
    return (
        <>
        {
            more ? 
                <div>
                    <a href={href} onMouseEnter={() => { handlerEnter(stateKey) }} onMouseLeave={() => { handlerLeave(stateKey) }} className={`p-4 transition-border-color text-sm ease-in-out duration-300 border-b-4 ${state[stateKey] ? "border-gray-700" : "border-white"}`}> {children[0]} <i className='bx bx-caret-down'></i></a>
                    <div className={`${state[stateKey] ? "opacity-100" : "opacity-0 invisible"} text-sm flex flex-col absolute transition-all ease-out duration-300`} style={{
                        transform: 'translateY(1.10rem)'
                    }}>
                        {
                            children.map((child, index) => {
                                if (index == 0) {
                                    return null;
                                }

                                let childProps = child.props

                                if (childProps.more) {
                                    return (
                                        <DesktopMenuItem more={childProps.more} subState={childProps.subState} subStateKey={childProps.subStateKey} href={childProps.href} key={index} stateKey={stateKey} handlerEnter={handlerEnter} handlerLeave={handlerLeave}>
                                            {childProps.children}
                                        </DesktopMenuItem>
                                    );
                                }

                                return (
                                    <DesktopMenuItem href={childProps.href} key={index} stateKey={stateKey} handlerEnter={handlerEnter} handlerLeave={handlerLeave}>
                                        {childProps.children}
                                    </DesktopMenuItem>
                                );
                            })
                        }
                    </div>
                </div>
                
                :

                <div>
                    <a href={href} onMouseEnter={() => { handlerEnter(stateKey) }} onMouseLeave={() => { handlerLeave(stateKey) }} className={`p-4 transition-border-color text-sm ease-in-out duration-300 border-b-4 ${state[stateKey] ? "border-gray-700" : "border-white"}`}> {children}</a>
                </div>
                
        }
        </>
    );
}