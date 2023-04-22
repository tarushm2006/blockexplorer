import React from "react";
import { useSelector } from "react-redux";

function BlockStream(){
    const txs = useSelector((state)=>state.txStream.txs);
  
    return(
        <div className="border-2 border-solid">
         <h2 className="m-5 font-bold">Latest Transactions</h2>
         <ul>
            {txs.map((tx,index)=><li key={index}>
                <div className="grid grid-cols-6">
                    <div className="m-5 font-medium">{tx}</div>
                </div>
            </li>)}
         </ul>
        </div>
    )
}

export default BlockStream;