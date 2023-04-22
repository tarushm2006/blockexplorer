import React, {useEffect} from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function TxStream(){
   // let block = blockNumber.blockNumber.blockNum;
    const latestBlockHash = useSelector((state)=>state.blockStream.hash);
    const latestBlockNumber = useSelector((state)=>state.blockStream.number);
    const latestMiner = useSelector((state)=>state.blockStream.miner);
    const [renderObject,setRenderObject] = useState([]);

    useEffect(()=>{
        for(let i = 0; i < latestBlockHash.length; i++){
          let object = {
            hash: latestBlockHash[i],
            number: latestBlockNumber[i],
            miner: latestMiner[i],
          }
          if(renderObject.length<10){
            setRenderObject([object,...renderObject]);
          }else if(renderObject.length === 10){
            setRenderObject([object,...renderObject.slice(0,9)]);
          }
        }

    },[latestBlockHash,latestBlockNumber]);
    return(
        <div className="border-2 border-solid">
        <h2 className="m-5 font-bold">Latest Blocks</h2>
        <ul>
       {renderObject.map(block=><li><div className="grid grid-cols-6">
        <div className="m-3 text-white bg-black p-3 rounded-md float-left w-fit">{block.number}</div>
        <div className="m-3">
          <div className=""><div className="font-bold">Block Hash: </div>{block.hash.slice(0,20)}......</div>
        </div>
        <div className="m-3 mx-28">
          <div className=""><div className="font-bold">Validator: </div>{block.miner.slice(0,20)}......</div>
        </div>
       </div></li>)}
        </ul>
        </div>
    )
}
export default TxStream;