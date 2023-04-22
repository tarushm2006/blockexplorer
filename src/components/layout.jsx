import React from "react";
import TxStream from "./txStream";
import BlockStream from "./blockStream";

function Layout(blockNum, alchemy){
    return(
        <div className="grid grid-cols-2">
        <TxStream blockNumber={blockNum} alchemy={alchemy}/>
        <BlockStream />
        </div>
    )
}

export default Layout;