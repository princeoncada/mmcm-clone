/* eslint-disable react/prop-types */
export default function DesktopMenuItem({ stateKey, handlerEnter, handlerLeave, children }) {
    return (
        <a onMouseEnter={() => { handlerEnter(stateKey) }} onMouseLeave={() => { handlerLeave(stateKey) }} href="" className="p-4 bg-white hover:bg-gray-700 hover:text-white transition-color ease-in-out duration-300">
            { children }
        </a>
    );
}