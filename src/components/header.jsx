import React from "react";

function Header(){
    return(
        <div className="flex-auto grid grid-cols-6 text-white bg-black">
           <h1 className="font-mono m-5 text-2xl "> AUscan</h1>
               <ul className="m-5 list-disc grid grid-cols-3 col-span-2">
                <li className="">Transactions</li>
                <li className="">Blocks</li>
                <li>Accounts</li>
            </ul>
            <h2 className="m-5 col-start-6">Connect wallet</h2>
        </div>
    )
}

export default Header;