/* eslint-disable react/prop-types */
export default function DesktopMenuItem({ more, href, subState, subStateKey, stateKey, handlerEnter, handlerLeave, children }) {
    return (
        <>
        {
            more ? 
                    <div className="flex flex-row relative">
                        <a onMouseEnter={() => { handlerEnter(stateKey); handlerEnter(subStateKey) }} onMouseLeave={() => { handlerLeave(stateKey); handlerLeave(subStateKey) }} href="" className="flex-1 flex flex-row items-center justify-between p-4 bg-white hover:bg-gray-700 text-sm hover:text-white transition-color ease-in-out duration-300">
                            { children[0] } <i className='bx bx-caret-right ml-5'></i>
                        </a>
                        <div className={`${ subState[subStateKey] ? "opacity-100" : "opacity-0 invisible"} flex flex-col absolute transition-all ease-out duration-300 left-full text-sm`}>
                            {
                                children.map((child, index) => {
                                    if ( index == 0 ) {
                                        return null;
                                    }
                                    let childProps = child.props
                                    return (
                                        <a href={childProps.href} key={index} onMouseEnter={() => { handlerEnter(stateKey); handlerEnter(subStateKey) }} onMouseLeave={() => { handlerLeave(stateKey); handlerLeave(subStateKey) }} className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300 whitespace-nowrap">
                                            { childProps.children }
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>

                    :

                    <a href={href} onMouseEnter={() => { handlerEnter(stateKey) }} onMouseLeave={() => { handlerLeave(stateKey) }} className="p-4 bg-white hover:bg-gray-700 text-sm hover:text-white transition-color ease-in-out duration-300">
                        { children }
                    </a>
        }
        </>
    );
}