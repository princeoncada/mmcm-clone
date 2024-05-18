/* eslint-disable react/prop-types */
export default function SubMenu({ href, more=false, stateKey, state, handler, children }) {
    return (
        <>
            <div className="flex flex-row items-center pr-3">
                <a href={href} className="text-white p-4 block w-full">
                    {more ? children[0] : children}
                </a>
                {more && <button className="w-8 h-8 ml-3 text-white" onClick={() => { handler(stateKey) }}>{!state[stateKey] ? <i className='bx bx-caret-down'></i> : <i className='bx bx-caret-up'></i>}</button>}
            </div>
            { more && 
                children.map((child, index) => {
                    if (index === 0) return null;
                    return (
                        <div key={index} className={`pl-5 z-10 ${ state[stateKey] ? "block" : "hidden" }`}>
                            { child }
                        </div>
                    );
                })
            }
        </>
    );
}